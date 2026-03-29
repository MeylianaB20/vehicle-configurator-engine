import LogoIcon from '../assets/images/icons/Logo.svg'
import GitHubIcon from '../assets/images/icons/GitHub.svg'

function Header({ children }) {
    return (
        <div id='header'>
            <div></div>
            <h1>
                <LogoIcon className='icon' />
                <strong>Hiro Builder</strong>
            </h1>
            <div></div>
        </div>
    )
}

export default Header
