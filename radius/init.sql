-- ============================================================
--  Portail Captif Wi-Fi — Hilton Brazzaville
--  Base de données unifiée : portail + FreeRADIUS
--
--  Schéma :
--   • Tables portail : clients, connexions
--   • Tables FreeRADIUS standard (rlm_sql) :
--       radcheck, radreply, radusergroup, radgroupcheck,
--       radgroupreply, radacct, radpostauth
--   • Trigger : sync automatique clients → radcheck
-- ============================================================


-- ============================================================
--  TABLES PORTAIL
-- ============================================================

CREATE TABLE IF NOT EXISTS clients (
    id             SERIAL PRIMARY KEY,
    prenom         VARCHAR(100) NOT NULL,
    nom_famille    VARCHAR(100) NOT NULL,
    numero_chambre VARCHAR(10)  NOT NULL UNIQUE,
    email          VARCHAR(150),
    telephone      VARCHAR(20),
    date_arrivee   DATE         NOT NULL DEFAULT CURRENT_DATE,
    date_depart    DATE,
    actif          BOOLEAN      NOT NULL DEFAULT TRUE,
    created_at     TIMESTAMP    NOT NULL DEFAULT NOW(),
    updated_at     TIMESTAMP    NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS connexions (
    id           SERIAL PRIMARY KEY,
    client_id    INTEGER      NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
    ip_address   VARCHAR(45),
    connected_at TIMESTAMP    NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_clients_nom_famille    ON clients (UPPER(nom_famille));
CREATE INDEX IF NOT EXISTS idx_clients_numero_chambre ON clients (numero_chambre);
CREATE INDEX IF NOT EXISTS idx_connexions_client_id   ON connexions (client_id);


-- ============================================================
--  TABLES FREERADIUS (schéma standard rlm_sql PostgreSQL)
--
--  radcheck   : credentials de chaque utilisateur
--               username = client{id} (en minuscules)
--               attribute = Cleartext-Password
--               value = numero_chambre (le mot de passe RADIUS)
--               op = ':=' (assignation)
--
--  radreply   : attributs renvoyés au NAS après Accept
--               (ex: Session-Timeout, bandwidth limits)
--
--  radusergroup / radgroupcheck / radgroupreply :
--               gestion par groupes (optionnel ici)
--
--  radacct    : accounting — log des sessions actives/terminées
--
--  radpostauth: log de chaque tentative auth (succès + échec)
-- ============================================================

CREATE TABLE IF NOT EXISTS radcheck (
    id         SERIAL PRIMARY KEY,
    username   VARCHAR(64)  NOT NULL DEFAULT '',
    attribute  VARCHAR(64)  NOT NULL DEFAULT '',
    op         VARCHAR(2)   NOT NULL DEFAULT ':=',
    value      VARCHAR(253) NOT NULL DEFAULT ''
);
CREATE INDEX IF NOT EXISTS idx_radcheck_username ON radcheck (username);

CREATE TABLE IF NOT EXISTS radreply (
    id         SERIAL PRIMARY KEY,
    username   VARCHAR(64)  NOT NULL DEFAULT '',
    attribute  VARCHAR(64)  NOT NULL DEFAULT '',
    op         VARCHAR(2)   NOT NULL DEFAULT '=',
    value      VARCHAR(253) NOT NULL DEFAULT ''
);
CREATE INDEX IF NOT EXISTS idx_radreply_username ON radreply (username);

CREATE TABLE IF NOT EXISTS radusergroup (
    username   VARCHAR(64)  NOT NULL DEFAULT '',
    groupname  VARCHAR(64)  NOT NULL DEFAULT '',
    priority   INTEGER      NOT NULL DEFAULT 1
);
CREATE INDEX IF NOT EXISTS idx_radusergroup_username ON radusergroup (username);

CREATE TABLE IF NOT EXISTS radgroupcheck (
    id         SERIAL PRIMARY KEY,
    groupname  VARCHAR(64)  NOT NULL DEFAULT '',
    attribute  VARCHAR(64)  NOT NULL DEFAULT '',
    op         VARCHAR(2)   NOT NULL DEFAULT ':=',
    value      VARCHAR(253) NOT NULL DEFAULT ''
);
CREATE INDEX IF NOT EXISTS idx_radgroupcheck_groupname ON radgroupcheck (groupname);

CREATE TABLE IF NOT EXISTS radgroupreply (
    id         SERIAL PRIMARY KEY,
    groupname  VARCHAR(64)  NOT NULL DEFAULT '',
    attribute  VARCHAR(64)  NOT NULL DEFAULT '',
    op         VARCHAR(2)   NOT NULL DEFAULT '=',
    value      VARCHAR(253) NOT NULL DEFAULT ''
);
CREATE INDEX IF NOT EXISTS idx_radgroupreply_groupname ON radgroupreply (groupname);

CREATE TABLE IF NOT EXISTS radacct (
    radacctid          BIGSERIAL PRIMARY KEY,
    acctsessionid      VARCHAR(64)  NOT NULL DEFAULT '',
    acctuniqueid       VARCHAR(32)  NOT NULL DEFAULT '' UNIQUE,
    username           VARCHAR(64)  NOT NULL DEFAULT '',
    realm              VARCHAR(64)           DEFAULT '',
    nasipaddress       INET         NOT NULL,
    nasportid          VARCHAR(15)           DEFAULT NULL,
    nasporttype        VARCHAR(32)           DEFAULT NULL,
    acctstarttime      TIMESTAMP WITH TIME ZONE DEFAULT NULL,
    acctupdatetime     TIMESTAMP WITH TIME ZONE DEFAULT NULL,
    acctstoptime       TIMESTAMP WITH TIME ZONE DEFAULT NULL,
    acctinterval       INTEGER               DEFAULT NULL,
    acctsessiontime    BIGINT                DEFAULT NULL,
    acctauthentic      VARCHAR(32)           DEFAULT NULL,
    connectinfo_start  VARCHAR(50)           DEFAULT NULL,
    connectinfo_stop   VARCHAR(50)           DEFAULT NULL,
    acctinputoctets    BIGINT                DEFAULT NULL,
    acctoutputoctets   BIGINT                DEFAULT NULL,
    calledstationid    VARCHAR(50)  NOT NULL DEFAULT '',
    callingstationid   VARCHAR(50)  NOT NULL DEFAULT '',
    acctterminatecause VARCHAR(32)  NOT NULL DEFAULT '',
    servicetype        VARCHAR(32)           DEFAULT NULL,
    framedprotocol     VARCHAR(32)           DEFAULT NULL,
    framedipaddress    INET                  DEFAULT NULL
);
CREATE INDEX IF NOT EXISTS idx_radacct_username        ON radacct (username);
CREATE INDEX IF NOT EXISTS idx_radacct_acctsessionid   ON radacct (acctsessionid);
CREATE INDEX IF NOT EXISTS idx_radacct_acctstarttime   ON radacct (acctstarttime);
CREATE INDEX IF NOT EXISTS idx_radacct_acctstoptime    ON radacct (acctstoptime);
CREATE INDEX IF NOT EXISTS idx_radacct_nasipaddress    ON radacct (nasipaddress);

CREATE TABLE IF NOT EXISTS radpostauth (
    id         BIGSERIAL PRIMARY KEY,
    username   VARCHAR(64)  NOT NULL DEFAULT '',
    pass       VARCHAR(64)  NOT NULL DEFAULT '',
    reply      VARCHAR(32)  NOT NULL DEFAULT '',
    authdate   TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_radpostauth_username ON radpostauth (username);
CREATE INDEX IF NOT EXISTS idx_radpostauth_authdate ON radpostauth (authdate);


-- ============================================================
--  TRIGGER : synchronisation clients → radcheck
--
--  Chaque fois qu'un client est inséré ou modifié dans la
--  table `clients`, le trigger met à jour automatiquement
--  `radcheck` pour que FreeRADIUS ait les bons credentials.
--
--  Règle de mapping :
--    RADIUS username = 'client' || id
--    RADIUS password = numero_chambre
-- ============================================================

CREATE OR REPLACE FUNCTION sync_client_to_radcheck()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' OR TG_OP = 'UPDATE' THEN
        -- Remet à plat l'entrée RADIUS de ce client avant réinsertion.
        DELETE FROM radcheck
        WHERE username = 'client' || NEW.id
          AND attribute = 'Cleartext-Password';

        INSERT INTO radcheck (username, attribute, op, value)
        VALUES ('client' || NEW.id, 'Cleartext-Password', ':=', NEW.numero_chambre);

    ELSIF TG_OP = 'DELETE' THEN
        DELETE FROM radcheck
        WHERE username = 'client' || OLD.id
          AND attribute = 'Cleartext-Password';
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_sync_radcheck ON clients;
CREATE TRIGGER trg_sync_radcheck
    AFTER INSERT OR UPDATE OR DELETE ON clients
    FOR EACH ROW EXECUTE FUNCTION sync_client_to_radcheck();


-- ============================================================
--  DONNÉES : 5 clients de démonstration
--  Le trigger peuple automatiquement radcheck à l'insertion.
--  Usernames attendus : client1, client2, client3, client4, client5
-- ============================================================

INSERT INTO clients (prenom, nom_famille, numero_chambre, email, telephone, date_arrivee, date_depart) VALUES
    ('Jean-Pierre', 'DUPONT',  '101', 'dupont@hilton.cg',  '+242 06 100 0001', CURRENT_DATE, CURRENT_DATE + INTERVAL '5 days'),
    ('Marie',       'MARTIN',  '201', 'martin@hilton.cg',  '+242 06 200 0002', CURRENT_DATE, CURRENT_DATE + INTERVAL '3 days'),
    ('Pierre',      'BERNARD', '301', 'bernard@hilton.cg', '+242 06 300 0003', CURRENT_DATE, CURRENT_DATE + INTERVAL '7 days'),
    ('Sophie',      'THOMAS',  '401', 'thomas@hilton.cg',  '+242 06 400 0004', CURRENT_DATE, CURRENT_DATE + INTERVAL '2 days'),
    ('Lucas',       'PETIT',   '501', 'petit@hilton.cg',   '+242 06 500 0005', CURRENT_DATE, CURRENT_DATE + INTERVAL '4 days')
ON CONFLICT (numero_chambre) DO NOTHING;

-- Recalcule les identifiants RADIUS pour tous les clients existants.
DELETE FROM radcheck
WHERE attribute = 'Cleartext-Password'
  AND username LIKE 'client%';

INSERT INTO radcheck (username, attribute, op, value)
SELECT
    'client' || id,
    'Cleartext-Password',
    ':=',
    numero_chambre
FROM clients
WHERE actif = TRUE;

-- Vérification : radcheck doit contenir 5 lignes après l'init
-- SELECT username, attribute, value FROM radcheck;
