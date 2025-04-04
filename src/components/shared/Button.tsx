import React from 'react'

export interface buttonProps {
    text: string
    onClick: () => void
    textColor?: string
    bgColor?: string
    type?: "button" | "submit" | "reset"
    disabled?: boolean
}
function Button({text,onClick,textColor="#000000",bgColor="#ffffff",type="button",disabled=false}:buttonProps) {
  return (
    <button
    onClick={() => onClick()}
    style={{ backgroundColor: bgColor, color: textColor }}

    className={`rounded-sm px-[16px] py-[8px] hover:opacity-50 `}
    disabled={disabled}
    type={type}
  >
    {text}
  </button>  )
}

export default Button