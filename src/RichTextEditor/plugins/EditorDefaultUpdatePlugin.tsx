import { $generateNodesFromDOM } from '@lexical/html'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import DOMPurify from 'dompurify'
import { $getRoot } from 'lexical'
import { FC, useEffect } from 'react'
import { appendNodes } from '../utils'

export const EditorDefaultUpdatePlugin: FC<{
  defaultValue?: string
}> = ({ defaultValue }) => {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    editor.update(() => {
      const parser = new DOMParser()
      const dom = parser.parseFromString(
        defaultValue ? DOMPurify.sanitize(defaultValue) : '<p></p>',
        'text/html',
      )
      const root = $getRoot()
      root.clear()
      const nodes = $generateNodesFromDOM(editor, dom)
      appendNodes(root, nodes)
    })
  }, [defaultValue])

  return null
}
