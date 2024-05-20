import { poolDB, pool } from "./database.mjs";
import { info, success, warn, err } from "./colored.mjs";

async function dropDB(){
  try {
    info('trying to drop db')
    await poolDB.query('DROP DATABASE about_me')
    success('dropped db')
  } catch (error) {
    err('failed to drop db')
  }
}

async function main(){
  await dropDB()
  info('program has done')

  await poolDB.end()
}

main()

export const one = 1
