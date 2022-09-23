import "./Menu.css";
import {Link} from "react-router-dom"
export const Menu = () => {
    return (
        <>
            <header>
                <h1 className='Logo'>THE NEIGHBOURHOOD</h1>
                <nav className='menu'>
                    <ul>
                        <li> <Link to='/'>Home</Link> </li>
                        <li><Link to='/Sobre'>Sobre</Link></li>
                        <li><Link to='/Contatos'>Contatos</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

