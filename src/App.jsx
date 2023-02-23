import { useState,useEffect } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Works from './components/Works';
import Contact from './components/Contact';

const App = () => {
  const [selectedPage,setSelectedPage] = useState('Home');
  const [isTopOfPage,setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {

    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage('Home');
      }
      if(window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);


  return (
    <div id='App' >
      <Header
        isTopOfPage = {isTopOfPage}
        setIsTopOfPage = {setIsTopOfPage} 
      />
      <Home />
      <About />
      <Works />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;