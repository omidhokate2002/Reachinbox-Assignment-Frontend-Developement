import img from "../assets/i.svg";
import axios from "axios";
import { useEffect } from "react";

function SubView() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
            headers: { Authorization: token },
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66]'>
      <img src={img} alt='Illustration' />
      <div className='text-2xl my-8'>
        It’s the beginning of a legendary sales pipeline
      </div>
      <div className='text-[#5B5F66] dark:text-[#9E9E9E]'>
        When you have inbound E-mails you’ll see them here
      </div>
    </div>
  );
}

export default SubView;
