import { useState } from "react";
import { SelectedPage } from "@/shared/types";
import { useEffect } from "react";
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import About from "@/scenes/about";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home); // using enum
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll) 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className="app bg-white-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} 
      />
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App;
