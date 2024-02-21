import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import User from "../MongoModels/userSchema.js";

const secret = "AlphaBetaGammaTheeeta";

const createUser = async (req, res) => {
    let success = false;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            success,
            errors: errors.array(),
        });
    }

    try {
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.status(400).json({
                success,
                error: "User already exists with this email",
            });
        }

        const saltHash = await bcrypt.genSalt();
        const HashedPass = await bcrypt.hash(req.body.password, saltHash);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: HashedPass,
        });

        const data = {
            user: {
                id: user.id,
            },
        };

        const authToken = jwt.sign(data, secret, { expiresIn: '1h' });

        success = true;

        res.json({
            success,
            "authtoken": authToken,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            success: false,
            error: "Internal Server Error",
            details: err.message,
        });
    }
};

const Login = async (req, res) => {
    let success = false;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            success,
            errors: errors.array(),
        });
    }

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).json({
                error: "Login with correct credentials",
            });
        }

        const compare = await bcrypt.compare(password, user.password);

        if (!compare) {
            return res.status(400).json({
                success,
                error: "Please login with correct credentials",
            });
        }

        const data = {
            user: {
                id: user.id,
            },
        };

        const authToken = jwt.sign(data, secret);

        success = true;

        res.send({
            success,
            authToken,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: "Internal Server Error",
            details: err.message,
        });
    }
};

const deleteuser = async (req, res) => {
    let flag = false;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            flag,
            errors: errors.array(),
        });
    }

    try {
        let user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).send("Not Found");
        }

        if (!user || !user._id || user._id.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }


        user = await User.findByIdAndDelete(req.params.id);

        res.json({
            Success: "User has been deleted",
            user: user,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Some error occurred");
    }
};

export { createUser, Login, deleteuser };
