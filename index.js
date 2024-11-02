import express from "express";
import { PrismaClient } from "@prisma/client";
import { CONNECT_TO_POSTGRESQL } from "./db/connection.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;
CONNECT_TO_POSTGRESQL();

// route imports are here
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";

// route declarations are here
app.use("/api/v1/users", userRoute);
app.use("/api/v1/posts", postRoute);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`server is running on port ${PORT}`);
});
