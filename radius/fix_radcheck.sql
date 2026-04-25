-- ============================================================
--  fix_radcheck.sql
--  À appliquer UNE FOIS sur la base existante.
--
--  1. Corrige la table radacct (INTEGER UNSIGNED → BIGINT)
--  2. Peuple radcheck depuis les clients déjà existants
--  3. Vérifie le résultat
-- ============================================================

-- 1. Créer radacct correctement (sans UNSIGNED)
DROP TABLE IF EXISTS radacct;
CREATE TABLE radacct (
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
CREATE INDEX IF NOT EXISTS idx_radacct_username      ON radacct (username);
CREATE INDEX IF NOT EXISTS idx_radacct_acctsessionid ON radacct (acctsessionid);
CREATE INDEX IF NOT EXISTS idx_radacct_acctstarttime ON radacct (acctstarttime);
CREATE INDEX IF NOT EXISTS idx_radacct_acctstoptime  ON radacct (acctstoptime);
CREATE INDEX IF NOT EXISTS idx_radacct_nasipaddress  ON radacct (nasipaddress);

-- 2. Peupler radcheck depuis tous les clients existants
--    (le trigger ne s'est pas déclenché car ON CONFLICT les a ignorés)
INSERT INTO radcheck (username, attribute, op, value)
SELECT UPPER(nom_famille), 'Cleartext-Password', ':=', numero_chambre
FROM clients
ON CONFLICT DO NOTHING;

-- Mise à jour au cas où les mots de passe auraient changé
UPDATE radcheck rc
SET value = c.numero_chambre
FROM clients c
WHERE rc.username = UPPER(c.nom_famille)
  AND rc.attribute = 'Cleartext-Password';

-- 3. Vérification
SELECT username, attribute, op, value FROM radcheck ORDER BY username;
