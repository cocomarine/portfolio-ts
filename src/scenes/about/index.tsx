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
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
      >
        <HText>About Me</HText>
        <div className="flex items-center">
          <p className="my-5 text-xl">Hi, I am HJ &nbsp;</p>
          <p className={`text-3xl rotate-12 ${isVisible ? 'animate-wave' : ''}`}>🤚</p>
        </div>
        <p className="text-md py-2">As a skilled software developer, I have extensive experience working with 
        JavaScript, TypeScript, React, Node.js, and Python. Additionally, I am well-versed in the core concepts 
        and tools of DevOps. 
        </p>
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
          
          {icons.map((icon: TechIcon) => (
            <img 
              className="w-12"
              alt={`${icon.name} logo`}
              src={icon.url}
              key={icon.name} 
            />
          ))}
        
        </motion.div>
        <p className="text-md py-2">Throughout my years of working in scientific research, I have demonstrated 
        a commitment to teamwork, dedication, and integrity, consistently delivering high-quality outcomes.
        </p>
        <p className="text-md py-2">
        I thrive on logical thinking and problem-solving, and am excited to pursue my passion for coding and technology in new and exciting ways.
        </p>
      </motion.div>

  </section>
};

export default About;