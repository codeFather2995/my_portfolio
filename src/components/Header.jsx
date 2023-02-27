import { useState } from 'react';
import {Link} from 'react-scroll';
import useMediaQuery from '../hooks/useMediaQuery';


const Header = ({isTopOfPage}) => {

  const [isMenuToggled,setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const headerBackground = isTopOfPage ? '' : 'bg-opaque-black';

  return (
    <nav className={`${headerBackground} fixed w-full top-0 py-6 z-40`}>
        <div className='flex justify-between items-center mx-auto w-5/6'>
          <Link to="Home" spy={true} smooth={true} offset={0} duration={1000} >
              <h4 className = 'font-playfair text-3xl hover:text-dark-grey cursor-pointer transition duration-1000'>
                S
                <span className='text-dark-grey cursor-pointer font-bold transition duration-1000 hover:text-white'>
                  P
                </span>
              </h4>
          </Link>

              {/* DESKTOP NAV */}

              {isAboveSmallScreens ? (
                <div className='flex justify-between gap-10 font-opensans text-sm font-semibold'>
                     <Link to="Home" spy={true} smooth={true} offset={0} duration={1000}
                     className='hover:border-t-2 border-peach transition duration-1000 cursor-pointer'>
                      Home</Link>
                     <Link to="About" spy={true} smooth={true} offset={50} duration={1000} 
                      className='hover:border-t-2 border-peach transition duration-1000 cursor-pointer'>
                      About</Link>
                     <Link to="Projects" spy={true} smooth={true} offset={50} duration={1000} 
                      className='hover:border-t-2 border-peach transition duration-1000 cursor-pointer'>
                      Projects</Link>
                     <Link to="Testimonials" spy={true} smooth={true} offset={50} duration={1000}
                      className='hover:border-t-2 border-peach transition duration-1000 cursor-pointer'>
                      Testimonials</Link>
                     <Link to="Contact" spy={true} smooth={true} offset={50} duration={1000}
                      className='hover:border-t-2 border-peach transition duration-1000 cursor-pointer'>
                      Contact</Link>
                </div>
              ): (
                <button className='rounded-full p-2'
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <img src="../images/menu-icon.svg" alt='menu-item' />
                </button>
              )}

              {/* MOBILE-MENU */}
              
              {!isAboveSmallScreens && isMenuToggled && (
                  <div className='fixed right-0 bottom-0 bg-gradient-rainbow h-full w-[250px] font-opensans'>

                      {/* CLOSE ICON */}

                      <div className='flex justify-end p-12'>
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <img src="../images/close-icon.svg" alt="Close Icon" />
                        </button>
                      </div>

                      {/* MENU ITEM */}
                      <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
                          <Link to="Home" spy={true} smooth={true} offset={0} duration={1000}>Home</Link>
                          <Link to="About" spy={true} smooth={true} offset={50} duration={1000}>About</Link>
                          <Link to="Projects" spy={true} smooth={true} offset={50} duration={1000}>Projects</Link>
                          <Link to="Testimonials" spy={true} smooth={true} offset={50} duration={1000}>Testimonials</Link>
                          <Link to="Contact" spy={true} smooth={true} offset={50} duration={1000}>Contact</Link>
                      </div>

                  </div>
              )}

        </div>
    </nav>
  )
}

export default Header