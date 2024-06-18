import "../components/index.scss"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/pagination"
import usePagination, { Gap } from "@/hooks/usePaginate"

type Props = {
  dataLength: number
  totalPages: number
  nextPage: () => void
  prevPage: () => void
  setPage: (num: number) => void
  page: number
  gaps: Gap
}
const numberPerpage = 9
export default function UserPagination({
  gaps,
  nextPage,
  page,
  prevPage,
  setPage,
  totalPages,
  dataLength,
}: Props) {
  const jumpTopageArray = Array.from(
    { length: Math.floor(dataLength / numberPerpage) },
    () => numberPerpage
  )

  return (
    <div className="user-table-footer">
      <div className="pagination">
        <span>Showing</span>
        <span>
          <select
            name="Show More"
            id="pagination"
            onChange={(e) => {
              setPage(Number(e.target.value))
            }}
          >
            {jumpTopageArray.map((userNum, idx) => (
              <option value={idx + 1}>{userNum * (idx + 1)}</option>
            ))}
          </select>
        </span>
        <span>out of {dataLength}</span>
      </div>
      <Pagination>
        <PaginationContent className="pagination-wrapper">
          <PaginationItem>
            <PaginationPrevious
              onClick={prevPage}
              className={`${page === 1 ? "active-icon" : "inactive-icon"}`}
              disabled={page === 1}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className={`${page === 1 ? "active" : ""}`}
              onClick={() => setPage(1)}
              disabled={page === 1}
            >
              1
            </PaginationLink>
          </PaginationItem>
          {gaps.before ? (
            <PaginationItem>
              <PaginationLink>{<PaginationEllipsis />}</PaginationLink>
            </PaginationItem>
          ) : null}
          {gaps.paginationGroup.map((el) => (
            <PaginationLink
              onClick={() => setPage(el)}
              key={el}
              className={`page ${page === el ? "active" : ""}`}
            >
              {el}
            </PaginationLink>
          ))}
          {gaps.after ? (
            <PaginationItem>
              <PaginationLink>{<PaginationEllipsis />}</PaginationLink>
            </PaginationItem>
          ) : null}

          <PaginationItem>
            <PaginationLink
              disabled={page === totalPages}
              onClick={() => setPage(totalPages)}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              className={`${
                page === totalPages ? "active-icon" : "inactive-icon"
              }`}
              onClick={nextPage}
              disabled={page === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
