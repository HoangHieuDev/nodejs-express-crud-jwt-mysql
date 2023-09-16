import { hashSync, genSaltSync } from "bcrypt";
import { create } from "../services/user.services";

export const createUser = (res, req) => {
    const body = res.body;
    const salt = genSaltSync();
    body.password = hashSync(body.password, salt);
    create(body, (err, results)) = () => {
        if (err) {
            console.log(err);
            return res.status(500).send({
                status: 500,
                message: "Can not connect to database"
            });
        }
        return res.status(201).send({
            status: 201,
            message: "User created successfully",
            data: results
        });
    }
}