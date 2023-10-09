import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const TopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pb-[76px]">
      <Header
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {isOpen && (
        <p
          className="bg-black fixed inset-0 opacity-40 z-40"
          onClick={toggleSidebar}
        ></p>
      )}
    </div>
  );
};

export default TopHeader;
