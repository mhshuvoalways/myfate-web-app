import { useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';

const usePagesLoaderContext = () => {
  const [pages, setPages] = useState([]);
  const [animationHasPlayed, setAnimationHasPlayed] = useState(false);

  useEffect(() => {
    setAnimationHasPlayed(
      pages.length > 0 || sessionStorage.getItem('loader-played') !== null
    );
    let newPages = [...pages, window.location.pathname];
    setPages(newPages);
    sessionStorage.setItem('loader-played', 'true');
  }, []);

  return {
    animationHasPlayed,
    setAnimationHasPlayed,
  };
};

const PagesLoaderContext = createContainer(usePagesLoaderContext);

export default PagesLoaderContext;
