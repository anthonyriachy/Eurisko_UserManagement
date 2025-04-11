import React from 'react'
import { DropdownButtonProps } from './DropdownButton.type'
import { ReactComponent as DropDownIcon } from "../../../assets/icons/Dropdown.svg";



function DropdownButton({ setShowDropdown, showDropdown }: DropdownButtonProps) {
    return (
        <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="cursor-pointer"
        >
            <DropDownIcon style={{ color: "white" }} />
        </button>
    )
}

export { DropdownButton }
