import Hero from './Hero'
import Features from './Features'
import About from './About'
import Getstarted from './Getstarted'
import Endlesspay from './Endlesspay'
import Apis from './Apis'
import OurReach from './OurReach'

const Homescreen = () => {
  return (
    <div>
        <Hero/>
        
        <Features/>
        <Endlesspay/>
        <Apis/>
        <OurReach/>
        <About/>
        <Getstarted/>
    </div>
  )
}

export default Homescreen