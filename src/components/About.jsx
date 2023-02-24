import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';

const About = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section id='About' className=' bg-gradient-about pt-10 pb-24'>
      <div className='md:flex md:justify-between md:gap-16 mt-32 '>
        <motion.div
        className='md:w-1/3'
        initial='hidden'
        whileInView='visible'
        viewport={{once:true,amount:0.5}}
        transition={{duration:0.5}}
        variants={{
          hidden:{opacity:0,x:-50},
          visible:{opacity:1,x:0}
        }}
        >
          <p className='font-playfair font-semibold text-4xl mb-5'>
            ABOUT <span className='text-dark-grey'>ME</span>
          </p>
          <p className="mt-10 mb-7">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p>
        </motion.div>
        <div className='mt-16 md:mt-0'>
          {isAboveLarge ? (
            <div
            className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
            before:w-full before:h-full before:border-2 before:border-coral before:z-[-1]'
            >
              <img
               className='z-10'
               src="images/skills-image.png"
               alt="about" />
            </div>
          ):(
            <img
               className='z-10'
               src="images/skills-image.png"
               alt="about" />
          )}
        </div>
      </div>

      {/* STORIES */}

      <div className='md:flex md:justify-center mt-16 gap-32'>

            {/* JOB */}

            <motion.div
            className='md:w-1/3 mt-10'
            initial="hidden"
            whileInView='visible'
            viewport={{once:true,amount:0.5}}
            transition={{duration:0.5}}
            variants={{
              hidden:{opacity:0,y:50},
              visible:{opacity:1,y:0},
            }}
            >
              <div className='relative h-32'>
                <div className='z-10'>
                  <p className='font-playfair font-semibold text-5xl'>01</p>
                  <p className='font-playfair font-semibold text-3xl mt-3'>
                    Constructor
                  </p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-pink absolute right-0 top-0 z-[-1]" />
              </div>
              <p className="mt-5">
                A auctor pharetra hendrerit mattis amet etiam interdum platea. Est
                morbi porttitor scelerisque fermentum, sagittis non egestas. Amet
                odio sit sagittis,
              </p>
            </motion.div>

            {/* WAR */}

            <motion.div
            className='md:w-1/3 mt-10'
            initial="hidden"
            whileInView='visible'
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.2,duration:0.5}}
            variants={{
              hidden:{opacity:0,y:50},
              visible:{opacity:1,y:0},
            }}
            >
              <div className='relative h-32'>
                <div className='z-10'>
                  <p className='font-playfair font-semibold text-5xl'>01</p>
                  <p className='font-playfair font-semibold text-3xl mt-3'>
                    Constructor
                  </p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-pink absolute right-0 top-0 z-[-1]" />
              </div>
              <p className="mt-5">
                A auctor pharetra hendrerit mattis amet etiam interdum platea. Est
                morbi porttitor scelerisque fermentum, sagittis non egestas. Amet
                odio sit sagittis,
              </p>
            </motion.div>

            {/* PROGRAMMING */}

            <motion.div
            className='md:w-1/3 mt-10'
            initial="hidden"
            whileInView='visible'
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.4,duration:0.5}}
            variants={{
              hidden:{opacity:0,y:50},
              visible:{opacity:1,y:0},
            }}
            >
              <div className='relative h-32'>
                <div className='z-10'>
                  <p className='font-playfair font-semibold text-5xl'>01</p>
                  <p className='font-playfair font-semibold text-3xl mt-3'>
                    Constructor
                  </p>
                </div>
                <div className="w-1/2 md:w-3/4 h-32 bg-pink absolute right-0 top-0 z-[-1]" />
              </div>
              <p className="mt-5">
                A auctor pharetra hendrerit mattis amet etiam interdum platea. Est
                morbi porttitor scelerisque fermentum, sagittis non egestas. Amet
                odio sit sagittis,
              </p>
            </motion.div>

      </div>

    </section>
  )
}

export default About