 import { userDTO } from '../../dtos/UserDTO'
import { formatDate } from '../../utils/formatDate'
import Button from './Button'


interface props{
    user:userDTO
}
function UserCard({user}:props) {
    const initals= (user?.firstName?user.firstName[0].toUpperCase():"") + (user?.lastName?user.lastName[0]?.toUpperCase():"");
    const fullname= (user?.firstName||"") + " " + (user?.lastName||"")

  return (
    <div className='flex flex-col shadow-lg border-[0.5px] border-white rounded-md gap-[8px] py-[16px]'>
        <div className='mx-auto text-[24px] font-semibold text-white flex items-center justify-center bg-[var(--bg-blue)] rounded-full w-[90px] h-[90px]'>
            {initals}
        </div>
        <div className='px-[24px]'>
            <p className='text-[20px] font-semibold text-[var(--text-color)]'>
                {fullname}
            </p>
            <p className='text-[var(--text-color-opacity)]'>Email: {user?.email||"no email"}</p>
            <p className='text-[var(--text-color-opacity)]'>Status: {user?.status||"no status"}</p>
            <p className='text-[var(--text-color-opacity)]'>Date of Birth: {user?.dateOfBirth?formatDate(user?.dateOfBirth):"no date of birth"}</p>
        </div>
        <div className='flex items-center justify-end gap-[16px] px-[24px] mt-[16px] '>
             <Button text='Edit' onClick={() => {}} bgColor='var(--bg-blue)' textColor='var(--text-white)'/>
             <Button text='Delete' onClick={() => {}} bgColor='var(--bg-red)' textColor='var(--text-white)'/>
             
        </div>
    </div>
  )
}

export default UserCard