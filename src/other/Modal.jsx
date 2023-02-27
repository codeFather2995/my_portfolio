import { motion } from "framer-motion";
import BackDrop from "./BackDrop";
import Typical from 'react-typical'


const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
}

const Modal = ({handleClose,text}) => {


  return (
    <BackDrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className='mx-auto p-5 flex flex-col items-start bg-sky-900 w-full md:w-[600px] md:h-[500px] 
              rounded-md z-50'
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        > 
          <p className="font-opensans">
            <Typical
            loop={1}
            steps= {[
              text,
              5000
            ]}
             />
          </p>
          <button onClick={handleClose} 
            className='absolute bottom-[-35px] right-0 py-1 px-3 bg-opaque-black hover:bg-sky-900/50
             text-white transition duration-500'
            >
            Close
            </button>
        </motion.div>
    </BackDrop>
  )
}

export default Modal