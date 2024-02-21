import express from "express";
import { body } from "express-validator"
import { AddToCart, DeleteFromCart, getCartItems } from "../controllers/cartControllers.js";
import { fetch } from "../middlewares/fetchUser.js";
const router2 = express.Router()

router2.route("/addtoCart", fetch, [
    body("name", "Enter a valid Name"),
    body("quantity", "Add quantity"),
    body("priceEach", " Add price "),
    body("priceTotal", "Add total Price")
]).post(AddToCart)
router2.route("/deletefromcart/:id", fetch).delete(DeleteFromCart)
router2.route("/getCart", fetch).get(getCartItems)
export default router2