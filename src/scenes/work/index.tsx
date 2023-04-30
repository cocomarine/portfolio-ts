import { WorkType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import Work from "./Work";
import { motion } from "framer-motion";

const works: Array<WorkType> = [
  {
    title: "huddleUp",
    description: "A meet-up planner web application created by using React, NodeJS, ExpressJS framework and PostgreSQL run in a docker container.",
    demo: "https://www.youtube.com/watch?v=Ccn77_NhKuw", 
    github: "https://github.com/cocomarine/huddle-up-frontend",
    extra: "https://www.youtube.com/watch?v=BYwcvPcPJn8",
  },
  {
    title: "Surreal Estate",
    description: "A property search engine app created using React with integration of MongoDB and Facebook login and tested using React Testing Library",
    demo: "https://youtu.be/kM8F9_hztGM",
    github: "https://github.com/cocomarine/surreal-estate",
  },
  {
    title: "Weather App",
    description: "A weather app created by using React and tested using React Testing Library.",
    demo: "https://www.youtube.com/watch?v=LXJBPxeLS2Q",
    github: "https://github.com/cocomarine/weather-app"
  },
  {
    title: "Portfolio",
    description: "My portfolio site created using React, TypeScript and TailwindCSS.",
    demo: "https://youtube.com/shorts/gd98Vz40DMo",
    github: "https://github.com/cocomarine/portfolio-ts"
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
              extra={work.extra}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </ul>
      </motion.div>
    </motion.div>

  </section>
};

export default Works;