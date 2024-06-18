import React, { useMemo, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table"
import dropDown from "@/assets/svgs/dropdown.svg"
import useFetch from "@/hooks/useFetch"
import { QueryUserRes } from "@/models/user"
import Progressbar from "@/components/progress-bar"
import StatusBadge from "./StatusBadge"

import "./index.scss"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/pagination"
import usePagination from "@/hooks/usePaginate"
import UserTableAction from "./UserTableActions"
import UserFormFilter from "./UserFormFilter"

const headerText = [
  "ORGANIZATION",
  "USERNAME",
  "EMAIL",
  "PHONE NUMBER",
  "DATE JOINED",
  "STATUS",
  "",
]

const numberPerpage = 9
export default function UserTable() {
  const { data, loading } = useFetch<QueryUserRes>()

  const [opeTableAction, setOpenTbleAction] = useState(false)
  const [showFilterForm, setShowFilterForm] = useState(false)

  const [clickedRowId, setClickedRowId] = useState("")

  const users = useMemo(() => data ?? [], [data])

  const {
    firstContentIndex,
    gaps,
    lastContentIndex,
    nextPage,
    page,
    prevPage,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 9,
    count: users?.length,
  })

  const jumpTopageArray = Array.from(
    { length: Math.floor(users?.length / numberPerpage) },
    () => numberPerpage
  )

  if (loading)
    return (
      <div className="loading">
        <Progressbar />
      </div>
    )
  return (
    <section>
      <div className="user-table-wrapper relative overflow-scroll">
        {showFilterForm && (
          <UserFormFilter closeModal={() => setShowFilterForm(false)} />
        )}
        <Table>
          <TableHeader>
            <TableRow>
              {headerText.map((header, idx) => (
                <TableHead key={header} className={``}>
                  <button
                    className={`user-table-header p-8 ${
                      idx === 3 || idx === 4 ? "w-sm" : ""
                    }`}
                    onClick={() => setShowFilterForm((prev) => !prev)}
                  >
                    {header}
                    {header && <img src={dropDown} alt="Icon" />}
                  </button>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.slice(firstContentIndex, lastContentIndex)?.map((user) => (
              <TableRow key={user.id} className="user-table-row">
                <TableCell className="user-table-cell p-5">
                  {user.orgName}
                </TableCell>
                <TableCell className="user-table-cell p-5">
                  {user.userName}
                </TableCell>
                <TableCell className="user-table-cell p-5">
                  {user.email}
                </TableCell>
                <TableCell className="user-table-cell p-5">
                  {user.phoneNumber}
                </TableCell>
                <TableCell className="user-table-cell p-5">
                  {new Date(user.createdAt).toLocaleString("en-US")}
                </TableCell>
                <TableCell className="user-table-cell p-5">
                  <StatusBadge />
                </TableCell>
                <TableCell className="user-table-cell p-5 relative">
                  <button
                    className="rotate-90"
                    id="status"
                    onClick={() => {
                      setOpenTbleAction((prev) => !prev)
                      setClickedRowId(user?.id)
                    }}
                  >
                    ...
                  </button>
                  {opeTableAction && user.id === clickedRowId && (
                    <UserTableAction
                      closeModal={() => setOpenTbleAction(false)}
                      id={user?.id}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
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
          <span>out of {users?.length}</span>
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
    </section>
  )
}
