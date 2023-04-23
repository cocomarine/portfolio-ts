import { SelectedPage } from "@/shared/types";
// import HomePageMainImage from "@/assets/HomePageMainImage.png";
import HomePageMainImage from "@/assets/MainImageFace.png";
// import HomePageMainText from "@/assets/HomePageMainText.png";
import HomePageMainText from "@/assets/logo_lg.png";
import ActionButton from "@/shared/ActionButton";
import ScrollToTop from "react-scroll-to-top";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid"; 

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

function Home({ setSelectedPage }: Props) {
  return <section
    id="home"
    className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
  >
    <div className='md:flex mx-auto w-3/5 items-center justify-center md:h-5/6'>
      <div className='z-10 mt-24 md:w-3/5'>
        <div className="relative"> 
          <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]">
            <img src={HomePageMainText} alt="home-page-main-text" />
          </div>
          <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]">
            <p className='text-center text-xl py-5'>Software Developer</p>
          </div>
          <div className="flex items-center justify-center gap-4 pb-5">
            <ActionButton setSelectedPage={setSelectedPage}>Portfolio</ActionButton>
            <ActionButton setSelectedPage={setSelectedPage}>Contact</ActionButton>
          </div>
        </div>
      </div>
      <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-center">
        <img src={HomePageMainImage} alt="home-main-image" />
      </div>
      <ScrollToTop smooth component={<ChevronDoubleUpIcon className="animate-pulse"/>} />
    </div>
  </section>
}

export default Home;