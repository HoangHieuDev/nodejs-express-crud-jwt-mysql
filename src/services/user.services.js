// import pool from "@src/config/database";
import pool from "../config/database.js";

export const create = (data, callBack) => {
    pool.query(
        `insert into registration(firstName, lastName, gender, email, password, number)
                  values(?,?,?,?,?,?)`,
        [
            data.first_name,
            data.last_name,
            data.gender,
            data.email,
            data.password,
            data.number
        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};
export const getUsersServices = callBack => {
    pool.query(
        `SELECT id, firstName, lastName, gender, email, password, number FROM registration;`,
        [],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        }
    );
};