import { DataSource } from 'typeorm';
import dotEnvExtended from 'dotenv-extended';
dotEnvExtended.load();
console.log(process.env.CONNECTION_STRING);
export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.CONNECTION_STRING,
  ssl: true,
});
