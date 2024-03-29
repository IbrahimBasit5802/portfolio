import { BrowserRouter } from 'react-router-dom';
// hi
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
// test
const App = () => {
  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            
            <Navbar/>
            <Hero/>
          
          </div>
          <About/>
            <Experience></Experience>
           
            <Works></Works>
            <Feedbacks></Feedbacks>

          <div className='relative z-0'>
            
          <Contact />
          <StarsCanvas />
        </div>
        </div>
      </BrowserRouter>
  )
}

export default App
