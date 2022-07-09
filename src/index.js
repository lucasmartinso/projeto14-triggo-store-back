import express from "express";
import chalk from "chalk";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import productsRouter from "./routes/productsRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.use(userRouter,productsRouter);

app.listen(process.env.PORT, () => {
  console.log(chalk.blue.bold(`\nRodando na porta ${process.env.PORT}`));
});
