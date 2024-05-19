import { poolDB, pool } from "./database.mjs";
import { info, success, warn, err } from "./colored.mjs";

async function addProjects() {
  try {
    info('trying to seed projects')
    await pool.query(
      `INSERT INTO project (name, description, path, preview_img_path) VALUES
      ('direct_chat', 'A web app that provides functionality to message interesting people', 'https://github.com/magmafellow/direct-chat', '/direct-chat_preview.jpeg'),
      ('murkup-dtsd', 'A website that shows my skills of laying out html pages', 'https://magmafellow.github.io/murkup-DTSD/', '/murkup-dtsd_preview.jpeg'),
      ('markup-book-store', 'A website that shows my skills of laying out html pages', 'https://magmafellow.github.io/markup-book-store/', '/marukup-book-store_preview.jpeg'),
      ('markup-explore-the-nature', 'A website that shows my skills of laying out html pages', 'https://magmafellow.github.io/markup-explore-the-nature/', '/markup-explore-the-nature_preview.jpeg')
      `
    )
    success('seeded projects data')
  } catch (error) {
    err('failed to seed projects data')
  }
}

async function addTags(){
  try {
    info('trying to seed tags')
    await pool.query(
      `INSERT INTO tag (name, description) VALUES
      ('typescript', 'Typescript info'),
      ('postgresql', 'Database that deals with data'),
      ('nextjs', 'A web full-stack framework that we need'),
      ('advanced html', 'Unusual constructions and technics related to html'),
      ('advanced css', 'Unusual properties and realizations related to css')
      `
    )
    success('seeded tags data')
  } catch (error) {
    console.log(error)
    err('failed to seed tags data')
  }
}

async function addProjectsTags(){
  try {
    info('trying to seed project_tag data')
    await pool.query(
      `INSERT INTO project_tag (project_id, tag_id) VALUES
      (3, 4), (3, 5),
      (1, 1), (1, 2), (1, 3),
      (4, 5)
      `
    )
    success('seeded projects_tags data')
  } catch (error) {
    err('failed to seed projects_tags data')
  }
}

async function main(){
  await addProjects()
  await addTags()
  await addProjectsTags()

  info('program has finished.')

  
  await pool.end()
}

main()
