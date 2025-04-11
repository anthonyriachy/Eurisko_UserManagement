
import { ReactComponent as MoonIcon } from "../../../assets/icons/moonWhite.svg";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { Button, ButtonSize, ButtonVariant } from "../../atoms/Button";
import { ThemeToggleButton } from "../../atoms/ThemeToggleButton";

function DesktopNav() {
  const [darkMode, setDarkMode] = useDarkMode();


  async function handleCreateUser() {
    try {
    } catch (error) {
      //use toast later
      console.error(error);
    }
  }

  function handleLogout() { }

  function handleChangeTheme() {
    setDarkMode(!darkMode);
  }


  return (
    <div className="sm:flex hidden  items-center gap-[8px] sm:gap-[16px] ">
      <Button variant={ButtonVariant.SECONDARY} size={ButtonSize.MEDIUM} onClick={handleCreateUser}>
        Create User
      </Button>
      <Button variant={ButtonVariant.DANGER} size={ButtonSize.MEDIUM} onClick={handleLogout}>
        Logout
      </Button>
      <ThemeToggleButton />
    </div>)
}

export { DesktopNav };