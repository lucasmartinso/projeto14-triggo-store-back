import { db } from "../database/mongo.js";
import dotenv from "dotenv";
dotenv.config();

export async function getProducts(req, res) {
  try {
    return res.send("Oi");
  } catch (err) {
    return res.sendStatus(500);
  }
}
