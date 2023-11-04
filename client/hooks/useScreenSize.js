import { useEffect, useState } from "react";

const useScreenSize = () => {
  const getSize = function () {
    return {
      width: window?.innerWidth,
      height: window?.innerHeight,
      screen: "sm",
    };
  };

  var [screenSize, setScreenSize] = useState({
    width: 300,
    height: 300,
    screen: "sm",
  });

  useEffect(() => {
    setScreenSize(getSize());

    function handleResize() {
      setScreenSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      return window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (screenSize.width < 520) {
    screenSize.screen = "xs";
  } else if (screenSize.width >= 520 && screenSize.width < 800) {
    screenSize.screen = "sm";
  } else if (screenSize.width >= 800 && screenSize.width < 1024) {
    screenSize.screen = "m";
  } else if (screenSize.width >= 1024 && screenSize.width < 1280) {
    screenSize.screen = "l";
  } else {
    screenSize.screen = "xl";
  }

  return screenSize;
};

export default useScreenSize;
