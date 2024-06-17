import React, { useEffect, useRef } from "react"

import blacklist from "@/assets/svgs/blacklistuser.svg"
import activateUser from "@/assets/svgs/activateuser.svg"
import eyes from "@/assets/svgs/eyes.svg"
import { Link } from "react-router-dom"
import "./index.scss"
import useClickOutside from "@/hooks/useClickOutside"

const UserTableAction = ({
  id,
  closeModal,
}: {
  id: string
  closeModal: () => void
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const clicked = useClickOutside(ref, closeModal)

  useEffect(() => {
    console.log("here")
  }, [clicked])

  return (
    <section ref={ref} className="user-table-action">
      <div>
        <Link to={id}>
          <span>
            <img src={eyes} alt="Eye icon" />
          </span>
          <span>View Details</span>
        </Link>
      </div>
      <div>
        <span>
          <img src={blacklist} alt="blacklist icon" />
        </span>
        <span>Blacklist User</span>
      </div>
      <div>
        <span>
          <img src={activateUser} alt="user icon" />
        </span>
        <span>Activate User</span>
      </div>
    </section>
  )
}

export default UserTableAction
