import React from 'react'
import { UserCardProps } from './UserCard.type'
import { formatDate } from '../../../utils/formatDate';
import { Avatar } from '../../atoms/Avatar';
import { UserInfo } from '../UserInfo';
import { UserActions } from '../UserActions';

function UserCard({user}:UserCardProps) {
    const initals= (user?.firstName?user.firstName[0].toUpperCase():"") + (user?.lastName?user.lastName[0]?.toUpperCase():"");


  return (
    <div className='flex flex-col shadow-lg border-[0.5px] border-white rounded-md gap-[8px] py-[16px]'>
        <Avatar initials={initals}/>
        <UserInfo user={user}/>
        <UserActions onDelete={() => {}} onEdit={() => {}}/>
    </div>
  )
}

export {UserCard}
