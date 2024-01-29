import { Logo } from '../logo/Logo'
import { Navbar } from '../navbar/Navbar'
import './header.css'

export const Header = () => {
    return (
        <header className='header-container'>
            <Logo />
            <Navbar />
        </header>
    )
}
