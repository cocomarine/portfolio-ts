import ReactPlayer from "react-player/youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";

type Props = {
  title: string, 
  description: string,
  demo: string,
  github: string,
  setSelectedPage: (value: SelectedPage) => void;
}

const Work = ({ title, description, demo, github, setSelectedPage }: Props) => {
  return (
    // container for a work
      <li className="w-full md:w-1/2 md:p-4 p-2">
        <div className="bg-white rounded-md shadow-md flex flex-col h-full">
          <div className="h-0 relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
            <ReactPlayer
              url={demo}
              width="100%"
              height="100%"
              className="absolute top-0 left-0"
            />
          </div>
          <div className="flex-1 p-4 flex flex-col">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p className="leading-normal mb-4">{description}</p>
            <p>
              <a
                className="hover:text-primary-300 transition duration-500"
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
          </div>
        </div>
      </li>

    // <div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-8 text-center">
    //   <h4 className="font-bold text-lg pb-4">{title}</h4>
    //   <p className="my-3">{description}</p>
    //   <p>
    //     demo:
    //     <ReactPlayer url={demo[0]}/>
    //   </p>
      // <p>
      //   <a
      //     className="hover:opacity-50 transition duration-500"
      //     href={github[0]}
      //     target="_blank"
      //     rel="noreferrer"
      //   >
      //     github
      //   </a>
      // </p>

    // </div>
  )
}

export default Work;