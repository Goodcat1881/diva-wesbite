import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import blogPost from './sanity/schemas/blogPost'

export default defineConfig({
  name: 'dashing-diva',
  title: 'Dashing Diva',
  projectId: 'algylv4o',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [blogPost],
  },
})
