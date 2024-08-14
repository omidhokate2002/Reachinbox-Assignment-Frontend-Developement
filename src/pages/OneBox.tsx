import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import LandingPage from "../components/Onebox/LandingPage ";
import OneBoxNavbar from "../components/Onebox/OneBoxNavbar";
import SideBar from "../components/Onebox/SideBar";
import SubView from "../components/SubView";

function OneBox() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      localStorage.setItem("token", `Bearer ${token}`);
    }
  }, [token, navigate]);

  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );

  const handleMenuItemClick = (path: string) => {
    setSelectedComponent(path);
  };

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "/":
      case "/search":
      case "/mail":
      case "/send":
      case "/stack":
      case "/stacks":
        return <SubView />;
      case "/inbox":
        return <LandingPage />;
      default:
        return <SubView />;
    }
  };

  return (
    <div className='h-screen w-screen dark:bg-black bg-white pl-14'>
      <SideBar onMenuItemClick={handleMenuItemClick} />
      <OneBoxNavbar />
      <div>{renderSelectedComponent()}</div>
    </div>
  );
}

export default OneBox;
