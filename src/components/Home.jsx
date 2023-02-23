import React from 'react';
import Typical from 'react-typical';


const Home = () => {
  return (
    <div id='Home' className=' flex justify-center align-center bg-gradient-rainbow  gap-5'>
      
      <div>
        <img 
          src="images/me.png" 
          alt="profile"
          className=' rounded-full'
        />
      </div>

      <div className='mt-[200px]'>
          <h1 className=' text-5xl text-opaque-black font-bold'>Sargis Petrosyan</h1>
          <p className=' text-2xl mt-2 font-bold'>I'm {' '}
              <Typical
              loop={Infinity}
              wrapper='b'
              steps={[
                "developer",
                4000,
                "range rover",
                4000,
                "alagyaz",
                4000,
                "santimetr",
                4000,
              ]}
              />
          </p>
      </div>

    </div>
  )
}

export default Home