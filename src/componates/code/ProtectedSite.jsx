import React, { useState } from 'react';
import './code.css'

function ProtectedSite() {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const correctPassword = '191919'; // Définissez un mot de passe sécurisé

    const handlePasswordSubmit = () => {
        if (password === correctPassword) {
            setIsAuthenticated(true);
        } else {
            alert("Mot de passe incorrect");
        }
    };

    if (isAuthenticated) {
        return (
            <div>
                {/* Contenu du site que l'équipe peut voir */}
                <h1>Bienvenue sur le site !</h1>
            </div>
        );
    }

    return (
        <div>
            <h2>Accès restreint</h2>
            <input
                type="password"
                placeholder="Entrez le mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handlePasswordSubmit}>Se connecter</button>
        </div>
    );
}

export default ProtectedSite;
