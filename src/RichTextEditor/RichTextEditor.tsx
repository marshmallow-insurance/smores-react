import React, { FC, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { MarginProps } from '../utils/space'
import styled from 'styled-components'
import { Box } from '../Box'
import { theme } from '../theme'
import { Icon } from '../Icon'
import { RichText } from '../RichText'

export interface RichTextEditorProps extends MarginProps {
  htmlString: string
}

export const RichTextEditor: FC<RichTextEditorProps> = ({ htmlString, ...props }) => {
  const [text, setText] = useState("<p>paragraph 1</p><p>paragraph 1</p><p>paragraph 3</p>")
  const [selectionOffset, setSelectionOffset] = useState<{ lineOffset: number, charOffset: number }>({ lineOffset: 0, charOffset: 0 })

  const elemRef = useRef<HTMLDivElement>(null)

  const [boldActive, setBoldActive] = useState(false)
  const [italicActive, setItalicActive] = useState(false)
  const [bulletsActive, setBulletsActive] = useState(false)
  const [linkActive, setLinkActive] = useState(false)
  const [linkInput, setLinkInput] = useState("")

  const allowedKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
  const disallowedKeys = ['Shift']

  const handleChange = (e: KeyboardEvent<HTMLDivElement>) => {
    console.log(e.key, e.altKey, e.ctrlKey, e.metaKey, e.shiftKey)
    if (!allowedKeys.includes(e.key)) {
      e.preventDefault()
      if (!e.altKey && !e.ctrlKey && !e.metaKey && !disallowedKeys.includes(e.key)) {
        const root = e.nativeEvent.target as HTMLDivElement
        const rootClone = root.cloneNode(true)
        let cloneNodes = Array.from(rootClone.childNodes) as Element[]
        const domNodes = Array.from(root.children)
        const selection = window.getSelection()
        const caretElement = selection?.focusNode

        if (selection && caretElement) {
          const charOffset = selection.focusOffset
          const lineOffset = domNodes.indexOf(caretElement.nodeName === 'P' ? caretElement : caretElement.parentElement)

          if (e.key === 'Enter') {
            console.log(cloneNodes.map(c => c))
            console.log(lineOffset)
            const newLineText = cloneNodes[lineOffset].innerHTML.length > 0 ? cloneNodes[lineOffset].innerHTML.substring(charOffset) : ''
            cloneNodes[lineOffset].innerHTML = cloneNodes[lineOffset].innerHTML.substring(0, charOffset)
            const newLineElement = document.createElement('p')
            newLineElement.appendChild(document.createTextNode(newLineText))
            cloneNodes = [...cloneNodes.slice(0, lineOffset + 1), newLineElement, ...cloneNodes.slice(lineOffset + 1)]
            setSelectionOffset({ lineOffset: lineOffset + 1, charOffset: 0 })
          } else if (e.key === 'Backspace') {
            if (charOffset > 0) {
              cloneNodes[lineOffset].innerHTML = cloneNodes[lineOffset].innerHTML.substring(0, charOffset - 1) + cloneNodes[lineOffset].innerHTML.substring(charOffset)
              setSelectionOffset({ lineOffset: lineOffset, charOffset: charOffset - 1 })
            } else {
              if (lineOffset !== 0) {
                const prevOffset = cloneNodes[lineOffset - 1].innerHTML.length
                cloneNodes[lineOffset - 1].innerHTML = cloneNodes[lineOffset - 1].innerHTML + cloneNodes[lineOffset].innerHTML
                cloneNodes.splice(lineOffset, 1)
                setSelectionOffset({ lineOffset: lineOffset - 1, charOffset: prevOffset })
              }
            }
          } else {
            cloneNodes[lineOffset].innerHTML = cloneNodes[lineOffset].innerHTML.substring(0, charOffset) + e.key + cloneNodes[lineOffset].innerHTML.substring(charOffset)
            setSelectionOffset({ lineOffset: lineOffset, charOffset: charOffset + 1 })
          }

          setText(cloneNodes.map(node => node.outerHTML).reduce((a, b) => a + b))
        }
      }
    }
  }

  useEffect(() => {
    const selection = window.getSelection()
    if (selection && elemRef.current) {
      const range = document.createRange()
      range.setStart(elemRef.current.children[selectionOffset.lineOffset].firstChild || elemRef.current.children[selectionOffset.lineOffset] as Node, selectionOffset.charOffset)
      range.collapse(true)

      selection.removeAllRanges()
      selection.addRange(range)
    }
  }, [text])

  return (
    <Container>
      <Controls>
        <Bold active={boldActive} onClick={() => setBoldActive(!boldActive)}>B</Bold>
        <Italic active={italicActive} onClick={() => setItalicActive(!italicActive)}>i</Italic>
        <EditorButton active={bulletsActive} onClick={() => setBulletsActive(!bulletsActive)}>
          <Icon render="bullets" />
        </EditorButton>
        <Link active={linkActive} onClick={() => setLinkActive(!linkActive)}>
          <Icon render="link" />
          <LinkInput placeholder='Enter url' value={linkInput} onChange={e => setLinkInput(e.target.value)} onClick={e => e.stopPropagation()} />
          <LinkSubmit render="tick" />
        </Link>
      </Controls>
      <Editor>
        <EditableRichText ref={elemRef} contentEditable onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => handleChange(e)} htmlString={text} />
      </Editor>
    </Container>
  )
}

const Editor = styled(Box)`
  background-color: ${theme.colors.cream};
  border-radius: 16px;
  border: 2px solid ${theme.colors.oatmeal};
  padding: 16px;

  p:after {
    content:"";
    display:inline-block;
    width:0px;
    /* outline:2px solid red; // debug */
  }
`

const EditableRichText = styled(RichText)`
  height: 300px;
  overflow: scroll;
  outline: none;
`

const Container = styled(Box)`
  background-color: ${theme.colors.coconut};
  border-radius: 16px;
  padding: 16px;
`

const Controls = styled(Box)`
  padding: 0 0 16px 0;
  display: flex;
  gap: 12px;
`

const EditorButton = styled(Box) <{ active: boolean }>`
  height: 50px;
  width: 50px;
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

const Link = styled(EditorButton)`
  transition: width .3s;
  ${({ active }) => active && `width: 400px;`}
  justify-content: left;
  overflow: hidden;
  gap: 16px;
  padding-right: 6px;

  ${({ active }) => active && `
    background-color: ${theme.colors.fairyFloss};

    :hover {
      filter: none;
    }
  `}
`

const LinkSubmit = styled(Icon)`
  background-color: ${theme.colors.marshmallowPink};
  height: 40px;
  width: 40px;
  border-radius: 20px;
  padding: 6px;

  :hover {
    background-color: ${theme.colors.lollipop};
  }
`

const LinkInput = styled.input`
  width: inherit;
  height: 40px;
  border: none;
  border-radius: 20px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 16px;

  :hover {
    outline: 2px solid ${theme.colors.bubblegum};
  }

  :focus {
    outline: 2px solid ${theme.colors.marshmallowPink};
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

// const Editor = styled(Textarea)`
//   width: 100%;

//   div {
//     display: flex;
//   }

//   :focus {
//     outline: none;
//   }
// `