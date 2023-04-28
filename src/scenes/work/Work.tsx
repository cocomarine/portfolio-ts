import ReactPlayer from "react-player/youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";

const childVariant = {
  hidden: { opacit: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1}
}

type Props = {
  title: string, 
  description: string,
  demo: string,
  github: string,
  extra?: string,
  setSelectedPage: (value: SelectedPage) => void;
}

const Work = ({ title, description, demo, github, extra, setSelectedPage }: Props) => {
  return (
    // container for a work
    <li className="w-full lg:w-1/2 lg:p-4 p-2">
      <motion.div 
        className="bg-white rounded-md shadow-md flex flex-col h-full"
        variants={childVariant}
      >
        <motion.div 
          className="h-0 relative overflow-hidden" 
          style={{ paddingTop: '56.25%' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50},
            visible: { opacity: 1, x: 0},
          }}
        >
          <ReactPlayer
            url={demo}
            width="100%"
            height="100%"
            className="absolute top-0 left-0"
          />
        </motion.div>
        <motion.div 
          className="flex-1 p-4 flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50},
            visible: { opacity: 1, x: 0},
          }}
        >
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <p className="leading-normal mb-4">{description}</p>

          <p className="flex gap-5">
            <p>
              <a
                className="hover:text-secondary-500 transition duration-500"
                href={github}
                target="_blank"
                rel="noreferrer"
              >                 
                <FontAwesomeIcon 
                  icon={faGithub}
                  className="h-5 w-5"
                />
                &nbsp;GitHub
                </a>
            </p>

            {extra && <p>
              <a
                className="hover:text-secondary-500 transition duration-500"
                href={extra}
                target="_blank"
                rel="noreferrer"
              >                 
                <FontAwesomeIcon 
                  icon={faYoutube}
                  className="h-5 w-5"
                />
                &nbsp;Presentation
                </a>
            </p>
            }
          </p>

        </motion.div>
      </motion.div>
    </li>
  )
}

export default Work;