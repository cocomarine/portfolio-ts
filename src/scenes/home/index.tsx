import { SelectedPage } from "@/shared/types";
// import HomePageMainImage from "@/assets/HomePageMainImage.png";
import HomePageMainImage from "@/assets/MainImageFace.png";
// import HomePageMainText from "@/assets/HomePageMainText.png";
import HomePageMainText from "@/assets/logo_lg.png";
import ActionButton from "@/shared/ActionButton";
import ScrollToTop from "react-scroll-to-top";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid"; 
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

function Home({ setSelectedPage }: Props) {
  return <section
    id="home"
    className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
  >
    <motion.div 
      className='md:flex mx-auto w-3/5 items-center justify-center md:h-5/6'
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
    >
      <div className='z-10 mt-24 md:w-3/5'>
        <div className="relative"> 
          <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]">
            <motion.div
              className="md:-mt-20 pb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50},
                visible: { opacity: 1, x: 0},
              }}
            >
              <img src={HomePageMainText} alt="home-page-main-text" />
            </motion.div>
          </div>

          <motion.div
            className="before:absolute before:-top-20 before:-left-20 before:z-[-1]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50},
              visible: { opacity: 1, x: 0},
            }}
          >
            <p className='text-center text-xl pb-3'>Software Developer</p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center py-5 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50},
              visible: { opacity: 1, x: 0},
            }}
          >
            {/* <p className='text-center text-md py-3'>To put tech stack icons</p> */}
            
            <img
              className="w-12"
              alt="javascript logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
            />
            <img 
              className="w-12"
              alt="typescript logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"  
            />
            <img 
              className="w-16"
              alt="nodejs logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" 
            />
            {/* <img
              className="w-12"
              alt="python logo" 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" 
            /> */}
            <img
              className="w-14"
              alt="reactjs logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          
          </motion.div>

          <motion.div 
            className="flex items-center justify-center gap-4 py-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50},
              visible: { opacity: 1, x: 0},
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>Portfolio</ActionButton>
            <ActionButton setSelectedPage={setSelectedPage}>Contact</ActionButton>
          </motion.div>
        </div>

      </div>
      <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-center">
        <img src={HomePageMainImage} alt="home-main-image" />
      </div>
      <ScrollToTop smooth component={<ChevronDoubleUpIcon className="animate-pulse"/>} />
    </motion.div>
  </section>
}

export default Home;