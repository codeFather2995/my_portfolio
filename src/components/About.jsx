import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import ButtonMotion from '../other/ButtonMotion';
import LineGradient from '../other/LineGradient';



const About = () => {

  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  

  return (
    <section id='About' className= 'relative bg-gradient-about pt-10 pb-24'>
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
          <p className='font-playfair font-semibold text-4xl mb-5 ml-5'>
            ABOUT <span className='text-dark-grey'>ME</span>
          </p>
            <LineGradient width='1/3 bg-white' />
          <p className="mt-10 mb-7 ml-5 font-playfair">
          "I'm a passionate and driven developer from Yerevan, Armenia, born on September 29th,
          1995. Over the past 5 months, I've dedicated myself to studying the art of programming,  
          and have already gained proficiency in HTML, CSS, JavaScript, React, Tailwind, Git, and 
          GitHub. I'm always eager to learn more, and am currently on my way to mastering 
          TypeScript, Redux, and other advanced web development technologies. My goal at this moment  
          to become a full-stack developer, and I'm excited to start exploring Node.js, MongoDB, and Express in the near future."
          </p>
        </motion.div>
        <div className='mt-16 md:mt-0'>
          {isAboveLarge ? (
            <div
            className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
            before:w-full before:h-full before:border-2 before:border-white before:z-[-1]'
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

      <div className='md:flex mt-4 '>

            {/* JOB */}

            <motion.div
            className='md:w-1/4 mt-10 md:ml-5'
            initial="hidden"
            whileInView='visible'
            viewport={{once:true,amount:0.5}}
            transition={{duration:0.5}}
            variants={{
              hidden:{opacity:0,y:50},
              visible:{opacity:1,y:0},
            }}
            >
              <div>
                  <p className='font-playfair font-semibold text-3xl mb-2'>
                    Job
                  </p>
              </div>
                  <ButtonMotion
                  text=" For the past 6 years, I've been managing construction projects with a keen eye for detail and a relentless pursuit of excellence. With almost 40 employees
                    under my guidance, I've developed a reputation as a skilled and respected leader in the industry.
                    From the moment I step on the job site, I work tirelessly to ensure that every aspect of the project is executed
                    with precision and care.I'm always the first to arrive and the last to leave, leading by example and motivating my team to deliver their best work.
                    Over the years, I've faced numerous challenges and setbacks, but I've never let them slow me down. Instead, I've approached each 
                    obstacle as an opportunity to learn and grow. Through my experience, I've developed a deep understanding of the construction process 
                    and a knack for anticipating potential issues before they arise.
                    Through my leadership, I've been able to inspire my team to consistently exceed expectations and deliver projects on time, under budget,
                    and with exceptional quality. Whether it's a small renovation or a large-scale development, I approach each project with the same level of 
                    dedication and attention to detail."/>
            </motion.div>

            {/* WAR */}

            <motion.div
            className='md:w-1/4 mt-10'
            initial= 'hidden'
            whileInView='visible'
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.2,duration:0.5}}
            variants={{
              hidden:{opacity:0,y:50},
              visible:{opacity:1,y:0},
            }}
            >
              <div>
                  <p className='font-playfair font-semibold text-3xl mb-2'>                  
                    War
                  </p>
              </div>
              <ButtonMotion 
                text="Going to war in 2020 was an experience that I will never forget. It taught me so much about life, about how precious it is, and about how every day is a gift.
                Through the horrors of war, I learned that life is a precious thing that should never be taken for granted. The things that we sometimes 
                take for granted, like a warm bed, a good meal, or a simple conversation with a friend or loved one, became things that I cherished deeply.
                Being in war also taught me about the beauty of life. Amidst the destruction and chaos, I saw acts of bravery, kindness, and selflessness
                that inspired me and gave me hope for the future. I learned to appreciate the little things in life, like a beautiful sunset or a smile from a
                stranger, and found joy in the simple moments that make life so special.
                I'm grateful for the lessons that I learned in war, and I carry those lessons with me every day. I'm thankful for the gift of life, and I try 
                to live each day to the fullest, cherishing every moment and embracing every opportunity to learn and grow.
                Life is beautiful, and I'm grateful for every day that I get to experience it."/>
             </motion.div>

            {/* PROGRAMMING */}

            <motion.div
            className='md:w-1/4 mt-10'
            initial="hidden"
            whileInView='visible'
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.4,duration:0.5}}
            variants={{
              hidden:{opacity:0,y:50},
              visible:{opacity:1,y:0},
            }}
            >
              <div>
                  <p className='font-playfair font-semibold text-3xl mb-2'>
                    Programming
                  </p>
              </div>
                <ButtonMotion 
                  text="After my experience in war, I realized that I wanted to do something more, something that would 
                  allow me to not only build physical objects but also make a difference in the world. That's when I
                  decided to pursue a career in the IT industry.
                  For me, the IT industry represents an incredible opportunity to change the world for the better.
                  It's a field that's constantly evolving, and there's always something new to learn, to create, 
                  and to innovate.As I embark on this new journey, I'm excited to use my skills and experience to build something 
                  meaningful and impactful. Whether it's developing software that makes people's lives easier, creating technology 
                  that helps protect the environment, or building platforms that promote social change, I want to make a difference 
                  in the world through the power of technology.I'm grateful for the lessons that I learned in war, and I'm using those
                  lessons to fuel my passion for making a positive impact in the world. With each day that passes, I'm more motivated than 
                  ever to use my skills and expertise to create something truly extraordinary.The IT industry represents a world of endless
                  possibilities, and I'm excited to be a part of it. With hard work, dedication, and a commitment to excellence, I know that 
                  I can make a difference and change the world for the better."/>
              </motion.div>

            {/* EDUCATION */}

            <motion.div
            className='md:w-1/4 mt-10'
            initial="hidden"
            whileInView='visible'
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.6,duration:0.5}}
            variants={{
              hidden:{opacity:0,y:50},
              visible:{opacity:1,y:0},
            }}
            >
              <div>
                  <p className='font-playfair font-semibold text-3xl mb-2'>
                    Education
                  </p>
              </div>
                <ButtonMotion
                  text="I studied at the Armenian State University of Economics in Yerevan, Armenia, hoping to graduate 
                  with a degree in Marketing. However, I soon realized that it wasn't the right profession for me, even 
                  though I excelled in it. I wasn't happy with the teaching methods, and it felt like I wasn't learning 
                  the things that mattered the most.So, I decided to take a break from it and explore other fields. Currently, 
                  I'm teaching myself how to become a JavaScript developer, and I'm really enjoying it. It's challenging and 
                  rewarding, and every day I learn something new, which is very exciting.Who knows, maybe in the future, I'll pursue
                  a degree in computer science or another related field,the possibilities are endless. I love the feeling of learning and growing, and I'm excited 
                  to see where this journey takes me."/>
              </motion.div>
      </div>
    </section>
  )
}

export default About