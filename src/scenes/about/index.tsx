import { useState, useEffect, useRef } from "react";
import { SelectedPage } from "@/shared/types";
import { TechIcon, icons } from "@/shared/techIcons";
import { motion } from "framer-motion";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const About = ({setSelectedPage}: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {setIsVisible(entry.isIntersecting)}, 
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    // cleanup function
    return () => {
      if (pageRef.current) {
        observer.unobserve(pageRef.current);
      }
    };
  }, [pageRef]);

  return <section
      id="about"
      className="mx-auto min-h-full md:w-3/5 w-4/5 py-20"
    >
      <motion.div 
        className="md:my-5" ref={pageRef}
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      >
        <HText>About Me</HText>
        <div className="flex items-center">
          <p className="my-5 text-xl">Hi, I am HJ &nbsp;</p>
          <p className={`text-3xl rotate-12 ${isVisible ? 'animate-wave' : ''}`}>🤚</p>
        </div>
        <p className="text-md py-2">I am a former research scientist turned full-stack developer skilled in
        <span className="font-bold"> JavaScript, TypeScript, React, Node.js, and Python</span> and familiar with the core concepts 
        and tools of <span className="font-bold">DevOps</span>. 
        </p>
        <motion.div
          className="flex flex-wrap items-center justify-center py-5 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50},
            visible: { opacity: 1, x: 0},
          }}
        >
          
          {icons.map((icon: TechIcon) => (
            <img 
              className="md:w-12 w-8"
              alt={`${icon.name} logo`}
              src={icon.url}
              key={icon.name} 
            />
          ))}
        
        </motion.div>
        <p className="text-md py-2">I completed a comprehensive full-stack software engineering course at 
        <span className="font-bold"> CommandShift </span> and a DevOps course <span className="font-bold"> DevNet Skills </span>at The Open University/Cisco.
        I am excited to utilise and expand my skills to develop innovative solutions that can have far-reaching positive impacts.
        </p>
        {/* <p className="text-md py-2">As a proven <span className="font-bold"> team player </span> with years of experience in multidisciplinary research, 
        I am a <span className="font-bold"> logical thinker </span> and <span className="font-bold"> problem-solver </span> at heart, eager to pursue my passion for coding and technology with dedication and integrity.
        </p> */}
        <p className="text-md py-2">
        With years of experience in multidisciplinary research, I have proven myself as a<span className="font-bold"> team player with a logical and problem-solving mindset </span>. 
        Driven by a passion for coding and technology, I am excited to embark on a career in the field, bringing my <span className="font-bold"> integrity and dedication </span>to every project.
        </p>
      </motion.div>

  </section>
};

export default About;