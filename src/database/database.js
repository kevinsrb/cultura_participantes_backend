import sequelize from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config();

// NOMBRE DE BASE DE DATOS CULTURA , NOMBRE DE USUARIO, PASSWORD

// export const sequelizeconfig = new sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)

export const sequelizeconfig = new sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      encrypt: true,
      ssl: {
        require: true,
      },
    },
  }
);
