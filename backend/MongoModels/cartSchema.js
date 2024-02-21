import mongoose from "mongoose"

const CartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    priceEach: {
        type: Number,
        required: true
    },
    priceTotal: {
        type: Number,
        required: true
    }


}, {
    timestamps: true
}

)

const Cart = mongoose.model("Cart", CartSchema)
export default Cart