import { useState,useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Contact from './components/Contact';



const App = () => {
  const [selectedPage,setSelectedPage] = useState('Home');
  const [isTopOfPage,setIsTopOfPage] = useState(true);

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
    <div id='App' className='selection:text-white selection:bg-opaque-black'>
      <Header isTopOfPage = {isTopOfPage}/>
      <Home />
      <About/>
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;