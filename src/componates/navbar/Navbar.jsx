import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/komaye-logo.png';
import { auth } from '../avis/firebaseConfig'; // Importer auth depuis firebaseConfig
import { onAuthStateChanged, signOut } from 'firebase/auth';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Surveiller l'état de l'authentification
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
        });
        // Nettoyer l'abonnement
        return () => unsubscribe();
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setIsAuthenticated(false); // Mettre à jour l'état d'authentification
            navigate('/'); // Rediriger vers la page d'accueil après la déconnexion
        } catch (error) {
            console.error("Erreur lors de la déconnexion :", error);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Komaye Logo" />
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <span className="burger-icon"></span>
            </div>
            <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                <li><Link to="/partnership" onClick={toggleMenu}>Devenir Partenaire</Link></li>
                <li><Link to="/about" onClick={toggleMenu}>À propos de nous</Link></li>
                {isAuthenticated ? (
                    <button className="auth-button-deco" onClick={handleLogout}>Déconnexion</button>
                ) : (
                    <Link to="/login" onClick={toggleMenu}>
                        <button className="auth-button">Connexion</button>
                    </Link>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
