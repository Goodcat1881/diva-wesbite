export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Hair Tips',          value: 'Hair Tips' },
          { title: 'Colour',             value: 'Colour' },
          { title: 'Treatments',         value: 'Treatments' },
          { title: 'Style Guide',        value: 'Style Guide' },
          { title: 'Behind the Scenes',  value: 'Behind the Scenes' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(200),
    },
    {
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'readTime',
      title: 'Read Time (e.g. "4 min read")',
      type: 'string',
    },
    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Show this post in the featured slot at the top of the blog',
      initialValue: false,
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
}
