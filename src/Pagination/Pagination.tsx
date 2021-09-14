import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { v4 as UUID } from 'uuid'

import { Box } from '../Box'
import { Text } from '../Text'
import { Icon } from '../Icon'

import { theme } from '../theme'

const MAX_PAGES = 7
const MAX_ADDITIONAL_PAGES = Math.ceil(MAX_PAGES / 2)

type PaginationProps = {
  /** Total number of records  */
  total: number
  /** Number of records per page  */
  partition: number
  /** Handle page change */
  handlePageChange: (page: number) => void
}

export const Pagination: FC<PaginationProps> = ({
  total,
  partition,
  handlePageChange,
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
    setActivePage(1)
  }, [lastPage])

  useEffect(() => {
    const numberOfPages = Math.ceil(total / partition)
    if (numberOfPages > 1) {
      setLastPage(numberOfPages)
    }
    if (numberOfPages > 2) {
      const allPages = Array.from({ length: numberOfPages }, (_, i) => i + 1)
      setPages(allPages.slice(1, numberOfPages - 1))
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
    <Container flex direction="row">
      {activePage - 1 > 0 && (
        <PageBox onClick={() => movePage(activePage - 1)}>
          <Icon size={24} render="arrow" />
        </PageBox>
      )}
      <PageBox active={activePage === 1} onClick={() => movePage(1)}>
        <Text typo={activePage === 1 ? 'desc-medium' : 'desc-light'} tag="p">
          1
        </Text>
      </PageBox>
      {showFirstDots && (
        <Box flex justifyContent="center">
          <Text tag="p">...</Text>
        </Box>
      )}
      {shownPages.map((i) => {
        return (
          <PageBox
            active={activePage === i}
            key={UUID()}
            onClick={() => movePage(i)}
          >
            <Text
              typo={activePage === i ? 'desc-medium' : 'desc-light'}
              tag="p"
            >
              {i}
            </Text>
          </PageBox>
        )
      })}
      {showLastDots && (
        <Box flex justifyContent="center">
          <Text tag="p">...</Text>
        </Box>
      )}
      {Boolean(lastPage) && (
        <PageBox
          active={activePage === lastPage}
          onClick={() => movePage(lastPage)}
        >
          <Text
            typo={activePage === lastPage ? 'desc-medium' : 'desc-light'}
            tag="p"
          >
            {lastPage}
          </Text>
        </PageBox>
      )}
      {activePage + 1 <= lastPage && (
        <PageBox onClick={() => movePage(activePage + 1)}>
          <Icon size={18} render="arrow" rotate={180} />
        </PageBox>
      )}
    </Container>
  )
}

interface IPageBox {
  active?: boolean
}

const Container = styled(Box)`
  align-items: center;
  height: 24px;
  > div {
    width: 24px;
    margin-right: 4px;

    &:last-child {
      margin-right: 0;
    }
  }
`

const PageBox = styled(Box)<IPageBox>`
  background: ${({ active }) => (active ? theme.colors.bg2 : 'none')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 50%;
`
