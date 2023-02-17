import parser from '@babel/parser'
import traverse from '@babel/traverse'
import generator from '@babel/generator'
import template from '@babel/template'
// import * as types from '@babel/types'

const sourceCode = `
  console.log(123)
  console.log(456)
`

const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous'
})


traverse.default(ast, {
  CallExpression(path) {
    const newNode = template.default('const a = 1')()
    path.insertAfter(newNode)
    path.node.arguments[0].value = path.node.arguments[0].value + '--'
  }
})

const { code } = generator.default(ast)

console.log(code)