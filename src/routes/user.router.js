import { createUser, getUsers } from "../controllers/user.controller.js";
import express from 'express';
var router = express.Router();

router.post('/', createUser)
router.get('/', getUsers)
export const userRouter = router;