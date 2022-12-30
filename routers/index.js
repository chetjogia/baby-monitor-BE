import express from "express";
import {
  addChild,
  deleteChild,
  getAllChildren,
  getAllParents,
  getChildByID,
  getChildByParentID,
  getParentsByID,
  updateChild,
  getFeeding,
  createNewParent
} from "../models/index.js";

export const router = express.Router();

router.get("/parent", async function (req, res) {
  const parents = await getAllParents();
  res.status(200).json({
    success: true,
    payload: parents,
  });
});

router.post("/parentlogin/", async function (req, res) {
  console.log(req.body)
  const parents = await createNewParent(req.body);
  res.status(200).json({
    success: true,
    payload: parents,
  });
});


router.get("/parent/:id", async function (req, res) {
  const parentID = req.params;
 const parentByID = await getParentsByID(parentID.id);
  res.status(200).json({
    sucess: true,
    payload: parentByID,
  }); 
});

router.get("/children", async function (req, res) {
  const children = await getAllChildren();

  res.status(200).json({
    success: true,
    payload: children
  });
});

router.get("/children/:id", async function (req, res) {
  const childID = req.params;
  const childByID = await getChildByID(childID.id);
  res.status(200).json({
    sucess: true,
    payload: childByID,
  });
});


router.get("/parentchildren/:id", async function (req, res) {
    const parentID = req.params.id;
    const childrenByParentID = await getChildByParentID(parentID);
    res.status(200).json({
      sucess: true,
      payload: childrenByParentID,
    });
  });


router.post("/children", async function (req, res) {
  const childObject = req.body;
  const addedChild = await addChild(childObject);
  res.status(200).json({
    success: true,
    payload: addedChild,
  });
});

router.patch("/children/:id", async function (req, res) {
  const childObject = req.body;
  const childID = req.params.id;
  const updatedChild = await updateChild(childObject, childID);
  res.status(200).json({
    success: true,
    payload: updatedChild,
  });
});

router.delete("/children/:id", async function (req, res) {
  const childID = req.params.id;
  const deleteChildByID = await deleteChild(childID);
  res.status(200).json({
    sucess: true,
    payload: deleteChildByID,
  });
});

router.get("/feeding", async function (req, res) {
  const feeding = await getFeeding();
  res.status(200).json({
    success: true,
    payload: feeding,
  });
});