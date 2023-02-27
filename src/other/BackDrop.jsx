import { motion } from "framer-motion"

const BackDrop = ({children,onClick}) => {

  return (
    <motion.div
      className="md:absolute md:top-0 md:left-0 h-full w-full bg-gray-900/90 flex justify-center items-center"
      onClick={onClick}
      initial ={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
        {children}
    </motion.div>
  )
}

export default BackDrop