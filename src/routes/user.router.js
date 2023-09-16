import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/user.controller.js";
import express from 'express';
var router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.patch("/", updateUser);
router.delete("/:id", deleteUser);
export const userRouter = router;