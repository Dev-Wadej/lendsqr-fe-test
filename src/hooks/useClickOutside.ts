import { useEffect, useState } from "react"

export default function useClickOutside(ref: any, closeModal: () => void) {
  const [clicked, setClicked] = useState(false)
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setClicked(true)
        closeModal()
        return
      }

      setClicked(false)
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])

  return clicked
}
