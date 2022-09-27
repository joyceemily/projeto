import "./Menu.css";
import {Link} from "react-router-dom"
export const Menu = () => {
    return (
        <>
            <header>
                <h1 className='Logo'>THE NEIGHBOURHOOD</h1>
                <nav className='menu'>
                    <ul>
                        <li><Link to='/Sobre'>Home</Link></li>
                        <li> <Link to='/'>Músicas</Link> </li>
                        <li><Link to='/Contatos'>Patrocinar</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

