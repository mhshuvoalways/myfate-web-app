import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";

const usePagesLoaderContext = () => {
  const [animationHasPlayed, setAnimationHasPlayed] = useState(
    typeof window !== "undefined" &&
      sessionStorage.getItem("loader-played") !== null
  );

  useEffect(() => {
    if (!animationHasPlayed) {
      setAnimationHasPlayed(true);
      typeof window !== "undefined" &&
        sessionStorage.setItem("loader-played", "true");
    }
  }, [animationHasPlayed]);

  return {
    animationHasPlayed,
  };
};

const PagesLoaderContext = createContainer(usePagesLoaderContext);

export default PagesLoaderContext;
