//all work in userControls or MVC

import express from "express";
import { body } from "express-validator"
import { Login, createUser, deleteuser } from "../controllers/userControllers.js";
import { fetch } from "../middlewares/fetchUser.js";
const router = express.Router()

// const login
// const register
// const validate

router.route("/signup", [
    body("name", "Enter a valid name").isLength({
        min: 3
    }),
    body("email", "enter a valid email").isEmail(),
    body("password", "Enter a valid Password").exists()
]).post(createUser)


router.route("/login",
    [

        body("email", "enter a valid email").isEmail(),
        body("password", "Enter a valid Password").exists()
    ]
).post(Login)
router.route("/delete/:id").delete(fetch, deleteuser)
export default router