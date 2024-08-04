
import dotenv from "dotenv";
import { Knex } from 'knex';

dotenv.config();

const config: Knex.Config = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: +process.env.DB_PORT
  },
  migrations: {
    directory: './migrations'
  },
  pool: {min: 0 , max: 7  }
};

export default config;



