import { useEffect, useState } from 'react';

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  const handleChange = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    handleChange();
    window.addEventListener('resize', handleChange);
    return () => {
      window.removeEventListener('resize', handleChange);
    };
  }, []);

  return { screenWidth };
};
