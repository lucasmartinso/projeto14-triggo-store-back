import { db } from "../database/mongo.js";
import dotenv from "dotenv";
dotenv.config();
const productList = [
  {
    name: "pão de sal",
    description: "",
    category: "pães",
    price: "2,00",
    image:
      "https://www.sabornamesa.com.br/media/k2/items/cache/f59fd3a46f2adbbd9dd6269010353971_XL.jpg",
  },
  {
    name: "pão de sal",
    description: "",
    category: "pães",
    price: "2,00",
    image:
      "https://www.sabornamesa.com.br/media/k2/items/cache/f59fd3a46f2adbbd9dd6269010353971_XL.jpg",
  },
  {
    name: "mussarela",
    description: "média",
    category: "pizza",
    price: "20,00",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.receiteria.com.br%2Fwp-content%2Fuploads%2Freceitas-de-pizza-de-mussarela-1.jpg&imgrefurl=https%3A%2F%2Fwww.receiteria.com.br%2Freceitas-de-pizza-de-mussarela%2F&tbnid=V1GedTK5_fgHZM&vet=12ahUKEwjJhIXEu-f4AhWcr5UCHQ9QBlgQMygEegUIARD0AQ..i&docid=tXmpt0QIMQBoxM&w=775&h=477&q=pizza%20mussarela&ved=2ahUKEwjJhIXEu-f4AhWcr5UCHQ9QBlgQMygEegUIARD0AQ",
  },
  {
    name: "calabresa",
    description: "grande",
    category: "pizzas",
    price: "24,00",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn6.campograndenews.com.br%2Fuploads%2Fnoticias%2F2022%2F03%2F04%2F3cb5530b66938475b217183a18974de301f5b0fd.jpg&imgrefurl=https%3A%2F%2Fwww.campograndenews.com.br%2Flado-b%2Fsabor%2Fpizza-de-calabresa-com-mel-e-novidade-na-arthur-jorge&tbnid=xSghE7GL4Pq0SM&vet=12ahUKEwi2rsXku-f4AhWJQ7gEHR4MDv8QMygEegUIARD2AQ..i&docid=Y7vvqKO-7cTDaM&w=2048&h=1365&q=pizza%20calabresa&ved=2ahUKEwi2rsXku-f4AhWJQ7gEHR4MDv8QMygEegUIARD2AQ",
  },
];

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
    return res.send(products);
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
  res.sendStatus(400);
}
