'use client'
import { useEffect, useState } from "react";
import FirstPage from "./ui/FirstPage";
import SecondPage from "./ui/SecondPage";
import ThirdPage from "./ui/ThirdPage";
import ReactPageScroller from "react-page-scroller";

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (

    <main className="flex min-h-screen flex-col items-center justify-between">
      {isMobile ? (
        <>
          <FirstPage />
          <SecondPage />
          <ThirdPage />
        </>
      ) : (
        <ReactPageScroller>
          <FirstPage />
          <SecondPage />
          <ThirdPage />
        </ReactPageScroller>
      )}
    </main>
  );
}
