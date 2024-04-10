import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import DOMPurify from 'dompurify'
import { $createParagraphNode, $getRoot } from 'lexical'
import { FC, useEffect, useRef, useState } from 'react'

export const EditorUpdatePlugin: FC<{
  onChange: (value: string) => void
  defaultValue?: string
}> = ({ onChange, defaultValue }) => {
  const [editor] = useLexicalComposerContext()
  const [previousDefaultValue, setPreviousDefaultValue] = useState(defaultValue)
  const previousDefaultValueRef = useRef(defaultValue)

  previousDefaultValueRef.current = previousDefaultValue

  if (defaultValue && defaultValue !== previousDefaultValue) {
    console.log(defaultValue, previousDefaultValue)
    setPreviousDefaultValue(defaultValue)
    editor.update(() => {
      const parser = new DOMParser()
      const dom = parser.parseFromString(
        defaultValue ? DOMPurify.sanitize(defaultValue) : '<p></p>',
        'text/html',
      )
      const root = $getRoot()
      root.clear()
      const nodes = $generateNodesFromDOM(editor, dom)
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
    })
  }

  useEffect(() => {
    return editor.registerUpdateListener((listener) => {
      if (listener.editorState !== listener.prevEditorState) {
        editor.update(() => {
          onChange(DOMPurify.sanitize($generateHtmlFromNodes(editor, null)))
        })
      }
    })
  }, [])

  return null
}
