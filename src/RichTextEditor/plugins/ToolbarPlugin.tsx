import React from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  FORMAT_TEXT_COMMAND,
  $getSelection,
  $isRangeSelection,
  RangeSelection,
} from "lexical";
import { $isLinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import {
  $isAtNodeEnd
} from "@lexical/selection";
import { $getNearestNodeOfType, mergeRegister } from "@lexical/utils";
import {
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
  $isListNode,
  ListNode
} from "@lexical/list";
import {
  $isHeadingNode
} from "@lexical/rich-text";
import styled from "styled-components";
import { Box } from "../../Box";
import { theme } from "../../theme";
import { Icon } from "../../Icon";

const LowPriority = 1;

function getSelectedNode(selection: RangeSelection) {
  const anchor = selection.anchor;
  const focus = selection.focus;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  const isBackward = selection.isBackward();
  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
  }
}

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef(null);
  const [blockType, setBlockType] = useState("paragraph");
  const [isLink, setIsLink] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [linkURL, setLinkURL] = useState("")
  const [prevLinkURL, setPrevLinkURL] = useState("")

  const formatBulletList = () => {
    if (blockType !== "ul") {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
    }

  };

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      const element =
        anchorNode.getKey() === "root"
          ? anchorNode
          : anchorNode.getTopLevelElementOrThrow();
      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);
      if (elementDOM !== null) {
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType(anchorNode, ListNode);
          const type = parentList ? parentList.getTag() : element.getTag();
          setBlockType(type);
        } else {
          const type = $isHeadingNode(element)
            ? element.getTag()
            : element.getType();
          setBlockType(type);
        }
      }
      // Update text format
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));

      // Update links
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent)) {
        setIsLink(true);
        setLinkURL(parent.getURL())
      } else if ($isLinkNode(node)) {
        setIsLink(true);
        setLinkURL(node.getURL())
      } else {
        setIsLink(false);
        setLinkURL("")
      }
    }
  }, [editor]);

  const urlInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (prevLinkURL !== "" && isLink && urlInputRef.current) {
      urlInputRef.current.focus()
    }
    setPrevLinkURL(linkURL)
  }, [linkURL])

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, newEditor) => {
          updateToolbar();
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          return false;
        },
        LowPriority
      )
    );
  }, [editor, updateToolbar]);

  return (
    <Toolbar className="toolbar" ref={toolbarRef}>

      <Bold
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        }}
        active={isBold}
      >
        B
      </Bold>
      <Italic
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        }}
        active={isItalic}
      >
        i
      </Italic>
      <EditorButton active={blockType === "ul"} onClick={() => formatBulletList()}>
        <Icon render="bullets" />
      </EditorButton>

      <Link active={isLink} onClick={() => !isLink ? editor.dispatchCommand(TOGGLE_LINK_COMMAND, "https://") : editor.dispatchCommand(TOGGLE_LINK_COMMAND, null)}>
        <Box ml={{ custom: "-4px" }}>
          <Icon render="link" />
        </Box>
        <LinkInput ref={urlInputRef} placeholder='Enter url' value={linkURL} onChange={e => {
          editor.dispatchCommand(TOGGLE_LINK_COMMAND, e.target.value)
        }} onClick={e => e.stopPropagation()} />
        <Box onClick={e => {
          e.stopPropagation()
          window.open(linkURL, '_blank')
        }}>
          <LinkOpen render="new-window" />
        </Box>
      </Link>
    </Toolbar>
  );
}


const EditorButton = styled(Box) <{ active: boolean }>`
  height: 40px;
  width: 40px;
  line-height: 50px;
  padding: 12px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  background-color: ${theme.colors.custard};

  ${({ active }) => active && `
    background-color: ${theme.colors.fairyFloss};
  `}

  :hover {
    filter: brightness(0.95);

    ${({ active }) => active && `
      background-color: ${theme.colors.fairyFloss};
    `}
  }
`

const Bold = styled(EditorButton)`
  font-weight: 500;
`

const Italic = styled(EditorButton)`
  font-style: italic;
  font-weight: 500;
  text-indent: -4px;
`

const Toolbar = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

const Link = styled(EditorButton)`
  transition: width .3s;
  ${({ active }) => active && `width: 360px;`}
  justify-content: left;
  overflow: hidden;
  gap: 12px;
  padding-right: 5px;

  ${({ active }) => active && `
    background-color: ${theme.colors.fairyFloss};

    :hover {
      filter: none;
    }
  `}
`

const LinkOpen = styled(Icon)`
  background-color: ${theme.colors.marshmallowPink};
  height: 32px;
  width: 32px;
  border-radius: 20px;
  padding: 6px;

  :hover {
    background-color: ${theme.colors.lollipop};
  }
`

const LinkInput = styled.input`
  width: inherit;
  height: 32px;
  border: none;
  border-radius: 20px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 16px;
  min-width: 0;

  :hover {
    outline: 2px solid ${theme.colors.bubblegum};
  }

  :focus {
    outline: 2px solid ${theme.colors.marshmallowPink};
  }
`