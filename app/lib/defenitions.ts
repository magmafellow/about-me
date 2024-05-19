import { z } from 'zod'

export type Project = {
  readonly id: number
  name: string
  description: string
  path: string
  preview_img_path: string
}

export type Tag = {
  readonly id: number
  name: string
  description?: string
}

export type Project_Tag = {
  readonly id: number
  project_id: string
  tag_id: string
}

export const createProjectForm = z.object({
  name: z.string(),
})

console.log(z.string().parse('hello'))
