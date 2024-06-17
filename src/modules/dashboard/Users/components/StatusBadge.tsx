import React from "react"

import "./index.scss"

const status = [
  { title: "Active", color: "#39CD62", backgroundColor: "#F3FCF6" },
  { title: "Blacklisted", color: "#E4033B", backgroundColor: "#FCE6EB" },
  { title: "Pending", color: "#E9B200", backgroundColor: "#FDF7E5" },
  { title: "Inactive", color: "#545F7D", backgroundColor: "#F5F5F7" },
]
const randomStatusValue = () => {
  const value = Math.floor(Math.random() * status.length)
  const { backgroundColor, color, title } = status[value]
  return { backgroundColor, color, title }
}

export default function StatusBadge() {
  const { backgroundColor, color, title } = randomStatusValue()
  return (
    <span style={{ color, backgroundColor }} className="status-badge">
      {title}
    </span>
  )
}
