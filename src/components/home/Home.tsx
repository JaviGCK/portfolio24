import './home.css'
import { SocialMedia } from '../socialMedia/SocialMedia'
import { socialMediaData } from '../socialMedia/socialMedia.data'
import { IntroductionHome } from '../texts/IntroductionHome'
import { Line } from '../line/Line'

export const Home = () => {
    return (
        <section id='home' className='home-container'>
            <IntroductionHome />
            <SocialMedia data={socialMediaData} />
            <Line />
        </section>
    )
}
