import jwt from 'jsonwebtoken';
const { verify } = jwt;
import dotenv from 'dotenv';
dotenv.config();
export const checkToken = (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
        // Remove 'Bearer ' from token
        token = token.slice(7);
        verify(token, process.env.JWT_KEY, (err, decoded) => {
            if (err) {
                return res.json({
                    success: 0,
                    message: "Invalid Token..."
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.json({
            success: 0,
            message: "Access Denied! Unauthorized User"
        });
    }
}