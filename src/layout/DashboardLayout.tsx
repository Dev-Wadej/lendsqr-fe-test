import React from "react"
import { Outlet } from "react-router-dom"

import companyLogo from "@/assets/svgs/companyLogo.svg"
import search from "@/assets/svgs/search.svg"
import arrowDown from "@/assets/svgs/arrowdown.svg"
import human from "@/assets/images/human.jpg"
import bell from "@/assets/svgs/bell.svg"
import hamburger from "@/assets/svgs/hamburger.svg"

import Sidebar from "./Sidebar/Sidebar"

import "./index.scss"
import { Button } from "@/components/button"

export default function DashboardLayout() {
  const [showInput, setShowInput] = React.useState(false)
  const [showSidebar, setShowSidebar] = React.useState(false)

  return (
    <main>
      <nav className="navbar-top">
        {!showInput && (
          <div className="nav-logo">
            <img src={companyLogo} alt="company logo" />
          </div>
        )}
        <div className="nav-elements">
          {showInput && (
            <>
              {" "}
              <input
                id="show-small-device"
                type="text"
                placeholder="Search for anything"
              />
              <Button
                color="brand-blue"
                variant="link"
                onClick={() => setShowInput(false)}
              >
                X
              </Button>
            </>
          )}

          {!showInput && (
            <>
              <div>
                <input type="text" placeholder="Search For Anything" />
                <span>
                  <img
                    src={search}
                    alt="search icon"
                    onClick={() => setShowInput(true)}
                  />
                </span>
              </div>

              <ul className="navbar-ul">
                <li>
                  <a href="#">Docs</a>
                </li>
                <li>
                  <img src={bell} alt="bell icon" />
                </li>
                <li>
                  <img src={human} alt="The User's thumbnail" />
                  <span>
                    {" "}
                    Adedeji
                    <span>
                      <img src={arrowDown} alt="arrow icon" />
                    </span>
                  </span>
                </li>
              </ul>
            </>
          )}
        </div>
      </nav>
      <div className={showSidebar ? "show-sidebar" : "hide-sidebar"}>
        <Sidebar setCloseSidebar={() => setShowSidebar(false)} />
      </div>
      <section className="main-content">
        <div className="hamburger">
          <Button color="brand-blue" variant="link">
            <img
              src={hamburger}
              alt="hamburger icon"
              onClick={() => setShowSidebar(true)}
            />
          </Button>
        </div>
        <Outlet />
      </section>
    </main>
  )
}
