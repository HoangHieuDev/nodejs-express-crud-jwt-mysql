import { hashSync, genSaltSync } from "bcrypt";
import { createUserServices, getUsersServices, getUserServices, deleteUserServices, updateUserServices } from "../services/user.services.js";

export const createUser = (req, res) => { // Đổi vị trí tham số req và res
    const body = req.body;
    const salt = genSaltSync();
    body.password = hashSync(body.password, salt);

    createUserServices(body, (err, results) => { // Sửa cú pháp ở đây
        if (err) {
            console.log(err);
            return res.status(500).send({
                status: 500,
                message: "Can not connect to database",
            });
        }
        return res.status(201).send({
            status: 201,
            message: "User created successfully",
            data: results
        });
    });
}
export const getUsers = (req, res, next) => {
    getUsersServices((err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).send({
                status: 500,
                message: "Can not connect to database",
            });
        }
        return res.status(200).send({
            status: 200,
            message: "User found successfully",
            data: results
        });
    });
}
export const getUserById = (req, res, next) => {
    const id = req.params.id;
    getUserServices(id, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).send({
                status: 500,
                message: "Can not connect to database",
            });
        }
        return res.status(200).send({
            status: 200,
            message: "User found successfully",
            data: results
        });
    });
}
export const updateUser = (req, res, next) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUserServices(body, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.json({
            success: 1,
            message: "Updated user successfully"
        });
    });
}
export const deleteUser = (req, res, next) => {
    const id = req.params.id;
    deleteUserServices(id, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        return res.json({
            success: 1,
            message: "User deleted successfully"
        });
    });
}