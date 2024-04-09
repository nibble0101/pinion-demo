import { PinionContext, toFile, renderTemplate } from '@featherscloud/pinion'

// A Context interface. (This one is empty)
interface Context extends PinionContext {}

// The file content as a template string
const readme = () =>
  `# Hello world

This is a readme generated by Pinion

Copyright (c) ${new Date().getFullYear()}
`

// A `generate` export that wraps the context and renders the template
export const generate = (init: Context) =>
  Promise.resolve(init).then(renderTemplate(readme, toFile('readme.md')))