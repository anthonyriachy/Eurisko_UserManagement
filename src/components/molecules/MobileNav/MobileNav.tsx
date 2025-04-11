import  { useState } from 'react'
import { ThemeToggleButton } from '../../atoms/ThemeToggleButton';
import { DropdownButton } from '../../atoms/DropdownButton';
import { MobileNavDropdown } from '../MobileNavDropdown/MobileNavDropdown';

function MobileNav() {

    const [showDropdown, setShowDropdown] = useState(false);


    return (
        <>
            <div className=" sm:hidden flex items-center gap-[16px]">
                <ThemeToggleButton />
                <DropdownButton setShowDropdown={setShowDropdown} showDropdown={showDropdown} />
            </div>

           <MobileNavDropdown isOpen={showDropdown} />
        </>
    )
}

export { MobileNav }
