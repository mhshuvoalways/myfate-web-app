import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const TopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setPrevScrollY(currentScrollY);
      if (currentScrollY > prevScrollY) {
        setScrollDirection(false);
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div className="pb-[76px]">
      <Header
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        scrollDirection={scrollDirection}
      />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {isOpen && (
        <p
          className="bg-black fixed inset-0 opacity-40 z-10"
          onClick={toggleSidebar}
        ></p>
      )}
    </div>
  );
};

export default TopHeader;
