import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; 
import Logo from "@/assets/Logo.png";
import Link from "./Link";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void; // function
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  // centering flex items with even spaces between them
  const flexBetween = "flex items-center justify-between";

  return <nav>
    <div
    // fixing navbar to the top (top-0), z-index 30 so that it stays on top of everything,
    // full width, padding  of y (top and bottom) 6
      className={`${flexBetween} fixed top-0 z-30 w-full py-6`} 
    >
      {/* inner div with width 83% of total width (= outermost div) with margin x auto to center */}
      <div className={`${flexBetween} mx-auto w-5/6`}> 
        {/* gap: space between each item */}
        <div className={`${flexBetween} w-full gap-16`}> 
          {/* leftside showing logo */}
          <img src={Logo} alt="logo" />

          {/* rightside */}
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <Link 
                page="Home" 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
              <Link 
                page="Benefits" 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
              <Link 
                page="Out Classes" 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
              <Link 
                page="Contact Us" 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className={`${flexBetween} gap-8`}>
              <p>Sign In</p>
              <button>Become a Member</button>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar;