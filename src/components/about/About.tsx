import { Line } from '../line/Line'
import { Tecnologys } from '../tecnologys/Tecnologys'
import { IntroductionAbout } from '../texts/IntroductionAbout'
import { IntroductionSelf } from '../texts/IntroductionSelf'
import './about.css'

export const About = () => {
    return (
        <section id="about" className="about-container">
            <IntroductionAbout />
            <section className='about-container-info'>
                <IntroductionSelf />
                <Tecnologys />
            </section>
            <Line />
        </section>
    )
}
