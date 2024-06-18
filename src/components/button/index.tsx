import { ButtonHTMLAttributes, FC } from "react"
import "./button.scss"

// add more button colors here and style in the module
type ButtonColor = "primary" | "gray" | "danger" | "brand-blue"
type ButtonVariant = "link" | "block" | "outline"
type ButtonSize = "small" | "medium"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: ButtonColor
  variant: ButtonVariant
  size?: ButtonSize
}

const Button: FC<ButtonProps> = ({
  color = "primary",
  variant = "block",
  size = "medium",
  children,
  className = "",
  ...buttonProps
}) => {
  const colorClass = `btn-${color}`
  const variantClass = `btn-${variant}`
  const sizeClass = `btn-${size}`
  return (
    <button
      {...buttonProps}
      className={`btn ${sizeClass} ${colorClass} 
        ${variantClass} ${className ?? ""}`}
    >
      {children}
    </button>
  )
}

export { Button }
