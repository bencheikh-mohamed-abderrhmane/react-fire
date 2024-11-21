import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig'; // Importez votre configuration Firebase
import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import './testimonials.css';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Charger les témoignages depuis Firebase
  useEffect(() => {
    const fetchTestimonials = async () => {
      const querySnapshot = await getDocs(collection(db, 'testimonials'));
      const testimonialsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Trier par date décroissante et ne garder que les 5 derniers
      const sortedTestimonials = testimonialsData
        .sort((a, b) => b.date?.seconds - a.date?.seconds)
        .slice(0, 5);

      setTestimonials(sortedTestimonials);
    };
    fetchTestimonials();
  }, []);

  // Ajouter un nouveau témoignage à Firebase
  const handleAddTestimonial = async (e) => {
    e.preventDefault();
    if (name && message) {
      await addDoc(collection(db, 'testimonials'), {
        name,
        message,
        date: serverTimestamp(),
      });
      setName('');
      setMessage('');

      // Recharger les témoignages après ajout
      const querySnapshot = await getDocs(collection(db, 'testimonials'));
      const testimonialsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Trier par date décroissante et ne garder que les 5 derniers
      const sortedTestimonials = testimonialsData
        .sort((a, b) => b.date?.seconds - a.date?.seconds)
        .slice(0, 5);

      setTestimonials(sortedTestimonials);
    }
  };

  return (
    <div className="testimonials">
      <h2>Les Derniers Témoignages</h2>

      {/* Affichage des témoignages */}
      <div className="testimonials-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <h3>{testimonial.name}</h3>
            <p>{testimonial.message}</p>
            <span>{new Date(testimonial.date?.seconds * 1000).toLocaleDateString()}</span>
          </div>
        ))}
      </div>

      {/* Formulaire pour ajouter un témoignage */}
      <form className="testimonial-form" onSubmit={handleAddTestimonial}>
        <input
          type="text"
          placeholder="Votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Votre témoignage"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Envoyer le témoignage</button>
      </form>
    </div>
  );
}

export default Testimonials;
