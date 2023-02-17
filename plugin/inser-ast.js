
const logPlugin = ({ template }) => {
  return {
    visitor: {
      CallExpression(path) {
        const newNodeAst = template('const a = 1')()
        path.insertAfter(newNodeAst)
      }
    }
  }
}

export default logPlugin