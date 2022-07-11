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
  console.log(SelectedProducts);
  const { session } = res.locals;
  const findId = await db
    .collection("sessions")
    .findOne({ token: session.token });
  const findUser = await db.collection("users").findOne({ _id: findId.id });
  console.log(findUser);
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
  console.log(findUser);
  if (!findId || !findUser) {
    return res.sendStatus(404);
  }
  const userHistoric = await db
    .collection("historics")
    .findOne({ userId: session.userId });
  res.send(userHistoric).status(200);
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
  const { info } = req.body;
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
      .find({ userId: session.userId })
      .toArray();
    await db.collection("historics").updateOne(
      {
        userId: session.userId,
      },
      {
        $set: {
          historic: [...userHistoric.historic, [hoje, ...info.productList]],
          address: info.address,
        },
      }
    );
    const histo = await db
      .collection("historics")
      .find({ userId: session.userId })
      .toArray();
    return res.send(histo).status(200);
  } catch (error) {
    return res.sendStatus(500);
  }
}
