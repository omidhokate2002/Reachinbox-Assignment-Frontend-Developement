import axios from "axios";
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import CenterPage from "./CenterPage";
import FeaturedComponent from "./FeaturedComponent";
import Inbox from "./Inbox";

function LandingPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedThread, setSelectedThread] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          { headers: { Authorization: token } }
        );
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const interval = setInterval(fetchData, 2500);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className='bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex h-screen w-full justify-center items-center'>
        Loading ...
      </div>
    );
  }

  const handleLoadMail = async (threadId: any) => {
    setSelectedThread(threadId);
  };

  return (
    <div className='bg-[#ECEFF3] dark:bg-black text-white pt-16 flex w-full h-screen'>
      <div className='w-1/4'>
        <Inbox data={data} loadMail={handleLoadMail} />
      </div>
      <div className='w-2/4'>
        {/* @ts-ignore */}
        <CenterPage selectedThread={selectedThread} />
      </div>
      <div className='w-1/4'>
        <FeaturedComponent />
      </div>
    </div>
  );
}

export default LandingPage;
