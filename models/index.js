import { pool } from "../db/index.js";

export async function getAllParents() {
  const sqlQuery = "SELECT * FROM parents;";
  const result = await pool.query(sqlQuery);
  const parents = result.rows;
  return parents;
}

export async function getParentsByID(id) {
  const sqlQuery = "SELECT * FROM parents WHERE firebase_id = $1;";
  const sqlDependency = [id];
  const result = await pool.query(sqlQuery, sqlDependency);
  const parentByID = result.rows;
  return parentByID;
}

export async function createNewParent(id){
  const sqlQuery = "INSERT INTO parents(firebase_id, first_name,last_name,email_address,profile_picture) SELECT $1, 'New', 'User', 'new@user.com', 'https://i.stack.imgur.com/l60Hf.png' WHERE NOT EXISTS (SELECT firebase_id FROM parents WHERE firebase_id = $1) RETURNING *;";
  const sqlDependency = [id];
  const result = await pool.query(sqlQuery, sqlDependency);
  const parentByID = result.rows;
  return parentByID;

}


export async function getAllChildren() {
  const sqlQuery = "SELECT * FROM children;";
  const result = await pool.query(sqlQuery);
  console.log("RESULT", result);
  const children = result.rows;
  return children;
}

export async function getChildByID(id) {
  const sqlQuery = "SELECT * FROM children WHERE children_id = $1";
  const sqlDependency = [id];
  const result = await pool.query(sqlQuery, sqlDependency);
  const childByID = result.rows;
  return childByID;
}

export async function addChild(child) {
  const sqlQuery =
    "INSERT INTO children (parent_id, dob, gender, first_name, last_name, profile_picture) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
  const sqlDependency = [
    child.parent_id,
    child.dob,
    child.gender,
    child.first_name,
    child.last_name,
    child.profile_picture,
  ];
  const result = await pool.query(sqlQuery, sqlDependency);
  const addedChild = result.rows;
  return addedChild;
}

export async function updateChild(child, id) {
  const sqlQuery =
    "UPDATE children SET parent_id = $1, dob = $2, gender = $3, first_name = $4, last_name = $5, profile_picture = $6 WHERE children_id = $7 RETURNING *;";
  const sqlDependency = [
    child.parent_id,
    child.dob,
    child.gender,
    child.first_name,
    child.last_name,
    child.profile_picture,
    id,
  ];
  const result = await pool.query(sqlQuery, sqlDependency);
  const updatedChild = result.rows;
  return updatedChild;
}

export async function deleteChild(id) {
  const sqlQuery = "DELETE FROM children WHERE children_id = $1 RETURNING *;";
  const sqlDependency = [id];
  const result = await pool.query(sqlQuery, sqlDependency);
  const deletedChild = result.rows;
  return deletedChild;
}

export async function createDefaultProfile(id) {
  const sqlQuery =
    "INSERT INTO parents (firebase_id, first_name,last_name,email_address,profile_picture) VALUES ($1,'New','User','newuser@gmail.com','https://www.nicepng.com/png/detail/73-730154_open-default-profile-picture-png.png') RETURNING *";
  const sqlDependency = [id];
  const result = await pool.query(sqlQuery, sqlDependency);
  const defaultProfile = result.rows;
  return defaultProfile;
}

export async function getChildByParentID(id) {
  const sqlQuery = "SELECT * FROM children WHERE parent_id = $1;";
  const sqlDependency = [id];
  const result = await pool.query(sqlQuery, sqlDependency);
  const childrenByParentID = result.rows;
  return childrenByParentID;
}

export async function getFeeding() {
  const sqlQuery = "SELECT * FROM feeding;";
  const result = await pool.query(sqlQuery);
  const feeding = result.rows;
  return feeding;
}
