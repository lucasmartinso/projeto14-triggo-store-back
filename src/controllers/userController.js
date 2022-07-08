import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { signUpSchema } from "../Schema/validate.js";
import { db } from "../database/mongo.js";

export async function signUp(req, res) {
  try {
    const { name, email, password } = req.body;
    await signUpSchema(req.body);
    const passwordHash = bcrypt.hashSync(password, 10);
    const { insertedId: userId } = await db
      .collection("users")
      .insertOne({ name, email, password: passwordHash });
    await db.collection("records").insertOne({
      userId: userId,
      records: [],
    });
    return res.sendStatus(201);
  } catch (err) {
    const errList = err.details;
    if (errList) {
      if (errList[0].type === "any.invalid") {
        return res.sendStatus(409);
      }
    }

    return res.sendStatus(422);
  }
}

export async function signIn(req, res) {
  const {email, password} = req.body; 
  const token = uuidv4(); 
  
  try { 
    const verifyUser = await db.collection("users").findOne({email});  
    const passwordCompare = bcrypt.compareSync(password, verifyUser.password);  
    if(!verifyUser || !passwordCompare) { 
      res.sendStatus(404);
      return;
    } 
    await db.collection("sessions").insertOne({
      id: verifyUser._id, 
      token
    }); 
  } catch (error) {
    console.log(error.details);
    res.sendStatus(500); 
    return;
  }

  return res.send({token}).status(200);
}

export async function logOut(req, res) {
  try {
    const { authorization } = req.headers;
    const tokenAuth = authorization?.replace("Bearer ", "");
    await db.collection("sessions").deleteOne({
      token: tokenAuth,
    });
    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(422);
  }
}
