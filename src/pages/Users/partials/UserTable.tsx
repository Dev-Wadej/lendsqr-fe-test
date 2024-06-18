import { useMemo, useState } from "react"
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
import StatusBadge from "@/components/status-badge"

import "../components/index.scss"

import usePagination from "@/hooks/usePaginate"
import UserTableAction from "../components/UserTableActions"
import UserFormFilter from "../components/UserFormFilter"
import UserPagination from "../components/UserPagination"

const headerText = [
  "ORGANIZATION",
  "USERNAME",
  "EMAIL",
  "PHONE NUMBER",
  "DATE JOINED",
  "STATUS",
  "",
]

export default function UserTable() {
  const { data, loading } = useFetch<QueryUserRes>()

  const [opeTableAction, setOpenTbleAction] = useState(false)
  const [showFilterForm, setShowFilterForm] = useState(false)

  const [clickedRowId, setClickedRowId] = useState("")

  const users = useMemo(() => data ?? [], [data])

  const {
    gaps,
    nextPage,
    page,
    prevPage,
    setPage,
    totalPages,
    firstContentIndex,
    lastContentIndex,
  } = usePagination({
    contentPerPage: 9,
    count: users?.length,
  })

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

      <UserPagination
        gaps={gaps}
        nextPage={nextPage}
        page={page}
        prevPage={prevPage}
        setPage={setPage}
        totalPages={totalPages}
        dataLength={users?.length}
      />
    </section>
  )
}
