import express from "express";
import chalk from "chalk";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";
import "dayjs/locale/pt-br.js";
import dayjs from "dayjs";
import dotenv from "dotenv";
import joi from "joi";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import userRouter from "./routes/userRouter.js";
import productsRouter from "./routes/productsRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.use(userRouter);
app.use(productsRouter);

app.listen(process.env.PORT, () => {
  console.log(chalk.blue.bold(`\nRodando na porta ${process.env.PORT}`));
});
