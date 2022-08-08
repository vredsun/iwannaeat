import { useEffect, useState } from "react";

const MIN_SCROLL = 50;

export const useScrollPercent = (): number => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(
      () => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollTopMin = Math.min(scrollTop, MIN_SCROLL);
    
            setScrollPercent(scrollTopMin / MIN_SCROLL)
        };

        document.addEventListener('scroll', handleScroll);

        return () => document.removeEventListener('scroll', handleScroll)
      },
      [],
    );

    return scrollPercent;
} 