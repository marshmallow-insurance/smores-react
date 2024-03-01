import React, { FC } from 'react'
import { MarginProps } from '../utils/space'
import styled from 'styled-components'
import { Box } from '../Box'
import { theme } from '../theme'
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import CustomAutoLinkPlugin from './plugins/AutoLinkPlugin'
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListNode, ListItemNode } from "@lexical/list";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import ToolbarPlugin from './plugins/ToolbarPlugin'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { $generateNodesFromDOM } from '@lexical/html';
import { $createParagraphNode, $getRoot, LexicalEditor } from 'lexical'
import DOMPurify from 'dompurify'

export interface RichTextEditorProps extends MarginProps {
  defaultValue?: string
}

export const RichTextEditor: FC<RichTextEditorProps> = ({ defaultValue, ...props }) => {

  const defaultEditorState = (editor: LexicalEditor) => {
    const sanitisedValue = defaultValue ? DOMPurify.sanitize(defaultValue) : ''
    const parser = new DOMParser();
    const dom = parser.parseFromString(sanitisedValue, 'text/html');
    console.log(dom)
    const nodes = $generateNodesFromDOM(editor, dom);
    const root = $getRoot();
    root.clear();

    nodes
      .filter(node => node.__type !== "linebreak")
      .map(node => {
        if (node.__type === "text") {
          const paragraphNode = $createParagraphNode()
          paragraphNode.append(node)
          return paragraphNode
        }
        return node
      })
      .forEach(node => root.append(node))
  }

  const initialConfig = {
    editorState: defaultEditorState,
    namespace: 'MyEditor',
    onError: (e: Error) => console.log(e),
    nodes: [
      AutoLinkNode,
      LinkNode,
      ListNode,
      ListItemNode,
      HeadingNode,
      QuoteNode,
      CodeHighlightNode,
      CodeNode
    ]
  }

  return (
    <Container>
      <Editor>
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
        </LexicalComposer>
      </Editor>
    </Container>
  )
}

const Editor = styled(Box)`
  .editor-input {
    margin-top: 16px;
    background-color: ${theme.colors.cream};
    border-radius: 12px;
    border: 2px solid ${theme.colors.oatmeal};
    padding: 16px;
    * {
      all: revert;
      outline: none;
    }
  }
`

const Container = styled(Box)`
  background-color: ${theme.colors.coconut};
  border-radius: 16px;
  padding: 12px;
`