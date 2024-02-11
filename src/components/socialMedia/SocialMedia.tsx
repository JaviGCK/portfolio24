import { SocialMediaProps } from '../../types/socialMediaTypes'
import './socialMedia.css'


export const SocialMedia: React.FC<SocialMediaProps> = ({ data }) => {
    return (
        <aside className='container-socialMedia'>
            <ul className='ul-socialMedia'>
                {data.map(socialItem =>
                    <li key={socialItem.id} className='li-socialMedia'>
                        <a className='logo-link' href={socialItem.url} target="_blank" rel="noopener noreferrer" aria-label={socialItem.label}>
                            {socialItem.icon}
                        </a>
                    </li>

                )}
            </ul>
        </aside>
    )
}
