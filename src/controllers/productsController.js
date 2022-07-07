import { db } from "../database/mongo.js";
import dotenv from "dotenv";
dotenv.config();

const productList = process.env.PRODUCT_LIST;

export async function getProducts(req, res) {
  try {
    return res.send(productList);
  } catch (err) {
    return res.sendStatus(500);
  }
}
