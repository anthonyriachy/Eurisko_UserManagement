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
    className={`rounded-sm px-[16px] py-[8px] bg-[${bgColor}] hover:bg-[${bgColor}]/50 text-[${textColor}]`}
    disabled={disabled}
    type={type}
  >
    {text}
  </button>  )
}

export default Button