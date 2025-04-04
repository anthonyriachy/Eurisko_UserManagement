import { ReactComponent as MoonIcon } from "../assets/icons/moonWhite.svg";
import { ReactComponent as DropDownIcon } from "../assets/icons/Dropdown.svg";
import { useDarkMode } from "../hooks/useDarkMode";
import { useState } from "react";
import Button from "../components/shared/Button";
function Header() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [showDropdown, setShowDropdown] = useState(false);

  async function handleCreateUser() {
    try {
    } catch (error) {
      //use toast later
      console.error(error);
    }
  }

  function handleLogout() {}

  function handleChangeTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <nav className="relative bg-[var(--bg-blue)] flex items-center gap-[8px] justify-between px-[16px] sm:px-[24px] py-[16px] shadow-md">
      <p className="text-white md:text-[20px] font-medium">User Management</p>
      <div className="sm:flex hidden  items-center gap-[8px] sm:gap-[16px] ">
        
        <Button text="Create User" onClick={() => handleCreateUser()} bgColor="var(--bg-white)" textColor="var(--text-blue)"/>
        <Button text="Logout"onClick={() => handleLogout()} bgColor="var(--bg-red)" textColor="var(--text-white)"/>
        <button onClick={() => handleChangeTheme()} className="ml-[8px]">
          <MoonIcon width={16} height={16} />
        </button>
      </div>
       <div className=" sm:hidden flex items-center gap-[16px]">
        <button onClick={() => handleChangeTheme()}  >
          <MoonIcon width={16} height={16} />
        </button>

      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="cursor-pointer"
        >
        <DropDownIcon style={{ color: "white" }} />
      </button>

        </div>


      
      <div
        className={` absolute top-full left-0 bg-[var(--bg-blue)]/90 w-full overflow-hidden transition-height duration-200 ${
          showDropdown ? "max-h-[500px] px-[24px] py-[16px]" : "max-h-0"
        }`}
      >
      <ul className="flex flex-col gap-[8px]">
        <li>
        <button className={`rounded-sm   px-[16px] py-[8px] w-full border-[1px] hover:bg-[var(--bg-white)]/50 text-[var(--text-white)]`}>
              Create User
          </button>
        </li>
        <li>
        <button className={`rounded-sm px-[16px] py-[8px] w-full   bg-[var(--bg-red)] hover:bg-[var(--bg-red)]/50 text-[var(--text-white)]`}>
          Logout
        </button>
          
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Header;
