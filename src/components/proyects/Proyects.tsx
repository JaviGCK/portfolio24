import { CardsComponent } from '../card/Cards'
import { Line } from '../line/Line'
import { IntroductionProyects } from '../texts/IntroductionProyects'
import './proyects.css'

export const Proyects = () => {
    return (
        <section id='proyects' className='proyects-container'>
            <IntroductionProyects />
            <CardsComponent />
            <Line />
        </section>
    )
}
