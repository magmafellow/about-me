import pkg from "pg";
import dbSecret from './key.mjs'

const { Pool } = pkg

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
