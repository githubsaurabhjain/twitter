import knex, { Knex } from "knex";
import dotenv from "dotenv";
import config from "../knexfile";

const createDB = async () => {
  let dbConfig = { ...config };
  const connectionConfig = dbConfig.connection as { [key: string]: any };

  delete connectionConfig.database;
  const instance = knex(dbConfig);
  try {
    const database = await instance.raw(
      "Select 1 FROM pg_database WHERE datname = 'twitter'"
    );
    if (!database.rows.length) {
      await instance.raw("CREATE DATABASE twitter");
    } else {
      console.log("DATABASE already exist");
    }
  } catch(err) {
    console.error("Error creating database:",err);
  } finally {
    await instance.destroy();
  }
};
createDB();
