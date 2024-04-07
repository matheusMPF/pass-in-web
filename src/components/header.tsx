import nlwUniteIcon from '../assets/nlw-unite-icon.svg';
import { NavLink } from './navLink';

export function Header() {
    return (
        <div className='flex items-center gap-5 py-2 px-8'>
            
            <img src={nlwUniteIcon} alt="Logo" />

            <nav className='flex gap-5'>

                <NavLink href="/eventos">Eventos</NavLink>
                <NavLink href="/participantes">Participantes</NavLink>

            </nav>

        </div>
    )
}