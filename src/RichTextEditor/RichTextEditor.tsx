import { CodeHighlightNode, CodeNode } from '@lexical/code'
import { $generateNodesFromDOM } from '@lexical/html'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import { ListItemNode, ListNode } from '@lexical/list'
import { TRANSFORMERS } from '@lexical/markdown'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import DOMPurify from 'dompurify'
import {
  $createParagraphNode,
  $getRoot,
  LexicalEditor,
  LexicalNode,
  RootNode,
} from 'lexical'
import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Box } from '../Box'
import { theme } from '../theme'
import { MarginProps } from '../utils/space'
import CustomAutoLinkPlugin from './plugins/AutoLinkPlugin'
import { EditorUpdatePlugin } from './plugins/EditorUpdatePlugin'
import ToolbarPlugin from './plugins/ToolbarPlugin'

export interface RichTextEditorProps extends MarginProps {
  value?: string
  maxHeight?: string
  height?: string
  outline?: boolean
  onChange: (e: string) => void
}

const appendNodes = (root: RootNode, nodes: LexicalNode[]) => {
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

export const RichTextEditor: FC<RichTextEditorProps> = ({
  value,
  height,
  outline = false,
  maxHeight = '300px',
  onChange,
  ...props
}) => {
  const [editorState, setEditorState] = useState<null | LexicalEditor>(null)

  editorState &&
    editorState.update(() => {
      const parser = new DOMParser()
      const dom = parser.parseFromString(
        value ? DOMPurify.sanitize(value) : '<p></p>',
        'text/html',
      )
      const root = $getRoot()
      root.clear()
      const nodes = $generateNodesFromDOM(editorState, dom)
      appendNodes(root, nodes)
    })

  const defaultEditorState = (editor: LexicalEditor) => {
    setEditorState(editor)
    const parser = new DOMParser()
    const dom = parser.parseFromString(
      value ? DOMPurify.sanitize(value) : '<p></p>',
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
        </LexicalComposer>
      </Editor>
    </Container>
  )
}

const Editor = styled(Box)<{ $maxHeight: string; $height?: string }>`
  .editor-input {
    margin-top: 12px;
    background-color: ${theme.colors.cream};
    border-radius: 12px;
    border: 2px solid ${theme.colors.oatmeal};
    padding: 16px;
    overflow: scroll;
    outline-color: ${theme.colors.marzipan};
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
  background-color: ${theme.colors.coconut};
  border-radius: 16px;
  padding: 12px;
  ${({ $outline }) => $outline && `border: 2px solid ${theme.colors.oatmeal}`}
`
