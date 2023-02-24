import { motion } from "framer-motion";
import LineGradient from '../LineGradient';

const Testimonials = () => {
  return (
    <section id="Testimonials" className="pt-32 pb-16 bg-gradient-testimonials">

      {/* HEADING */}

      <motion.div
      className="md:w-1/3 text-center md:text-left"
      initial="hidden"
      whileInView='visible'
      viewport={{once:true,amount:0.5}}
      transition={{duration:0.5}}
      variants ={{
        hidden: {opacity: 0,x: -50},
        visible: {opacity: 1,x: 0},
      }}
      >
        <p className="font-playfair font-semibold text-4xl mb-8 text-dark-grey">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5 bg-gradient-testimonials mb-20" />
      </motion.div>

        {/* TESTIMONIALS */}

        <div className="md:flex md:justify-between gap-8">
          <motion.div
            className="mx-auto relative bg-opaque-black max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 "
            initial="hidden"
            whileInView="visible"
            viewport={{once:true ,amount:0.5}}
            transition={{duration:0.6}}
            variants={{
              hidden: {opacity: 0,scale: 0.8},
              visible: {opacity: 1,scale: 1},
            }}
          > 
            <img src="./images/grno.png" alt="" className="rounded-full"/>
            <p className="font-playfair text-6xl">``</p>
            <p className="text-center text-xl">
            As my first teacher, you instilled in me the magic of learning. Thank you for guiding me on my journey, always.
            </p>
          </motion.div>
          <motion.div
            className="mx-auto relative bg-opaque-black max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true ,amount:0.5}}
            transition={{delay:0.2,duration:0.6}}
            variants={{
              hidden: {opacity: 0,scale: 0.8},
              visible: {opacity: 1,scale: 1},
            }}
          >
            <img src="./images/elencho.png" alt="" className="rounded-full"/>
            <p className="font-playfair text-6xl">``</p>
            <p className="text-center text-xl">
            Let me tell you, you are without a doubt the greatest programmer I have ever met. Your skills are simply out of this world.
            </p>
          </motion.div>
          <motion.div
            className="mx-auto relative bg-opaque-black max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true ,amount:0.5}}
            transition={{delay:0.4,duration:0.6}}
            variants={{
              hidden: {opacity: 0,scale: 0.8},
              visible: {opacity: 1,scale: 1},
            }}
          >
             <img src="./images/kimik.png" alt="" className="rounded-full"/>
            <p className="font-playfair text-6xl">``</p>
            <p className="text-center text-xl">
            Who is this guy? I don't know him.
            </p>
          </motion.div>
        </div>

    </section>
  )
}

export default Testimonials