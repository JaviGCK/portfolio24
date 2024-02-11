import './home.css'
import { SocialMedia } from '../socialMedia/SocialMedia'
import { socialMediaData } from '../socialMedia/socialMedia.data'
import { Introduction } from '../texts/Introduction'

export const Home = () => {
    return (
        <section id='home' className='home-container'>
            <Introduction />
            <SocialMedia data={socialMediaData} />
        </section>
    )
}
