import { db } from "../database/mongo.js";
import dotenv from "dotenv";
dotenv.config();

export async function getProducts(req, res) {
  try {
    return res.send();
  } catch (err) {
    return res.sendStatus(500);
  }
}

export async function getBag(req,res) { 
  const { session } = res.locals;
  const findId = await db.collection("sessions").findOne({token: session.token});
  const findUser = await db.collection("users").findOne({_id: findId.id});
  console.log(findUser); 
  res.sendStatus(400);
}
