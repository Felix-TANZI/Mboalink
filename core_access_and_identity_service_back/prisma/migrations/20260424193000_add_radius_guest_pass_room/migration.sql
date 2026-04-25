-- Link guest passes to a room/client for the receptionist -> captive portal demo flow.
ALTER TABLE "GuestPass"
ADD COLUMN IF NOT EXISTS "roomId" TEXT,
ADD COLUMN IF NOT EXISTS "clientName" TEXT;

ALTER TABLE "GuestPass"
ADD CONSTRAINT "GuestPass_roomId_fkey"
FOREIGN KEY ("roomId") REFERENCES "Room"("id")
ON DELETE SET NULL ON UPDATE CASCADE;

-- FreeRADIUS SQL tables used by rlm_sql.
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

CREATE TABLE IF NOT EXISTS radpostauth (
    id         BIGSERIAL PRIMARY KEY,
    username   VARCHAR(64)  NOT NULL DEFAULT '',
    pass       VARCHAR(64)  NOT NULL DEFAULT '',
    reply      VARCHAR(32)  NOT NULL DEFAULT '',
    authdate   TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_radpostauth_username ON radpostauth (username);
CREATE INDEX IF NOT EXISTS idx_radpostauth_authdate ON radpostauth (authdate);

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
CREATE INDEX IF NOT EXISTS idx_radacct_username      ON radacct (username);
CREATE INDEX IF NOT EXISTS idx_radacct_acctsessionid ON radacct (acctsessionid);
CREATE INDEX IF NOT EXISTS idx_radacct_acctstarttime ON radacct (acctstarttime);
CREATE INDEX IF NOT EXISTS idx_radacct_acctstoptime  ON radacct (acctstoptime);
CREATE INDEX IF NOT EXISTS idx_radacct_nasipaddress  ON radacct (nasipaddress);
