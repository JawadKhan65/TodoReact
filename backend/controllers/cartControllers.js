import { validationResult } from "express-validator";
import Cart from "../MongoModels/cartSchema.js";


const AddToCart = async (req, res) => {
    try {
        const { name, quantity, priceEach, priceTotal } = req.body;
        const errors = validationResult(req);

        // Ensure req.user is defined before accessing its properties
        if (!req.user || !req.user.id) {
            return res.status(401).json({ success: false, error: "Not Authorized" });
        }

        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        const items = await Cart.create({

            name,
            quantity,
            priceEach,
            priceTotal,
            user: req.user.id,
        });


        // Log user ID for debugging
        console.log("User in AddToCart:", req.user.id);

        res.send({ items });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
};

const DeleteFromCart = async (req, res) => {

    try {
        // step 1 : id --> thats actually main player
        let cart = await Cart.findById(req.params.id);
        // step 2 check if there is any id in request
        if (!req.user || !req.user.id) {
            return res.status(401).json({ success: false, error: "Not Authorized" });
        }
        // step 3 if its not present
        if (!cart) {
            return res.status(404).json({ success: false, error: "Item not found in the cart" });
        }

        // Check if the item still exists before attempting to delete
        cart = await Cart.findByIdAndDelete(req.params.id);



        res.json({
            success: true,
            cart: cart,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
};

const getCartItems = async (req, res) => {
    try {
        const cart = await Cart.find({ user: req.user.id });
        res.json(cart);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
};

export { AddToCart, DeleteFromCart, getCartItems };