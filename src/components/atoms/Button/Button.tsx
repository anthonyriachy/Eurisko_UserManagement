import React from 'react'
import { ButtonVariant, ButtonProps, ButtonSize } from './Button.type'


const variantStyles = {
    [ButtonVariant.PRIMARY]: 'bg-[var(--bg-blue)] hover:bg-[var(--bg-blue)]/50 text-[var(--text-white)]',
    [ButtonVariant.SECONDARY]: 'border-[1px] hover:bg-[var(--bg-white)]/50 text-[var(--text-white)]',
    [ButtonVariant.DANGER]: 'bg-[var(--bg-red)] hover:bg-[var(--bg-red)]/50 text-[var(--text-white)]'
}

const sizeStyles = {
    [ButtonSize.SMALL]: 'px-[16px] py-[4px]',
    [ButtonSize.MEDIUM]: 'px-[16px] py-[8px] ',
    [ButtonSize.LARGE]: 'py-[16px]'
}

function Button({ variant = ButtonVariant.PRIMARY, size = ButtonSize.MEDIUM,type="button",children, onClick, className, ...props }: ButtonProps) {
    return (
        <button
            className={`rounded-sm ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}

export { Button }
