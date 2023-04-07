import { useState } from "react";
import Navbar from "@/scenes/navbar";
import { SelectedPage } from "@/shared/types";
import { useEffect } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home); // using enum
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      // when you are at the top of page
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    }
    // event type 'scroll' and listener callback function
    window.addEventListener("scroll", handleScroll) 
    // removing event listener when you leave the page to prevent memory leak
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} 
      />
    </div>
  )
}

export default App;
