import pool from "@src/config/database.js";
// import pool from "../config/database";

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