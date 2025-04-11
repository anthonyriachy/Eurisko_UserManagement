import React from 'react'
import { UserGridProps } from './UserGrid.type';
import { UserCard } from '../../molecules/UserCard';

function UserGrid({users}:UserGridProps) {
  return users?.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] lg:gap-[32px]">
          {users.map((user,index) => (
            <UserCard user={user} key={index}/>
          ))}
        </div>
      ) : (
        <div className='w-full flex-1 flex items-center justify-center'>
          <p className='text-[var(--text-color)] text-[24px] font-semibold'>No users found</p>
        </div>
      )
  
}

export  {UserGrid}
