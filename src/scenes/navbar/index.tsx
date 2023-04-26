import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin  } from "@fortawesome/free-brands-svg-icons";

import Logo from "@/assets/logo_s.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void; // function
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  // centering flex items with even spaces between them
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-gray-20 drop-shadow";

return (
  <nav>
    <div
      className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`} 
    >
      {/* inner div with width 83% of total width (= outermost div) with margin x auto to center */}
      <div className={`${flexBetween} mx-auto w-5/6`}> 
        {/* gap: space between each item */}
        <div className={`${flexBetween} w-full gap-16`}> 
          {/* leftside showing logo */}
          {isTopOfPage ? <p>{}</p> : <img src={Logo} alt="logo" />}

          {/* rightside */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-2/5`}>
              <div className={`${flexBetween} gap-8 text-md`}>
                <Link 
                  page="Home" 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  />
                <Link 
                  page="About" 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  />
                <Link 
                  page="Work" 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  />
                <Link 
                  page="Contact" 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <a 
                  href="https://www.linkedin.com/in/hj-kang07"
                  target="_blank"
                  rel="noreferrer"
                >                
                  <FontAwesomeIcon 
                    icon={faLinkedin}
                    className="h-5 w-5 hover:text-primary-300"
                  />
                </a>
                <a 
                  href="https://github.com/cocomarine"
                  target="_blank"
                  rel="noreferrer"
                >                 
                  <FontAwesomeIcon 
                    icon={faGithub}
                    className="h-5 w-5 hover:text-primary-300"
                  />
                </a>
              </div>
            </div>) : (
              <button
                className="rounded-full bg-taupe p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white"/>
              </button>
            )} 
        </div>
      </div>
    </div>

    {/* mobile menu modal */}
    {/* 2 conditionals: smaller than med screen and button clicked to call onClick for menu toggle */}
    {!isAboveMediumScreens && isMenuToggled && (
      <div className="fixed right-0 bottom-0 z-40 h-full w-[180px] bg-primary-100 drop-shadow-xl opacity-80">
        {/* close icon */}
        <div className="flex justify-end p-12">
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <XMarkIcon className="h-6 w-6 text-taupe"/>
          </button>
        </div>

        {/* menu items */}
        <div className="ml-[33%] flex flex-col gap-10 text-md">
          <Link 
            page="Home" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link 
            page="About" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link 
            page="Work" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link 
            page="Contact" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <div>
            <a 
              href="https://www.linkedin.com/in/hj-kang07"
              target="_blank"
              rel="noreferrer"
            >                  
              <FontAwesomeIcon 
                icon={faLinkedin}
                className="h-6 w-6 pr-5 hover:text-primary-300"
              />
            </a>
            <a 
              href="https://github.com/cocomarine"
              target="_blank"
              rel="noreferrer"
            >                  
              <FontAwesomeIcon 
                icon={faGithub}
                className="h-6 w-6 hover:text-primary-300"
              />
            </a>
          </div>
        </div>
      </div>
    )}
  </nav>
)}

export default Navbar;