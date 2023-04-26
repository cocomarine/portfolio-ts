import { useState, useEffect, useRef } from "react";
import { WorkType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import Work from "./Work";
import { motion } from "framer-motion";

const works: Array<WorkType> = [
  {
    title: "huddleUp",
    description: "A meet-up planner web application created by using React, NodeJS, ExpressJS framework and PostgreSQL run in a docker container.",
    demo: "https://www.youtube.com/watch?v=Ccn77_NhKuw", 
    // "https://www.youtube.com/watch?v=BYwcvPcPJn8",
    github: "https://github.com/cocomarine/huddle-up-frontend",
  },
  {
    title: "work2",
    description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    demo: "",
    github: "",
  },
  {
    title: "work3",
    description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    demo: "",
    github: ""
  },
  {
    title: "work4",
    description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    demo: "",
    github: ""
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

function Works({ setSelectedPage }: Props) {
  return <section
    id="work"
    className="mx-auto min-h-full md:w-3/5 w-4/5 py-20"
  >
    <motion.div 
      className="md:my-5"
      onViewportEnter={() => setSelectedPage(SelectedPage.Work)}
    >
      <HText>Portfolio</HText>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
      >
        {/* map through works */}
        <ul className="flex flex-wrap list-none mt-5 p-0">
          {works.map((work: WorkType) => (
            <Work
              key={work.title}
              title={work.title}
              description={work.description}
              demo={work.demo}
              github={work.github}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </ul>
      </motion.div>
    </motion.div>

  </section>
};

export default Works;