import { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Yan Fernandes</span>
            </Link>
            
            <button 
                className={`${styles.menuToggle} ${menuOpen ? styles.active : ''}`} 
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                ☰
            </button>
            
            <nav className={menuOpen ? styles.navOpen : ''}>
                <ul>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;