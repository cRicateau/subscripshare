INSERT INTO usergroup (id, name, description, thumbnail) SELECT nextval('usergroup_id_seq'), 'Jean Book Club', 'Share everything', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Le_Monde.svg/2000px-Le_Monde.svg.png';
INSERT INTO usergroup (id, name, description, thumbnail) SELECT nextval('usergroup_id_seq'), 'Jean Book Club', 'Share everything', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Le_Monde.svg/2000px-Le_Monde.svg.png';

INSERT INTO "user" (id, email, password) SELECT 1, 'clementrp@bamlab.fr', 'share';
INSERT INTO "user" (id, email, password) SELECT 2, 'clementrp@theodo.fr', 'share';

INSERT INTO usergroupsubscriber (id, usergroupid, userid) SELECT nextval('usergroupsubscriber_id_seq'), 1, 1;
INSERT INTO usergroupsubscriber (id, usergroupid, userid) SELECT nextval('usergroupsubscriber_id_seq'), 1, 2;

INSERT INTO subscription (id, name, description, thumbnail, longdescription, imagecover, price, password, customerid)
  SELECT nextval('subscription_id_seq'),
  'LeMonde',
  'Le numero un français',
  'http://noosfeer.com/images/le-monde-icon.png',
  'Sa ligne éditoriale est généralement présentée comme étant de centre gauche, bien que cette affirmation soit récusée par le journal lui-même, qui revendique un traitement non partisan, et son lectorat est majoritairement orienté à gauche. Le Monde est la propriété du groupe Le Monde, détenu depuis 2010 par les hommes d''affaires Xavier Niel, Pierre Bergé et Matthieu Pigasse.',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Le_Monde.svg/2000px-Le_Monde.svg.png',
  '15.99',
  '123lemonde',
  1;

INSERT INTO subscription (id, name, description, thumbnail, longdescription, imagecover, price, password, customerid)
  SELECT nextval('subscription_id_seq'),
  'Les Echos',
  'Toute l''actualité économique',
  'http://cdn.marketplaceimages.windowsphone.com/v8/images/2af437b0-bdb4-4034-a6f6-a1c91d45648e?imageType=ws_icon_medium',
  'Les Échos est un quotidien français d’information économique et financière. Fondé en 1908 par les frères Robert et Émile Servan-Schreiber, il est actuellement propriété du Groupe Les Échos, pôle média du groupe LVMH. D''orientation libérale et imprimé en France, le quotidien économique a perdu début 2012 son seul concurrent direct, La Tribune, désormais essentiellement disponible en format numérique pour l''édition quotidienne avec une version papier hebdomadaire.',
  'https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Logo_Les_%C3%89chos.svg/1024px-Logo_Les_%C3%89chos.svg.png',
  '15.99',
  'lesechos123',
  2;

  INSERT INTO usergroupsubscription (id, usergroupid, subscriptionid) SELECT nextval('usergroupsubscription_id_seq'), 1, 1;
  INSERT INTO usergroupsubscription (id, usergroupid, subscriptionid) SELECT nextval('usergroupsubscription_id_seq'), 1, 2;
