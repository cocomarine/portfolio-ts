import { motion } from "framer-motion";

type Props = {
  icon: JSX.Element,
  mode: string,
  link: string,
}

const Contacts = ({ icon, mode, link }: Props) => {
  return <motion.div
    className="basis-2/5 md:mt-0 mt-2"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
    >
    <div className="flex flex-col">
      <a 
        className="flex md:my-5 hover:text-primary-300"
        href={link}
      >
        {icon} {" "} {mode}
      </a>
    </div>
  </motion.div>
}

export default Contacts;