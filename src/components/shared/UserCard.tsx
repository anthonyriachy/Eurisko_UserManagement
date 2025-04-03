 import { userDTO } from '../../dtos/UserDTO'
import { formatDate } from '../../utils/formatDate'


interface props{
    user:userDTO
}
function UserCard({user}:props) {

  return (
    <div className='flex flex-col shadow-lg border-[0.5px] border-white rounded-md gap-[8px] py-[16px]'>
        <div className='mx-auto text-[24px] font-semibold text-white flex items-center justify-center bg-[var(--bg-blue)] rounded-full w-[90px] h-[90px]'>
            {user?.username.split(" ")[0][0].toUpperCase()+user?.username.split(" ")[1][1].toUpperCase()}
        </div>
        <div className='px-[24px]'>
            <p className='text-[20px] font-semibold text-[var(--text-color)]'>
                {user?.username}
            </p>
            <p className='text-[var(--text-color-opacity)]'>Email: {user?.email}</p>
            <p className='text-[var(--text-color-opacity)]'>Status: {user?.status}</p>
            <p className='text-[var(--text-color-opacity)]'>Date of Birth: {formatDate(user?.dateOfBirth)}</p>
        </div>
        <div className='flex items-center justify-end gap-[16px] px-[24px] mt-[16px] '>
            <button className='px-[16px] py-[8px] bg-[var(--bg-blue)] hover:bg-[var(--bg-blue)]/60 text-white rounded-md ' >Edit</button>
            <button className='px-[16px] py-[8px] bg-[var(--bg-red)] hover:bg-[var(--bg-red)]/50 text-white rounded-md'>Delete</button>
        </div>
    </div>
  )
}

export default UserCard