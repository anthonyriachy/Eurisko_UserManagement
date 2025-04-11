import React from 'react';
import { formatDate } from '../../../utils/formatDate';
import { UserInfoProps } from './UserInfo.type';
function UserInfo({ user }: UserInfoProps) {

    const fullname = (user?.firstName || "") + " " + (user?.lastName || "")

    return (
        <div className='flex flex-col justify-between flex-1'>
            <div className='px-[24px]'>
                <p className='text-[20px] font-semibold text-[var(--text-color)]'>
                    {fullname}
                </p>
                <p className='text-[var(--text-color-opacity)]'>Email: {user?.email || "no email"}</p>
                <p className='text-[var(--text-color-opacity)]'>Status: {user?.status || "no status"}</p>
                <p className='text-[var(--text-color-opacity)]'>Date of Birth: {user?.dateOfBirth ? formatDate(user?.dateOfBirth) : "no date of birth"}</p>
            </div>
        </div>
    )
}

export {UserInfo}