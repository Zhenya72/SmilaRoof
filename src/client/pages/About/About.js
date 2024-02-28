import IntroductionSection from './IntroductionSection'
import AboutValuesSection from './AboutValuesSection'
import ServicesSection from './ServicesSection'
import './About.scss'
function About() {
    return (
      <div className='conteiner'>        
        <h2 className="title">Про нас</h2>
        <IntroductionSection/>
        <AboutValuesSection/>
        <ServicesSection/>
      </div>
  );
}

export default About;