import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import SocialMediaIcons from '../other/SocialMediaIcons';



const Home = () => {
  const isAboveLarge = useMediaQuery("(min-width:1060px)");

  return (
    <section id='Home' className='md:flex md:justify-between md:items-center gap-16 md:h-full py-10 bg-gradient-rainbow' >

      {/* IMAGE SECTION */}

      <div className=' basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2'>
          {isAboveLarge ? (
            <div className=' relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-peach before:z-[-1] '
            >
              <img 
              src ="https://scontent.fevn6-3.fna.fbcdn.net/v/t39.30808-6/334389817_602478811929437_377737103592409594_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=8eTKdrm0vhIAX8BwU_k&_nc_ht=scontent.fevn6-3.fna&oh=00_AfB_CgaieTANWyrRDbTRSc9KV11UWnGHw7cqpzQm5Iy2OQ&oe=6410D4F9" 
              alt="profile-img"
              className='w-full max-w-[400px] md:max-w-[500px] rounded-t-[400px]'
              />
            </div>
          ):(
            <img 
            src ="https://scontent.fevn6-3.fna.fbcdn.net/v/t39.30808-6/334389817_602478811929437_377737103592409594_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=8eTKdrm0vhIAX8BwU_k&_nc_ht=scontent.fevn6-3.fna&oh=00_AfB_CgaieTANWyrRDbTRSc9KV11UWnGHw7cqpzQm5Iy2OQ&oe=6410D4F9" 
            alt="profile-img"
            className='w-full max-w-[500px] md:max-w-[500px] rounded-t-[400px]'
            />
          )}
      </div>
      

      {/* MAIN TEXT */}

      <div className=' z-30 basis-2/5 mt-12 md:mt-32'>

            {/* NAME-SURNAME */}

            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{once:true,amount:0.5}}
              transition={{duration:0.5}}
              variants={{
                hidden:{opacity:0,x:-50},
                visible:{opacity:1,x:0},
              }}            
            >
              <h1 className='text-5xl font-playfair z-10 text-center text-white font-bold '>
                Sargis {' '}
                <p className=' text-5xl font-playfair z-20 text-opaque-black'>
                  Petrosyan
                </p>
              </h1>
              <p className='mt-10 mb-7 text-center text-opaque-black font-playfair text-2xl'>
                I'm a 
                <p>Frontend Developer</p>
              </p>
            </motion.div>

            {/* BUTTONS */}

            <motion.div
            className='flex mt-5 justify-center text-center'
            initial='hidden'
            whileInView='visible'
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.2,duration:0.5}}
            variants={{
              hidden:{opacity:0,x:-50},
              visible:{opacity:1,x:0},
            }}
            >
                <Link to='Contact' spy={true} smooth={true} offset={50} duration={1000}
                  className='bg-opaque-black text-deep-blue rounded-sm py-2 px-7 font-semibold
                    hover:bg-white hover:text-opaque-black transition duration-500 font-playfair cursor-pointer'
                >
                Contact Me
                </Link>
                <Link to='Contact' spy={true} smooth={true} offset={50} duration={1000}
                  className="rounded-sm bg-dark-grey py-0.5 pr-0.5"
                  href="#contact"
                >
                  <div className="bg-gradient-rainbow transition duration-500 hover:text-white w-full h-full flex items-center justify-center
                     px-10 font-playfair text-dark-grey">
                    Let's talk.
                  </div>
                </Link>
            </motion.div>

            {/* SOCIAL MEDIA */}

            <motion.div
              className="flex mt-5 justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
            >
               <SocialMediaIcons />
            </motion.div>
      </div>

    </section>
  )
}

export default Home