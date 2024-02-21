import express from "express";
import connectDB from "./connectDb.js";
import cors from 'cors';
import router from './router/userRoutes.js';
import router2 from "./router/cartRoutes.js";


const app = express();
const port = process.env.PORT || 3030;

app.use(express.json()); // for json formats
app.use(cors());


app.use("/api/auth", router);
app.use("/api/cart", router2);


connectDB();
app.listen(port, () => {
    console.log(`server at log http://localhost:${port}`);
});
