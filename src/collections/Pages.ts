import type { CollectionConfig } from 'payload'
import { ExampleBlock } from '../blocks/ExampleBlock'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { type: 'text', name: 'title' },
    { type: 'blocks', name: 'blocks', admin: { initCollapsed: true }, blocks: [ExampleBlock] },
  ],
}
