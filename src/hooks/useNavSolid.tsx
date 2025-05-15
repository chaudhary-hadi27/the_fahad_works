import { useState, useEffect } from 'react';

export default function useNavSolid(threshold = 50) {
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => {
    let lastTime = 0;
    const handler = () => {
      const now = Date.now();
      // only run every 100ms
      if (now - lastTime < 100) return;
      lastTime = now;
      setNavSolid(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  return navSolid;
}
