import { FC, ReactNode, useEffect, useLayoutEffect, useRef } from 'react'

const DEFAULT_MESSAGE = 'No results'

interface Props {
  onNotFound?: (searchTerm: string) => void
  onMessageChange: (message: string) => void
  searchTerm: string
  notFoundComponent?: ReactNode
}

const BLOCK_SELECTOR =
  'address, article, aside, blockquote, dd, div, dl, dt, figcaption, footer, h1, h2, h3, h4, h5, h6, header, li, ol, p, section, ul'

// Reads the element's text as a screen reader would: skipping hidden parts,
// and adding a space where it moves to another block or line, so a heading
// and a hint don't run together.
const getText = (element: HTMLElement) => {
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
  )
  let text = ''
  let previousBlock: Element | null = null
  while (walker.nextNode()) {
    const node = walker.currentNode
    if (node.nodeName === 'BR') {
      text += ' '
      continue
    }
    if (node.nodeType !== Node.TEXT_NODE) continue

    const parent = node.parentElement
    if (parent?.closest('[aria-hidden="true"], [hidden]')) continue

    const block = parent?.closest(BLOCK_SELECTOR) ?? null
    if (previousBlock && block !== previousBlock) {
      text += ' '
    }
    text += node.textContent ?? ''
    previousBlock = block
  }
  return text.replace(/\s+/g, ' ').trim()
}

export const EmptyResults: FC<Props> = ({
  onNotFound,
  onMessageChange,
  searchTerm,
  notFoundComponent,
}) => {
  const ref = useRef<HTMLLIElement>(null)

  useEffect(() => {
    onNotFound?.(searchTerm)
  }, [])

  // Report the text people see, so the live region announces a custom
  // notFoundComponent too. A layout effect updates it before paint.
  useLayoutEffect(() => {
    const text = ref.current ? getText(ref.current) : ''
    onMessageChange(text || DEFAULT_MESSAGE)
  }, [searchTerm, notFoundComponent, onMessageChange])

  return <li ref={ref}>{notFoundComponent || DEFAULT_MESSAGE}</li>
}
