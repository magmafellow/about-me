import { Pool } from "pg";
import dbSecret from './key.mjs'

const configForDatabase = {
  database: 'postgres',
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  password: dbSecret
}

const configForTable = {
  database: 'about_me',
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  password: dbSecret
}

export const poolDB = new Pool(configForDatabase)
export const pool = new Pool(configForTable)
