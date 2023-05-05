import express from "express";
import cors from "cors";
import expressGlobalErrorHandling from "./utils/errorHandling/express-global-err-handling";
import userRouter from "./modules/users";


const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);

app.use(expressGlobalErrorHandling);

app.get("/test", (req, res) => {
  res.send("test is successfull")
})  

// Handle unhandled rejections and log to console and MongoDB
process.on("unhandledRejection", (reason, promise) => {
   console.log("unhandledRejection")
   process.exit(1);
});

// Handle uncaught exceptions and log to console and MongoDB
process.on("uncaughtException", (err, origin) => {
  console.log("uncaughtException")
  process.exit(1);
});

export default app;