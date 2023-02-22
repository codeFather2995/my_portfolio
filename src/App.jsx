import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Works from './components/Works';
import Contact from './components/Contact';

const App = () => {
  return (
    <div id='App' className='container mx-auto p-2'>
      <Header />
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