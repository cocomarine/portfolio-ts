import { useState, useEffect } from "react";
import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const About = ({selectedPage, setSelectedPage}: Props) => {
  const [isAboutPage, setIsAboutPage] = useState<boolean>(false);
  console.log(SelectedPage)

  useEffect(() => {
    setIsAboutPage(true);
  }, [SelectedPage])

  return <section
      id="about"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <div className="md:my-5 md:w-3/5">
        <HText>About Me</HText>
        <div className="flex items-center">
          <p className="my-5 text-xl">Hi, I am HJ &nbsp;</p>
          <p className={`text-3xl ${isAboutPage ? 'animate-wave' : ''}`}>✋</p>
          {/* <p className="animate-wave text-3xl">✋</p> */}
        </div>
        <p className="text-md">I am a software developer skilled in JavaScript, TypeScript, 
        React, Node.js and Python and familiar with network fundamentals 
        and core concepts and tools of DevOps.
        </p>
      </div>

  </section>
};

export default About;