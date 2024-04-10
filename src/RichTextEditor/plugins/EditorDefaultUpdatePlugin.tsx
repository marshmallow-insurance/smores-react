import { $generateNodesFromDOM } from '@lexical/html'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { appendNodes } from 'RichTextEditor/utils'
import DOMPurify from 'dompurify'
import { $getRoot } from 'lexical'
import { FC, useRef, useState } from 'react'

export const EditorDefaultUpdatePlugin: FC<{
  defaultValue?: string
}> = ({ defaultValue }) => {
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
      appendNodes(root, nodes)
    })
  }

  return null
}
