import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
const port = process.env.PORT || 5050;

connectDB(); // Connect to MongoDB

const app = express();

//Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);

app.use;

app.listen(port, () => console.log(`Server is running on port ${port}`));
