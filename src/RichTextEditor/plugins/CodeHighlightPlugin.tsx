import { registerCodeHighlighting } from '@lexical/code-shiki'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { FC, useEffect } from 'react'

export const CodeHighlightPlugin: FC = () => {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    return registerCodeHighlighting(editor)
  }, [editor])

  return null
}
