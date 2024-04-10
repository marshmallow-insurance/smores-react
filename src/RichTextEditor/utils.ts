import { $createParagraphNode, LexicalNode, RootNode } from 'lexical'

export const appendNodes = (root: RootNode, nodes: LexicalNode[]) => {
  nodes
    .filter((node) => node.__type !== 'linebreak')
    .map((node) => {
      if (node.__type === 'text') {
        const paragraphNode = $createParagraphNode()
        paragraphNode.append(node)
        return paragraphNode
      }
      return node
    })
    .forEach((node) => root.append(node))
}
