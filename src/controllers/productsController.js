import { db } from "../database/mongo.js";
import dotenv from "dotenv";
dotenv.config();

export async function postProducts(req, res) {
  try {
    await db.collection("products").insertOne(req.body);
    return res.sendStatus(201);
  } catch (err) {
    return res.sendStatus(500);
  }
}
export async function getProducts(req, res) {
  try {
    const products = await db.collection("products").find({}).toArray();
    return res.status(201).send(products);
  } catch (err) {
    return res.sendStatus(500);
  }
}

export async function deleteProducts(req, res) {
  try {
    const { id } = req.params;
    await db.deleteOne({ _id: id });
    return res.status(200).send(products);
  } catch (err) {
    return res.sendStatus(500);
  }
}

export async function getBag(req, res) {
  const { session } = res.locals;
  const findId = await db
    .collection("sessions")
    .findOne({ token: session.token });
  const findUser = await db.collection("users").findOne({ _id: findId.id });
  console.log(findUser);
  if (!findId || !findUser) {
    return res.sendStatus(404);
  }
  res.send("produtos").status(200);
}

export async function updateItemBag(req, res) {
  const { session } = res.locals;
  const findId = await db
    .collection("sessions")
    .findOne({ token: session.token });
  const findUser = await db.collection("users").findOne({ _id: findId.id });
  return res.sendStatus(200);
}

export async function deleteItemBag(req, res) {
  const { session } = res.locals;
  const productInfo = req.body;
  const findId = await db
    .collection("sessions")
    .findOne({ token: session.token });
  const findUser = await db.collection("users").findOne({ _id: findId.id });
  return res.sendStatus(200);
}

export async function postAdrress(req, res) {
  const { session } = res.locals;
  const { adrress } = req.body;
  const findId = await db
    .collection("sessions")
    .findOne({ token: session.token });
  const findUser = await db.collection("users").findOne({ _id: findId.id });
  console.log(findUser);
  res.sendStatus(400);
}
