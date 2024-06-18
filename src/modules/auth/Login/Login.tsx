import "./login.scss"

import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import companyLogo from "@/assets/svgs/companyLogo.svg"
import loginIllustrator from "@/assets/images/loginPage.jpg"
import { Button } from "@/components/button"

const navigate_to = "/dashboard/users"
const Login = () => {
  const navigate = useNavigate()
  const [formDetails, setFormDetails] = useState({ password: "", email: "" })
  const [formStateStatus, setFormStateStatus] = useState({
    password: true,
    email: true,
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formDetails.email) {
      setFormStateStatus((prev) => ({ ...prev, email: false }))
      return
    }
    if (!formDetails.password) {
      setFormStateStatus((prev) => ({ ...prev, password: false }))
      return
    }
    if (formDetails.email && formDetails.password) {
      navigate(navigate_to)
    }
  }
  const handleFormOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormDetails((prev) => ({ ...prev, [name]: value }))
    setFormStateStatus((prev) => ({ ...prev, [name]: true }))
  }

  return (
    <div className="login-page">
      <section>
        <img src={companyLogo} alt="company's logo" />
        <div className="login-img">
          <img src={loginIllustrator} alt="Sign in Page Illustrator" />
        </div>
      </section>

      <section>
        <form className="login-typography" onSubmit={handleFormSubmit}>
          <h1>Welcome!</h1>
          <h5>Enter details to login</h5>

          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            onChange={handleFormOnChange}
          />
          {!formStateStatus.email && (
            <p className="email-validator">Email is required</p>
          )}

          <div className="show-password">
            <input
              name="password"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handleFormOnChange}
              value={formDetails.password}
            />
            <Button
              size="small"
              variant="link"
              color="primary"
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? "HIDE" : "SHOW"}{" "}
            </Button>
          </div>
          {!formStateStatus.password && (
            <p className="password-validator">Enter an password</p>
          )}

          <Button
            size="small"
            variant="link"
            color="primary"
            type="button"
            className="forgot-password"
          >
            FORGOT PASSWORD?
          </Button>
          <Button
            onClick={handleFormSubmit}
            color="primary"
            size="small"
            type="submit"
            variant="block"
          >
            LOG IN
          </Button>
        </form>
      </section>
    </div>
  )
}

export default Login
