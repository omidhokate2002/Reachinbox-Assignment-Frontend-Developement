import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import ThemeToggle from "./ThemeToggle";

function OneBoxNavbar() {
  return (
    <div className='h-16 w-screen bg-white  dark:bg-[#1F1F1F] fixed px-8 text-[#5B5F66] dark:text-white top-0 flex justify-between items-center border-b-2 dark:border-[#343A40] border-[#E0E0E0]'>
      <div className='font-bold'>Onebox</div>

      <div className='pr-10 flex items-center'>
        <ThemeToggle />
        Tim's Workspace <MdOutlineKeyboardArrowDown className='text-3xl ml-3' />
      </div>
    </div>
  );
}

export default OneBoxNavbar;