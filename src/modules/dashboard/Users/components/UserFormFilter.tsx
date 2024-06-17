import React, { useRef } from "react"
import "./index.scss"
import useClickOutside from "@/hooks/useClickOutside"

type Props = {
  closeModal: () => void
}

const UserFormFilter = ({ closeModal }: Props) => {
  const handleFilter = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }
  const ref = useRef<HTMLFormElement>(null)
  const clicked = useClickOutside(ref, closeModal)

  return (
    <form className="form-dropdown" ref={ref}>
      <div>
        <label htmlFor="organization">Organization</label>
        <select name="organization" id="organization">
          <option value="select">Select</option>
        </select>
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="User" id="username" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" id="email" />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input type="date" placeholder="Date" id="date" />
      </div>
      <div>
        <label htmlFor="number">Phone Number</label>
        <input type="number" placeholder="Phone Number" id="number" />
      </div>
      <div>
        <label htmlFor="organization">Organization</label>
        <select name="organization" id="organization">
          <option value="select">Select</option>
        </select>
      </div>
      <br />
      <div className="form-btns">
        <button type="reset">Reset</button>
        <br />
        <button onClick={handleFilter} type="submit">
          Filter
        </button>
      </div>
    </form>
  )
}

export default UserFormFilter
