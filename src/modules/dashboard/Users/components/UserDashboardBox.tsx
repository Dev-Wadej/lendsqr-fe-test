import React, { ReactElement, ReactNode } from "react"

type Props = {
  icon: string
  name: string
  amount: string
}

export default function UserDashboardBox({ amount, icon, name }: Props) {
  return (
    <li>
      <span className="user-box-icon">{<img src={icon} alt="Icon" />}</span>
      <span className="users-box-title">{name}</span>
      <span className="users-box-amount">{amount}</span>
    </li>
  )
}
