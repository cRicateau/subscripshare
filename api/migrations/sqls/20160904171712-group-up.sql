CREATE TABLE usergroup (
  id SERIAL PRIMARY KEY,
  thumbnail TEXT,
  description TEXT,
  name character varying(128)
);

CREATE TABLE usergroupsubscriber (
  id SERIAL PRIMARY KEY,
  userid INTEGER NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
  usergroupid INTEGER NOT NULL REFERENCES usergroup(id) ON DELETE CASCADE
);

CREATE TABLE usergroupsubscription (
  id SERIAL PRIMARY KEY,
  usergroupid INTEGER NOT NULL REFERENCES usergroup(id) ON DELETE CASCADE,
  subscriptionid INTEGER NOT NULL REFERENCES subscription(id) ON DELETE CASCADE
);
