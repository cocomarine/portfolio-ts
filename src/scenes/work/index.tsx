import { useState, useEffect, useRef } from "react";
import { WorkType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import Work from "./Work";
import { motion } from "framer-motion";

const works: Array<WorkType> = [
  {
    title: "work1",
    description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
  },
  {
    title: "work2",
    description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
  },
  {
    title: "work3",
    description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
  },
  {
    title: "work4",
    description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et."
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

function Works({ setSelectedPage }: Props) {
  return <section
    id="work"
    className="mx-auto min-h-full w-3/5 py-20"
  >
    <div className="md:my-5">
      <HText>Portfolio</HText>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Work)}
      >
        {/* map through works */}
        {/* <div className="mt-5 items-center justify-between gap-8 md:flex"> */}
        <div className="mt-5">
          {works.map((work: WorkType) => (
            <Work
              key={work.title}
              title={work.title}
              description={work.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </div>

  </section>
};

export default Works;