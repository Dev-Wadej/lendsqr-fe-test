import { NavLink } from "react-router-dom"
import React from "react"

import arrowDown from "@/assets/svgs/arrowdown2.svg"
import briefcase from "@/assets/svgs/briefcase.svg"
import home from "@/assets/svgs/home.svg"

import { sidebar } from "@/assets/dummydata"
import "./Sidebar.scss"

type Props = {
  setCloseSidebar: () => void
}
const Sidebar = ({ setCloseSidebar }: Props) => {
  return (
    <>
      {
        <section className="sidebar">
          <div className="close">
            <button onClick={() => setCloseSidebar()}>X</button>
          </div>
          <div className="sidebar-top">
            <span>
              <img src={briefcase} alt="icon" />
            </span>
            <span>Switch Organization</span>
            <span>
              <img src={arrowDown} alt="icon" />
            </span>
          </div>
          <div className="sidebar-dashboard sidebar-top">
            <span>
              <img src={home} alt="icon" />
            </span>
            <p>Dashboard</p>
          </div>
          <div className="sidebar-links">
            {sidebar.map((sidebar_details) => (
              <>
                <h4>{sidebar_details.title.toUpperCase()}</h4>
                {sidebar_details.links.map((details, idx) => (
                  <NavLink
                    key={idx}
                    className={"sidebar-links-each"}
                    id={details?.id}
                    to={details?.path ? details?.path : "/"}
                  >
                    <span>
                      <img src={details.icons} alt="sidebar icons" />
                    </span>
                    <span className="sidebar-links-eaches">{details.name}</span>
                  </NavLink>
                ))}
              </>
            ))}
          </div>
        </section>
      }
    </>
  )
}

export default Sidebar
