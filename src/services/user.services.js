// import pool from "@src/config/database";
import pool from "../config/database.js";
export const createUserServices = (data, callBack) => {
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
export const getUserServices = (id, callBack) => {
    pool.query(
        `SELECT id, firstName, lastName, gender, email, password, number FROM registration where id = ?;`,
        [id],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
};
export const updateUserServices = (data, callBack) => {
    pool.query(
        `update registration set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id = ?`,
        [
            data.first_name,
            data.last_name,
            data.gender,
            data.email,
            data.password,
            data.number,
            data.id
        ],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results[0]);
        }
    );
};
export const deleteUserServices = (id, callBack) => {
    pool.query(
        `delete from registration where id = ?`,
        [id],
        (error, results, fields) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results[0]);
        }
    );
};