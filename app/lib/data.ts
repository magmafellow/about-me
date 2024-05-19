import { pool } from '@/database.mjs'
import { unstable_noStore } from 'next/cache'
import { Project, Tag } from './defenitions'

export async function getAllProjects(): Promise<undefined | Project[]> {
  unstable_noStore()

  try {
    const r = await pool.query(`SELECT * FROM project`)
    return r.rows
  } catch (error) {
    console.log('failed to get all projects')
  }
}

export async function getProjectById(projectId: number): Promise<undefined | Project> {
  unstable_noStore()

  try {
    const r = await pool.query(`SELECT * FROM project WHERE id = $1`, [projectId])
    return r.rows[0]
  } catch (error) {
    console.log('failed to get project by id')
  }
}

export async function getAllTagsByProjectId(projectId: number): Promise<undefined | Tag[]>{
  try {
    const r = await pool.query(`
    SELECT project_tag.id, tag.name FROM project_tag
    JOIN tag ON project_tag.tag_id = tag.id
    WHERE project_tag.project_id = $1;
    `, [projectId])
    return r.rows
  } catch (error) {
    console.log('failed to get all tags by project id')
  }
}
