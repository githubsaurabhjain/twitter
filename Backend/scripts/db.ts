import knex, { Knex } from "knex";
import dotenv from "dotenv";

const createDB = () => {
  dotenv.config();

  const preConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD as string,
    port: +process.env.DB_PORT,
  } as Knex.Config<any>;
  const instance = knex({ client: "pg", connection: preConfig });
  instance
    .raw("CREATE DATABASE twitter")
    .then(() => {
      console.log("Database created successfully");
    })
    .catch((err) => {
      console.log("Error while creating DB", err);
    })
    .finally(() => instance.destroy());
};
createDB();
