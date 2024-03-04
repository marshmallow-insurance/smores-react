import { $generateHtmlFromNodes } from "@lexical/html";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import DOMPurify from "dompurify";
import { FC, useEffect } from "react";

export const EditorUpdatePlugin: FC<{ onChange: (value: string) => void }> = ({ onChange }) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener((listener) => {
      if(listener.editorState !== listener.prevEditorState) {
        editor.update(() => {
          onChange(DOMPurify.sanitize($generateHtmlFromNodes(editor, null)))
        })
      }
    });
  }, []);

  return null;
}