import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Yan Fernandes</span>
            </Link>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>

                </ul>
            </nav>
        </header>
    );
};

export default Header;