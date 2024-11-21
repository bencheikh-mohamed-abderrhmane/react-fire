import React from 'react';
import './accueil.css';
import banner from '../assets/komaye-banner.webp';

function Accueil(props) {
    return (
        <div className='accueil'>
            <div className='banner'>
                <img src={banner} alt="Bannière de Komaye" />
            </div>
            <div className='presentation'>
                <h1>Présentation de Komayé</h1>
                <p>Komayé est une société internationale spécialisée dans
                     la commercialisation de biens et de services technologiques, dont le siège est basé à Hong Kong. Avec des bureaux stratégiquement situés dans des métropoles comme Hong Kong Genève et la Silicon Valley. Komayé se positionne comme un acteur clé pour les startups et les nouvelles marques qui souhaitent accéder aux marchés mondiaux.

                </p>
                <p>
                    Grâce à sa plateforme numérique de pointe, Komayé offre aux entreprises émergentes une vitrine unique et un accès direct à un réseau international. En rejoignant notre plateforme, les entreprises partenaires
                     bénéficient d'une visibilité accrue pour leurs produits phares, d'un accompagnement dans leur stratégie de commercialisation et d'une opportunité de découvrir et de pénétrer de nouveaux marchés.
                </p>

                <p>
                Les marques intéressées peuvent soumettre une demande pour devenir partenaire. Une fois acceptées, leurs produits les plus prometteurs sont intégrés dans notre circuit commercial mondial, avec une mise en avant exclusive sur notre plateforme et un soutien adapté à leurs objectifs de croissance à l'international.
                </p>
            </div>
        </div>
    );
}

export default Accueil;
