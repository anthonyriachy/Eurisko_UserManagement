import React from 'react';
import { Button, ButtonSize, ButtonVariant } from '../../atoms/Button';
import { MobileNavDropdownProps } from './MobileNavDropdown.type';

 

function MobileNavDropdown({ isOpen }: MobileNavDropdownProps) {
    return (
        <div className={` absolute top-full left-0 bg-[var(--bg-blue)]/90 w-full  px-[24px]  overflow-hidden transition-height duration-200 ${isOpen ? "max-h-[500px] py-[16px]" : "max-h-0"}`}>
            <ul className="flex flex-col gap-[8px]">
                <li>
                    <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.MEDIUM} className='w-full'>
                        Create User
                    </Button>
                </li>
                <li>
                    <Button variant={ButtonVariant.DANGER} size={ButtonSize.MEDIUM} className='w-full'>
                        Logout
                    </Button>
                </li>
            </ul>
        </div>
    );
}; 

export {MobileNavDropdown}