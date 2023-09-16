import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import { userRouter } from "./src/routes/user.router.js"; // Import userRouter từ user.router.js
const app = express();
app.use(express.json());
// Sử dụng userRouter tại địa chỉ /api/users
app.use('/api/users', userRouter);
app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
