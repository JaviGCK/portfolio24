import { Cards } from '../card/Cards'
import { IntroductionProyects } from '../texts/IntroductionProyects'
import './proyects.css'

export const Proyects = () => {
    return (
        <section id='proyects' className='proyects-container'>
            <IntroductionProyects />
            <Cards />
        </section>
    )
}
