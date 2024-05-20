import { poolDB, pool } from "./database.mjs";
import { info, success, warn, err } from "./colored.mjs";

async function createDB(){
  try {
    info('trying to create about_me database')
    await poolDB.query('CREATE DATABASE about_me')
    success('successfuly created about_me database')
  } catch (error) {
    err('failed to create about_me database')
  }
}

async function createProjectTable(){
  try {
    info('trying to create project table')
    await pool.query(
      `CREATE TABLE IF NOT EXISTS project (
        id SERIAL PRIMARY KEY,
        name VARCHAR(30) NOT NULL,
        description TEXT,
        path VARCHAR(200) NOT NULL,
        repo VARCHAR(200) NOT NULL,
        preview_img_path VARCHAR(200)
      )`
    )
    success('successfuly added project table')
  } catch (error) {
    err('failed to create project table')
  }
}

async function createTagTable(){
  try {
    info('trying to create tag table')
    await pool.query(
      `CREATE TABLE IF NOT EXISTS tag (
        id SERIAL PRIMARY KEY,
        name VARCHAR(30) NOT NULL,
        description TEXT
      )`
    )
    success('successfuly created tag table')
  } catch (error) {
    err('failed to create tag table')
  }
}

async function createProjectTagTable(){
  try {
    info('trying to create project_tag table')
    await pool.query(
      `CREATE TABLE IF NOT EXISTS project_tag (
        id SERIAL PRIMARY KEY,
        project_id INTEGER REFERENCES project (id),
        tag_id INTEGER REFERENCES tag (id)
      )`
    )
    success('successfuly created project_tag table')
  } catch (error) {
    err('failed to create project_tag table')
  }
}

async function main(){
  await createDB()
  await createProjectTable()
  await createTagTable()
  await createProjectTagTable()

  await poolDB.end()
  await pool.end()
}

main()
