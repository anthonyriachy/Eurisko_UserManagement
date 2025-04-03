import {ReactComponent as MoonIcon} from '../assets/icons/moonWhite.svg'
import { useDarkMode } from '../hooks/useDarkMode';
function Header() {

  const [darkMode, setDarkMode] = useDarkMode(); 


  async function handleCreateUser(){
    try {
      
    } catch (error) {
      //use toast later
      console.error(error)
    }
  }

  function handleLogout(){

  }

  function handleChangeTheme(){
      setDarkMode(!darkMode); 
  }


  return (
    <nav className='bg-[var(--bg-blue)] flex items-center justify-between px-[24px] py-[16px]'>
        <p className='text-white text-[20px] font-medium'>User Management</p>
        <div className='flex  items-center gap-[16px]'>
            <button onClick={()=>handleCreateUser()} className='rounded-sm px-[16px] py-[8px] bg-[var(--bg-white)] text-[var(--text-blue)]'>Create User</button>
            <button onClick={()=>handleLogout()} className='rounded-sm px-[16px] py-[8px] bg-[var(--bg-red) text-[var(--text-white)] bg-[var(--bg-red)]'>Logout</button>
            <button onClick={()=>handleChangeTheme()} className='ml-[8px]'><MoonIcon width={16} height={16}/></button>
        </div>
    </nav>
  )
}

export default Header