import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { Text } from '../Text'

import { focusOutlineStyle } from '../utils/focusOutline'
import { MarginProps } from '../utils/space'

const MAX_PAGES = 7
const MAX_ADDITIONAL_PAGES = Math.ceil(MAX_PAGES / 2)

export type PaginationProps = {
  /** Total number of records  */
  total: number
  /** Number of records per page  */
  partition: number
  /** Handle page change */
  handlePageChange: (page: number) => void
  /** Sets current page number */
  currentPage?: number
} & MarginProps

export const Pagination: FC<PaginationProps> = ({
  total,
  partition,
  handlePageChange,
  currentPage,
  ...marginProps
}) => {
  const [lastPage, setLastPage] = useState(0)
  const [activePage, setActivePage] = useState(1)
  const [pages, setPages] = useState<number[]>([])
  const [shownPages, setShownPages] = useState<number[]>([])
  const [showFirstDots, setShowFirstDots] = useState(false)
  const [showLastDots, setShowLastDots] = useState(false)

  useEffect(() => {
    // This is a rather hacky fix, in theory it should be listening to total, but because the total comes from the same endpoint as the data, it forces a reset to 1 every time
    // Using lastPage seems to bypass that
    if (currentPage) {
      setActivePage(currentPage)
    } else {
      setActivePage(1)
    }
  }, [lastPage, currentPage])

  useEffect(() => {
    const numberOfPages = Math.ceil(total / partition)
    if (numberOfPages > 1) {
      setLastPage(numberOfPages)
    } else if (numberOfPages === 1) {
      // Sets last page to be null to avoid the last page being kept from previous state.
      setLastPage(0)
    }
    if (numberOfPages > 2) {
      const allPages = Array.from({ length: numberOfPages }, (_, i) => i + 1)
      setPages(allPages.slice(1, numberOfPages - 1))
    } else {
      // Sets pages to empty to avoid using the previous state if pages set before.
      setPages([])
    }
  }, [total, partition])

  useEffect(() => {
    if (lastPage <= MAX_PAGES) {
      setShownPages(pages)
    } else if (activePage <= MAX_ADDITIONAL_PAGES) {
      setShownPages(pages.slice(0, MAX_ADDITIONAL_PAGES))
    } else if (activePage > lastPage - MAX_ADDITIONAL_PAGES) {
      setShownPages(pages.slice(pages.length - MAX_ADDITIONAL_PAGES))
    } else {
      const activePageIndex = pages.indexOf(activePage)
      setShownPages(pages.slice(activePageIndex - 1, activePageIndex + 2))
    }
  }, [lastPage, activePage, pages])

  useEffect(() => {
    setShowFirstDots(shownPages[0] !== pages[0])
    setShowLastDots(
      shownPages[shownPages.length - 1] !== pages[pages.length - 1],
    )
  }, [shownPages, pages])

  const movePage = (page: number) => {
    if (page > 0 && page <= lastPage) {
      setActivePage(page)
      handlePageChange(page)
    }
  }

  return (
    <Container flex direction="row" {...marginProps}>
      {activePage - 1 > 0 && (
        <IconBox
          aria-label="previous-page"
          onClick={() => movePage(activePage - 1)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              movePage(activePage - 1)
            }
          }}
        >
          <Icon size={18} render="arrow" />
        </IconBox>
      )}
      <PageBox $active={activePage === 1} onClick={() => movePage(1)}>
        <Text
          typo={activePage === 1 ? 'headline-small' : 'body-regular'}
          tag="p"
        >
          1
        </Text>
      </PageBox>
      {showFirstDots && (
        <PageBox>
          <Text tag="p">...</Text>
        </PageBox>
      )}
      {shownPages.map((i) => {
        return (
          <PageBox
            $active={activePage === i}
            key={i}
            onClick={() => movePage(i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                movePage(i)
              }
            }}
          >
            <Text
              typo={activePage === i ? 'headline-small' : 'body-regular'}
              tag="p"
            >
              {i}
            </Text>
          </PageBox>
        )
      })}
      {showLastDots && (
        <PageBox>
          <Text tag="p">...</Text>
        </PageBox>
      )}
      {Boolean(lastPage) && (
        <PageBox
          $active={activePage === lastPage}
          onClick={() => movePage(lastPage)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              movePage(lastPage)
            }
          }}
        >
          <Text
            typo={activePage === lastPage ? 'headline-small' : 'body-regular'}
            tag="p"
          >
            {lastPage}
          </Text>
        </PageBox>
      )}
      {activePage + 1 <= lastPage && (
        <IconBox
          aria-label="next-page"
          onClick={() => movePage(activePage + 1)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              movePage(activePage + 1)
            }
          }}
        >
          <Icon size={18} render="arrow" rotate={180} />
        </IconBox>
      )}
    </Container>
  )
}

interface IPageBox {
  $active?: boolean
}

const Container = styled(Box)`
  align-items: center;
  > button {
    margin-right: 4px;

    &:last-child {
      margin-right: 0;
    }
  }
`

const PageBox = styled.button<IPageBox>`
  background: ${({ $active, theme }) =>
    $active ? theme.color.surface.base[300] : theme.color.surface.base['000']};
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 24px;
  width: fit-content;
  padding: 0px 4px;
  height: 24px;
  min-width: 24px;

  &:hover {
    background-color: ${({ theme }) => theme.color.surface.base[300]};
  }
  &:active {
    background-color: ${({ theme }) => theme.color.surface.base[200]};
  }

  ${focusOutlineStyle}
`

const IconBox = styled.button<IPageBox>`
  cursor: pointer;

  ${focusOutlineStyle}
`
