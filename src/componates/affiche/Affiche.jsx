import React from 'react';
import './affiche.css'
import quentum from '../assets/quentum-logo-removebg-preview.png'

import global from '../assets/Logo-GTP-II-PNG_afUhbEy.png'
import space from '../assets/IMG-20241112-WA0001.jpg'

function Affiche(props) {
    return (
        <div className='affiche'>
            
            <div className='partnaire'>
                <img src={quentum} alt="" />
                <h3>Quentum Space</h3>
                <p>Quentum Space est une marque innovante spécialisée dans le développement web, avec une expertise avancée en intégration de l'intelligence artificielle (IA). Grâce à des solutions de pointe, Quentum Space se démarque en transformant l'avenir numérique avec des applications révolutionnaires de l'informatique quantique.</p>
    <p>Notre mission est d’accompagner les entreprises modernes dans leur évolution technologique en leur proposant des services hautement performants, adaptés à leurs besoins spécifiques. Que ce soit pour optimiser l'efficacité, renforcer la sécurité, ou créer des expériences utilisateur immersives, Quentum Space ouvre la voie à
         de nouvelles possibilités pour ses clients à travers des technologies d’avant-garde.</p>
                     <a href="https://quentumspace.com/"><button>En savoir plus</button></a>

            </div>



            <div className='partnaire2'>
                <img src={space} alt="space sortuim" />
                <h3>Space-Sortium</h3>
                <p>Space-Sortium est un réseau conçu pour connecter le grand public, les entreprises, les établissements de recherche, et les institutions publiques, avec pour mission de bâtir une "Smart Nation" où collaboration et innovation sont centrales.</p>
                

<p> Ses quatre plateformes offrent : un espace d’échange pour les citoyens, un réseau pour les entreprises favorisant le recrutement et le partage d'expertises, une plateforme pour la recherche collaborative et le financement, et un canal de communication entre institutions publiques et citoyens pour améliorer les politiques communautaires. Avec des outils comme un moteur de recherche avancé, un tableau de bord personnalisé, et des protocoles de sécurité robustes, Space-Sortium relie les acteurs dans un écosystème collaboratif et intégré.</p>
    <a href="https://spacesortium.com/"><button>En savoir plus</button></a>


            </div>


            <div className='partnaire3'>
                <img src={global} alt="" />
                <h3>GLOBALTRONICS PARTNER</h3>
                <p> Globaltronics Partner est une référence dans le domaine des solutions électroniques, avec près de 12 ans d'expertise dans la création d’ensembles et de sous-ensembles électroniques de haute qualité. Doté d’un atelier équipé de machines de dernière génération, GTP s'engage à fournir des services fiables et performants, répondant aux besoins des entreprises les plus exigeantes.</p>

    <p>Les objectifs de GTP sont de :

    Créer un climat de confiance avec nos clients et partenaires <br />  en établissant des relations durables.
    Accompagner chaque projet de bout en bout pour garantir des solutions optimales.
    Assurer la pérennité de l’entreprise en maintenant des standards de qualité élevés.</p>
    
   <a href="https://gtpartner.net/"> <button>En savoir plus</button></a>


            </div>



        </div>
    );
}

export default Affiche;