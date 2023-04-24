import { useState, useEffect, useRef } from "react";
import { SelectedPage } from "@/shared/types";
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
      // className="mx-auto min-h-full w-3/5 py-20"
      className="mx-auto w-3/5 py-20"
    >
      <div className="md:my-5" ref={pageRef}>
        <HText>About Me</HText>
        <div className="flex items-center">
          <p className="my-5 text-xl">Hi, I am HJ &nbsp;</p>
          <p className={`text-3xl rotate-12 ${isVisible ? 'animate-wave' : ''}`}>🤚</p>
        </div>
        <p className="text-md py-2">I am a software developer skilled in JavaScript, TypeScript, 
        React, Node.js and Python and familiar with core concepts and tools of DevOps.
        </p>
        <p>Tech stacks: XXXXXXXXXX</p>
        <p className="text-md py-2">Proven team player with dedication and integrity evidenced by 
        years of experience working on scientific research and producing high-quality outcomes. 
        </p>
        <p className="text-md py-2">
        Logical thinker and problem-solver at heart, seeking to pursue new-found passion for coding and technology.
        </p>
      </div>

  </section>
};

export default About;