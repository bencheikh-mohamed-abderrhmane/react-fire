import React, { useState } from 'react';
import Navbar from './componates/navbar/Navbar';
import Accueil from './componates/accueil/Accueil';
import Affiche from './componates/affiche/Affiche';
import Contact from './componates/contact/Contact';
import Questions from './componates/questions/Questions';
import Testimonials from './componates/avis/Testimonials';
import './shop.css';

function Shop(props) {
    // État pour gérer le mot de passe et l'affichage
    const [password, setPassword] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);

    // Mot de passe correct
    const correctPassword = "motdepasse123"; // Remplacez par votre mot de passe

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePasswordSubmit = () => {
        if (password === correctPassword) {
            setIsAuthorized(true);
        } else {
            alert("Mot de passe incorrect !");
        }
    };

    // Si l'utilisateur n'est pas autorisé, affiche le champ de mot de passe
    if (!isAuthorized) {
        return (
            <div className="password-protection">
                <h2>Entrez le mot de passe pour accéder au site :</h2>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Mot de passe"
                />
                <button onClick={handlePasswordSubmit}>Soumettre</button>
            </div>
        );
    }

    // Si l'utilisateur est autorisé, affiche le site
    return (
        <div>
            <Navbar />
            <Accueil />
            <h1 className='mid'>Nos Marques</h1>
            <Affiche />
            <Testimonials />
            <Questions />
            <h1 className='mid'>Contactez-nous</h1>
            <Contact />
            <h1 className='mid'>Copyright © 2024 Komayé </h1>
        </div>
    );
}

export default Shop;
