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
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {ListPlugin} from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { CodeHighlightNode, CodeNode } from "@lexical/code";

export interface RichTextEditorProps extends MarginProps {
  htmlString: string
}

export const RichTextEditor: FC<RichTextEditorProps> = ({ htmlString, ...props }) => {

  const initialConfig = {
    namespace: 'MyEditor',
    onError: () => { },
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