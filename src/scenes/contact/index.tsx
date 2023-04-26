import { useForm } from "react-hook-form";
import { ContactType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin  } from "@fortawesome/free-brands-svg-icons";

// import ContactPageGraphic from "@/assets/ContactPageGraphic.png";
import HText from "@/shared/HText";
import Contacts from "./Contacts";

const contacts: Array<ContactType> = [
  {
    icon: <FontAwesomeIcon 
            icon={faLocationDot}
            className="h-6 w-6 pr-5"
          />,
    mode: "United Kingdom",
    link: "",
  },
  {
    icon: <FontAwesomeIcon 
            icon={faEnvelopeOpen}
            className="h-6 w-6 pr-5"
          />,
    mode: "hkang07@gmail.com",
    link: "mailto:hkang07@gmail.com",
  },
  {
    icon: <FontAwesomeIcon 
            icon={faLinkedin}
            className="h-6 w-6 pr-5"
          />,
    mode: "linkedin.com/in/hj-kang07",
    link: "https://www.linkedin.com/in/hj-kang07",
  },
  { 
    icon: <FontAwesomeIcon 
            icon={faGithub}
            className="h-6 w-6 pr-5"
          />,
    mode: "github.com/cocomarine",
    link: "https://github.com/cocomarine/",
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return <section id="contact" className="mx-auto md:w-3/5 w-4/5 pt-24 pb-32">
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
      {/* header */}
      <motion.div
        className="md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50},
          visible: { opacity: 1, x: 0},
        }}
      >
        <HText>
          <span className="text-primary-500">Get In Touch</span>
        </HText>
        <p className="my-4 text-lg">
          I am open for new opportunities.
        </p>
      </motion.div>

      {/* contacts and form */}
      <div className="mt-8 justify-between gap-8 md:flex">

        <motion.div
            className="relative mt-8 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {contacts.map((contact: ContactType) => (
              <Contacts
                key={contact.mode}
                icon={contact.icon}
                mode={contact.mode}
                link={contact.link}
              />
            ))}
        </motion.div>

        
        <motion.div
          className="mt-10 basis-3/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/9358a791ed50cd126fbb059711912f82" // change to anom email
            method="POST"
          >
            <input 
              className={inputStyles}
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-primary-500">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input 
              className={inputStyles}
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-primary-500">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className={inputStyles}
              rows={4}
              cols={50}
              placeholder="MESSAGE"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="mt-1 text-primary-500">
                {errors.message.type === "required" && "This field is required."}
                {errors.message.type === "maxLength" && "Max length is 2000 char."}
              </p>
            )}

            <button
              type="submit"
              className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
            >
              SUBMIT
            </button>

          </form>
        </motion.div>

        {/* <motion.div
          className="relative mt-16 basis-2/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {contacts.map((contact: ContactType) => (
            <Contacts
              key={contact.mode}
              icon={contact.icon}
              mode={contact.mode}
              link={contact.link}
            />
          ))}
        </motion.div> */}
      </div>
    </motion.div>
  </section>
}

export default Contact;