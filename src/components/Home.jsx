import React from 'react';
import Typical from 'react-typical';


const Home = () => {
  return (
    <div id='Home' className=' flex justify-center align-center h-full w-full bg-gradient-rainbow rounded-md gap-5'>
      
      <div>
        <img 
          src="images/me.png" 
          alt="profile"
          className=' rounded-full'
        />
      </div>

      <div className='mt-[200px]'>
          <h1 className=' text-5xl text-white'>Sargis Petrosyan</h1>
          <p className=' text-2xl mt-2'>I'm {' '}
              <Typical
              loop={Infinity}
              wrapper='b'
              steps={[
                "developer",
                2500,
                "range rover",
                2500,
                "alagyaz",
                2500,
                "santimetr",
                2500,
              ]}
              />
          </p>
      </div>

    </div>
  )
}

export default Home