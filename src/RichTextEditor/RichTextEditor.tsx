import { CodeHighlightNode, CodeNode } from '@lexical/code'
import { $generateNodesFromDOM } from '@lexical/html'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import { ListItemNode, ListNode } from '@lexical/list'
import { TRANSFORMERS } from '@lexical/markdown'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import DOMPurify from 'dompurify'
import { $getRoot, LexicalEditor } from 'lexical'
import React, { FC } from 'react'
import styled from 'styled-components'
import { Box } from '../Box'
import { MarginProps } from '../utils/space'
import CustomAutoLinkPlugin from './plugins/AutoLinkPlugin'
import { EditorDefaultUpdatePlugin } from './plugins/EditorDefaultUpdatePlugin'
import { EditorUpdatePlugin } from './plugins/EditorUpdatePlugin'
import ToolbarPlugin from './plugins/ToolbarPlugin'
import { appendNodes } from './utils'

export interface RichTextEditorProps extends MarginProps {
  defaultValue?: string
  maxHeight?: string
  height?: string
  outline?: boolean
  onChange: (e: string) => void
}

export const RichTextEditor: FC<RichTextEditorProps> = ({
  defaultValue,
  height,
  outline = false,
  maxHeight = '300px',
  onChange,
  ...props
}) => {
  const defaultEditorState = (editor: LexicalEditor) => {
    const parser = new DOMParser()
    const dom = parser.parseFromString(
      defaultValue ? DOMPurify.sanitize(defaultValue) : '<p></p>',
      'text/html',
    )
    const nodes = $generateNodesFromDOM(editor, dom)
    const root = $getRoot()
    root.clear()

    appendNodes(root, nodes)
  }

  const initialConfig = {
    editorState: defaultEditorState,
    namespace: 'MarshmallowRichTextEditor',
    onError: (e: Error) => console.log(e),
    nodes: [
      AutoLinkNode,
      LinkNode,
      ListNode,
      ListItemNode,
      HeadingNode,
      QuoteNode,
      CodeHighlightNode,
      CodeNode,
    ],
  }

  return (
    <Container $outline={outline} {...props}>
      <Editor $maxHeight={maxHeight} $height={height}>
        <LexicalComposer initialConfig={initialConfig}>
          <ToolbarPlugin />
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<div></div>}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <LinkPlugin />
          <ListPlugin />
          <HistoryPlugin />
          <CustomAutoLinkPlugin />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          <EditorUpdatePlugin onChange={onChange} />
          <EditorDefaultUpdatePlugin defaultValue={defaultValue} />
        </LexicalComposer>
      </Editor>
    </Container>
  )
}

const Editor = styled(Box)<{ $maxHeight: string; $height?: string }>`
  .editor-input {
    margin-top: 12px;
    background-color: ${({ theme }) => theme.color.background['000']};
    border-radius: 12px;
    border: 2px solid ${({ theme }) => theme.color.surface.base[400]};
    padding: 16px;
    overflow: scroll;
    outline-color: ${({ theme }) => theme.color.border.base};
    max-height: ${({ $maxHeight }) => $maxHeight};
    ${({ $height }) => $height && `height: ${$height}`};
    min-height: 84px;

    * {
      all: revert;
      outline: none;
    }
  }
`

const Container = styled(Box)<{ $outline: boolean }>`
  background-color: ${({ theme }) => theme.color.background[100]};
  border-radius: 16px;
  padding: 12px;
  ${({ $outline, theme }) =>
    $outline && `border: 2px solid ${theme.color.surface.base[400]}`}
`
