CREATE TABLE parents (
  parent_id SERIAL PRIMARY KEY,
  firebase_id TEXT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  email_address VARCHAR(100),
  profile_picture TEXT);
  

INSERT INTO parents
    (firebase_id, first_name,last_name,email_address,profile_picture)
VALUES
   ('ZPWGseKYLUXSoadmiixf7SWZdHJ3','chet','jogia','chetjogia@gmail.com','https://static.wixstatic.com/media/25c1eb_4f7a7b6befbd4b8db772a7780b83f8cf~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/50964901_2030635707241250_63033694665496.jpg'),



CREATE TABLE children (
  children_id SERIAL PRIMARY KEY,
  parent_id INT REFERENCES parents (parent_id),
  dob DATE,
  gender TEXT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  profile_picture TEXT);
  


INSERT INTO children
    (parent_id,dob,gender,first_name, last_name, profile_picture)
VALUES
   (1, '2022/01/02', 'male', 'jimi', 'hendrix', 'https://blankonblank.org/wp-content/uploads/2015/06/Jimi-Hendrix-as-a-baby-e1460326533407.jpg'),
   (1, '2022/05/22', 'female', 'jane', 'doe', 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/224x336/A31928.jpg');



CREATE TABLE feeding (
  feeding_id SERIAL PRIMARY KEY,
  children_id INT REFERENCES children (children_id),
  quantity NUMERIC(4,2),
  type TEXT,
  feeding_time TIMESTAMP,
  comment TEXT);
  

INSERT INTO feeding
    (children_id, quantity, type, feeding_time, comment)
VALUES
  (1, 10.02, 'breast milk', '2022/11/09 05:00:23', 'good feed'),
  (1, 09.02, 'breast milk', '2022/10/06 16:00:23', 'good feed'),
  (2, 11.74, 'bottle milk', '2022/11/07 20:05:23', 'half bottle');
