import React, { useState } from 'react';
import './questions.css';

function Questions() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Comment fonctionne Komaye pour aider les commerciaux ?",
            answer: "Komaye aide les commerciaux en leur offrant une visibilité accrue. Vous pouvez devenir partenaire et bénéficier d’une promotion de vos services auprès d’un large public."
        },
        {
            question: "Comment faire une demande pour devenir partenaire ?",
            answer: "Pour devenir partenaire, rendez-vous dans la section 'Devenir Partenaire' et remplissez le formulaire de demande avec vos informations. Nous vérifierons ensuite vos informations et vous enverrons un email de confirmation."
        },
        {
            question: "Quel est le coût pour devenir partenaire ?",
            answer: "Le coût dépend de la durée de votre partenariat. Après avoir soumis votre demande, vous recevrez un devis personnalisé en fonction de la période de collaboration choisie."
        },
        {
            question: "Combien de temps faut-il pour traiter ma demande de partenariat ?",
            answer: "Une fois la demande soumise, elle est généralement traitée dans les 2 à 3 jours ouvrables. Vous recevrez un email de confirmation dès que votre demande aura été vérifiée."
        }
    ];

    return (
        <div className="faq-container">
            <h3>Questions Fréquemment Posées</h3>
            {faqData.map((item, index) => (
                <div className="question-item" key={index}>
                    <h4 onClick={() => toggleAnswer(index)}>
                        {item.question}
                    </h4>
                    <div className={`answer ${activeIndex === index ? 'show' : ''}`}>
                        {item.answer}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Questions;
