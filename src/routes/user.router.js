import { createUser, deleteUser, getUserById, getUsers, updateUser, login } from "../controllers/user.controller.js";
import express from 'express';
import { checkToken } from "../helpers/checkToken.js";
var router = express.Router();

router.post('/', checkToken, createUser);
router.get('/', checkToken, getUsers);
router.get('/:id', checkToken, getUserById);
router.patch("/", checkToken, updateUser);
router.delete("/:id", checkToken, deleteUser);
router.post("/login", login);
export const userRouter = router;