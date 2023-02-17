import pkg from '@babel/core'

import inserAstPlugin from './plugin/inser-ast.js'

const transform = pkg.transform

const sourceCode = `
  console.log(1)
`

const { code } = transform(sourceCode, {
  plugins: [inserAstPlugin]
})

console.log(code)