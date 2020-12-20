import dotenv from 'dotenv'
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import cardRoutes from "./routes/cards.js"

dotenv.config()

const app = express();

app.use(express.json())
app.use(cors());

app.use("/tinder/cards", cardRoutes)

const CONNECTION_URL = process.env.DATABASE;

const PORT = process.env.PORT || 8000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

app.get("/", (req, res) => {
  res.send("hello")
});

