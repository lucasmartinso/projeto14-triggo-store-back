import { db } from "../database/mongo.js";
import ObjectId from "bson-objectid";
import "dayjs/locale/pt-br.js";
import dayjs from "dayjs";
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
    const { id } = req.query;
    await db.collection("products").deleteOne({ _id: ObjectId(id) });
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function sendProductsBag(req, res) {
  const SelectedProducts = req.body;
  const { session } = res.locals;
  const findId = await db
    .collection("sessions")
    .findOne({ token: session.token });
  const findUser = await db.collection("users").findOne({ _id: findId.id });
  if (!findId || !findUser) {
    return res.sendStatus(404);
  }

  try {
    await db.collection("bag").insertOne({
      token: session.token,
      userId: findId.id,
      SelectedProducts,
    });
  } catch (error) {
    return res.sendStatus(500);
  }
  res.sendStatus(201);
}

export async function getBag(req, res) {
  const { session } = res.locals;
  const findId = await db
    .collection("sessions")
    .findOne({ token: session.token });
  const findUser = await db.collection("users").findOne({ _id: findId.id });
  if (!findId || !findUser) {
    return res.sendStatus(404);
  }
  const userHistoric = await db
    .collection("historics")
    .find({ userId: ObjectId(session.id) }).toArray();
    console.log(userHistoric);
  res.send(userHistoric).status(200);
}

export async function postAdrress(req, res) {
  const { session } = res.locals;
  const { address, productList } = req.body;
  console.log(address);
  const findId = await db
    .collection("sessions")
    .findOne({ token: session.token });
  const findUser = await db.collection("users").findOne({ _id: findId.id });
  if (!findUser) {
    return res.sendStatus(404);
  }
  try {
    let now = dayjs().locale("pt-br");
    let hoje = now.format("ddd, DD MMMM YY");
    const userHistoric = await db
      .collection("historics")
      .find({ userId: ObjectId(session.id) })
      .toArray();
    await db.collection("historics").updateOne(
      {
        userId: ObjectId(session.id),
      },
      {
        $set: {
          historic: [...userHistoric[0].historic, [hoje, ...productList]],
          address: address,
        },
      }
    ); 
    console.log(userHistoric[0].historic);
    const histo = await db
      .collection("historics")
      .find({ userId: session.userId })
      .toArray();
    return res.send(histo).status(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
