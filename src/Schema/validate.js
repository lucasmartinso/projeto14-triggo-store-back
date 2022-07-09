import Joi from "joi";
import { db } from "../database/mongo.js";

export async function signUpSchema(user) {
  const { email, password } = user;
  const findOne = await db.collection("users").findOne({ email });
  const userEmail = findOne ? findOne.email : "";
  return Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
    samePassword: Joi.string().valid(password).required(),
    email: Joi.string().email().invalid(userEmail).required(),
  }).validateAsync(user);
}
