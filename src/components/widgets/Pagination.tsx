import React from "react"
import PaginationReact from "react-paginate"
import { navigate } from "gatsby"
import styled from "styled-components"

type PaginationProps = {
  currentPage: number
  numberOfPages: number
}

export default function Pagination({
  currentPage,
  numberOfPages,
}: PaginationProps) {
  const onPageChange = ({ selected }: { selected: number }) => {
    selected += 1
    navigate(selected === 1 ? "/" : `/page/${selected}`)
  }

  return (
    <PaginationContainer>
      <PaginationReact
        initialPage={currentPage - 1}
        pageCount={numberOfPages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        disableInitialCallback
        onPageChange={onPageChange}
        containerClassName="pagination"
        activeClassName="active"
        pageLinkClassName="page"
      />
    </PaginationContainer>
  )
}

const PaginationContainer = styled.div`
  width: 100%;

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      list-style-type: none;

      a {
        margin: 0 5px;
        padding: 15px;
        background-color: ${p => p.theme.colors.dark};
        border: 2px solid transparent;
        border-radius: 8px;
        transition: border-color 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
          color: ${p => p.theme.colors.light};
          border-color: ${p => p.theme.colors.main};
        }

        &.page {
          /* min-width: 70px; */
        }
      }

      /* &.previous,
      &.next {
        a {
          margin: 0 10px;
        }
      } */

      &.active {
        a {
          border-color: ${p => p.theme.colors.main};
          color: ${p => p.theme.colors.light};
        }
      }
    }
  }
`
