
import jwt from 'jsonwebtoken';

const secret = "AlphaBetaGammaTheeeta";
const fetch = async (req, res, next) => {
    const token = req.header("authtoken");

    if (!token) {
        return res.status(401).json({
            error: "Please use a valid token",
        });
    }

    try {
        const data = jwt.verify(token, secret);
        req.user = data.user;
        console.log("User authenticated:", req.user);
        next();
    } catch (err) {
        console.error("Error verifying token:", err);
        res.status(401).json({
            error: "Invalid token or token expired",
        });
    }
};

export { fetch };
