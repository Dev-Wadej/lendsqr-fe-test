import { ButtonHTMLAttributes, FC } from "react";
import "./button.scss";
type ButtonColor = "primary" | "gray" | "danger" | "brand-blue";
type ButtonVariant = "link" | "block" | "outline";
type ButtonSize = "small" | "medium";
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    color: ButtonColor;
    variant: ButtonVariant;
    size?: ButtonSize;
};
declare const Button: FC<ButtonProps>;
export { Button };
