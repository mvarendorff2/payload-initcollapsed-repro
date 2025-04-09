import { type Block } from 'payload'

export const ExampleBlock: Block = {
  slug: 'example-block',
  fields: [
    {
      type: 'text',
      name: 'foo',
    },
  ],
}
