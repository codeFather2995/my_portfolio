import { motion } from "framer-motion"
import LineGradient from "../LineGradient";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-dark-grey`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div>
      <img src={`./images/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="Projects" className="pt-48 pb-48 bg-gradient-rainbow1">

      {/* HEADINGS */}
      <motion.div
      className="md:w-2/5 mx-auto text-center"
      initial='hidden'
      whileInView='visible'
      viewport={{once: true,amount: 0.5}}
      transition={{
        hidden:{opacity: 0,y: -50},
        visible:{opacity: 1,y: 0},
      }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
              <span className="text-coral">PRO</span>
          </p>
          <div className="flex justify-center mt-5">
              <LineGradient width="w-2/3" />
          </div>
          <p className="mt-10 mb-10 text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, autem?
          </p>
        </div>
      </motion.div>

      {/* PROJECTS */}

        <div className="flex justify-center">
          <motion.div
            className="sm:grid sm:grid-cols-3"
            variants={container}
            initial='hidden'
            whileInView='visible'
            viewport={{once: true,amount: 0.5}}
          > 

            {/* ROW 1*/}

            <div
            className="flex justify-center text-center items-center p-10 bg-coral
            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
            >
              BEAUTIFUL USER INTERFACES
            </div>
            <Project title='Project 1' />
            <Project title='Project 2' />

            {/* ROW 2 */}

            <Project title='Project 3' />
            <Project title='Project 4' />
            <Project title='Project 5' />

            {/* ROW 3 */}

            <Project title='Project 6' />
            <Project title='Project 7' />
            <div
            className="flex justify-center text-center items-center p-10 bg-yellow
            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
            >
              SMOOTH USER EXPERIENCE
            </div>
          </motion.div>
        </div>
    </section>
  );
};

export default Projects;