import { z } from 'zod'

export type project = {
  readonly id: string
  name: string
  description: string
  path: string
}

export type tag = {
  readonly id: string
  name: string
  description?: string
}

export type project_tag = {
  readonly id: string
  project_id: string
  tag_id: string
}

export const createProjectForm = z.object({
  name: z.string(),
})

console.log(z.string().parse('hello'))
