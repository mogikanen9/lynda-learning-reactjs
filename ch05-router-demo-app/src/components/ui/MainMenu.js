import { Link } from 'react-router-dom'
import HomeIcon from 'react-icons/lib/fa/home'

export const MainMenu = () =>
        <nav className="menu">
            <Link to="/"><HomeIcon/></Link>
            <Link to="about">About</Link>
            <Link to="members">Members</Link>
        </nav>