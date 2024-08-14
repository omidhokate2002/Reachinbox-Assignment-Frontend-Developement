import logo from "../../assets/Logo-12.svg";

function LoginNavbar() {
  return (
    <nav className='bg-black border-b-2 border-[#25262B] fixed top-0 left-0 w-full h-16 flex items-center'>
      <div className='flex items-center justify-center w-full'>
        <img src={logo} alt='Company Logo' />
      </div>
    </nav>
  );
}

export default LoginNavbar;
