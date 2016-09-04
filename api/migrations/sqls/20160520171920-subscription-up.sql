CREATE TABLE subscription (
  id SERIAL PRIMARY KEY,
  name character varying(128),
  description TEXT,
  longdescription TEXT,
  price numeric,
  imagecover TEXT,
  thumbnail TEXT,
  password character varying(128),
  customerId integer
);
