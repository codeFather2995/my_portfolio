import { motion } from "framer-motion"
import LineGradient from "../other/LineGradient";

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
          Soon
        </p>
      </div>
      <img src={`./images/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="Projects" className="pt-48 pb-48 bg-gradient-projects">

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
              <span className="text-coral">
                COL<span className="text-blue">ORS</span></span>
          </p>
          <div className="flex justify-center mt-5">
              <LineGradient width="w-2/3 bg-coral"/>
          </div>
          <p className="mt-10 mb-10 text-white text-xl font-opensans ">
              "I apologize that I am currently unable to showcase my projects, as they are not yet ready for 
            public viewing. I do not wish to display simple projects like to-do lists. However, I am actively 
            working on my projects and plan to share them here and on my GitHub account as soon as they are ready 
            for public access."
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
            viewport={{once: true,amount: 0.2}}
          > 

            {/* ROW 1*/}

            <div
            className="flex justify-center text-center items-center p-10 bg-yellow
            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold text-dark-grey"
            >
              BEAUTIFUL USER INTERFACES
            </div>
            <Project title='Project 1' />
            <Project title='Project 2' />

            {/* ROW 2 */}

            {/* <Project title='Project' />
            <Project title='Project' />
            <Project title='Project' /> */}

            {/* ROW 3 */}

            <Project title='Project 3' />
            <Project title='Project 4' />
            <div
            className="flex justify-center text-center items-center p-10 bg-pink
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