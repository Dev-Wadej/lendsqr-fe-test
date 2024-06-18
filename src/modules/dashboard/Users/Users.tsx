import users from "@/assets/svgs/users.svg"
import activeUsers from "@/assets/svgs/activeusers.svg"
import usersWithLoan from "@/assets/svgs/userswithloan.svg"
import usersWithSavings from "@/assets/svgs/userswithsavings.svg"
// import dropDown from "@/assets/svgs/dropdown.svg"

import "./users.scss"
import UserDashboardBox from "./components/UserDashboardBox"
import UserTable from "./components/UserTable"

const boxesProperties = [
  { name: "USERS", icon: users, amount: "2,453" },
  { name: "ACTIVE USERS", icon: activeUsers, amount: "2,453" },
  { name: "USERS WITH LOAN", icon: usersWithLoan, amount: "12,453" },
  { name: "USERS WITH SAVINGS", icon: usersWithSavings, amount: "102,453" },
]
export default function Users() {
  return (
    <section className="users">
      <h2>Users</h2>
      <ul className="users-box">
        {boxesProperties.map((dataBoxesProp) => (
          <UserDashboardBox
            amount={dataBoxesProp.amount}
            icon={dataBoxesProp.icon}
            name={dataBoxesProp.name}
            key={dataBoxesProp.name}
          />
        ))}
      </ul>
      <div>
        <UserTable />
      </div>
    </section>
  )
}
