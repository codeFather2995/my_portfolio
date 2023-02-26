import LineGradient from '../other/LineGradient'
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const Contact = () => {

  const {
    register,
    trigger,
    formState: {errors}
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if(!isValid) {
      e.preventDefault();
    }
  }

  return (
    <section id='Contact' className='py-48 bg-gradient-contact'>
      <motion.div
      className='flex justify-end w-full'
      initial = 'hidden'
      whileInView='visible'
      viewport={{once: true ,amount: 0.5}}
      transition={{duration:0.5}}
      variants = {{
        hidden: {opacity: 0 , x: -50},
        visible: {opacity: 1, x: 0},
      }}
      >
        <div>
            <p className='font-playfair font-semibold text-4xl  text-white'>
              <span className='text-dark-grey'>CONTACT ME</span> TO GET STARTED
            </p>
            <div className='flex md:justify-end my-5'>
              <LineGradient width='w-1/2 bg-dark-grey' />
            </div>
        </div>
      </motion.div>

      {/* FORM IMAGE */}
        <div className='md:flex md:justify-between gap-10 mt-5'>
          <motion.div
            className='basis-1/2 flex justify-center'
            initial = 'hidden'
            whileInView='visible'
            viewport={{once: true ,amount: 0.5}}
            transition={{duration:0.5}}
            variants = {{
              hidden: {opacity: 0 , y: -50},
              visible: {opacity: 1, y: 0},
            }}
          >
            <img src="images/contact-image.jpeg" alt="contact" />
          </motion.div>
          <motion.div
            className='basis-1/2 mt-10 md:mt-0'
            initial = 'hidden'
            whileInView='visible'
            viewport={{once: true ,amount: 0.5}}
            transition={{delay: 0.2,duration:0.5}}
            variants = {{
              hidden: {opacity: 0 , y: -50},
              visible: {opacity: 1, y: 0},
            }}
          >
            <form
              target='_blank'
              onSubmit={onSubmit}
              action="https://formsubmit.co/a6facae3e0cdc0c8a1db4a63674f7993"
              method='POST'
            >
                <input
                  className='w-[90%] bg-grey font-semibold placeholder-dark-grey p-3
                  focus:outline-none focus:ring focus:ring-violet-300 text-deep-blue'
                  type="text"
                  placeholder='NAME'
                  {...register("name", {
                    required:true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className='text-red-900 mt-1'>
                    {errors.name.type === 'required' && '*This field is required.'}
                    {errors.name.type === 'maxLength' && "Max length is 100 char."}
                  </p>
                )}

                <input
                  className='w-[90%] bg-grey font-semibold placeholder-dark-grey p-3 mt-5
                  focus:outline-none focus:ring focus:ring-violet-300 text-deep-blue'
                  type="text"
                  placeholder='EMAIL'
                  {...register("email", {
                    required:true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                  {errors.email && (
                  <p className='text-red-900 mt-1'>
                    {errors.email.type === 'required' && '*This field is required.'}
                    {errors.email.type === 'pattern' && "Invalid email address."}
                  </p>
                )}

                 <textarea
                  className='w-[90%] bg-grey font-semibold placeholder-dark-grey p-3 mt-5 
                      resize-none focus:outline-none focus:ring focus:ring-violet-300 text-deep-blue'
                  type="text"
                  placeholder='MESSAGE'
                  rows='4'
                  cols='50'
                  
                  {...register("message", {
                    required:true,
                    maxLength:2000
                  })}
                  />
                    {errors.email && (
                      <p className='text-red-900 mt-1 '>
                        {errors.message.type === 'required' && '*This field is required.'}
                        {errors.message.type === 'maxLength' && "*Maxlength is 2000 char."}
                      </p>
                    )}

                    <button
                    type='submit'
                    className='p-5 bg-dark-grey font-semibold text-white mt-5 hover:bg-grey
                        hover:text-dark-grey transition duration-500 border-[1px] border-inherit '
                    >
                      SEND ME A MESSAGE
                    </button>

            </form>
          </motion.div>
         </div>

    </section>
  )
}

export default Contact