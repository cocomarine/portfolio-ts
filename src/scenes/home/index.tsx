import { SelectedPage } from "@/shared/types";
import HomePageMainImage from "@/assets/MainImageFace.png";
import HomePageMainText from "@/assets/logo_lg.png";
import { TechIcon, icons, iconsForHome } from "@/shared/techIcons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ScrollToTop from "react-scroll-to-top";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid"; 
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

function Home({ setSelectedPage }: Props) {
  const filteredIcons = icons.filter(icon => iconsForHome.includes(icon.name));

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
              // className="md:-mt-20 pb-5"
              className="flex justify-center pb-5"
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
            {filteredIcons.map((icon: TechIcon) => (
              <img 
                className="md:w-12 w-10"
                alt={`${icon.name} logo`}
                src={icon.url}
                key={icon.name} 
              />
            ))}
          
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
            <AnchorLink
              className="rounded-md bg-primary-100 px-6 py-2 text-sm md:px-8 md:text-base hover:bg-primary-300 hover:text-white"
              onClick={() => setSelectedPage(SelectedPage.Work)}
              href="#work"
            >
              Portfolio
            </AnchorLink>
            <AnchorLink
              className="rounded-md bg-primary-100 px-2 py-2 text-sm md:px-4 md:text-base hover:bg-primary-300 hover:text-white"
              onClick={() => setSelectedPage(SelectedPage.Contact)}
              href="#contact"
            >
              <button>Contact Me</button>
            </AnchorLink>
          </motion.div>
        </div>

      </div>
      <div className="flex basis-4/5 justify-center mt-5 md:z-10 md:ml-40 md:mt-16">
        <img src={HomePageMainImage} alt="home-main-image" />
      </div>
      <ScrollToTop smooth component={<ChevronDoubleUpIcon className="animate-pulse"/>} />
    </motion.div>
  </section>
}

export default Home;