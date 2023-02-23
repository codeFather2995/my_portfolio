import { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

const Header = ({selectedPage,isTopOfPage,setIsTopOfPage}) => {

  const [isMenuToggled,setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const headerBackground = isTopOfPage ? '' : 'bg-opaque-black';



  return (
    <nav className={`${headerBackground} fixed w-full top-0 py-6 z-40`}>
        <div className='flex justify-between items-center mx-auto w-5/6'>
          <h4 className = 'font-playfair text-3xl font-bold'>SP</h4>
              {/* DESKTOP NAV */}

              {isAboveSmallScreens ? (
                <div className='flex justify-between gap-10 font-opensans text-sm font-semibold'>
                     
                </div>
              ): (
                <button className='rounded-full bg-red p-2'
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <img src="../images/menu-icon.svg" alt='menu-item' />
                </button>
              )}
        </div>
    </nav>
  )
}

export default Header