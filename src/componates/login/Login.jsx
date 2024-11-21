import React, { useState } from 'react';
import { auth, googleProvider, db } from '../avis/firebaseConfig';
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import './login.css';

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
    });

    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState("");
    const [state, setState] = useState("Se connecter");
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const checkboxHandler = (e) => {
        setIsChecked(e.target.checked);
    };

    const addExistingUserToFirestore = async (user) => {
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);

        if (!userDoc.exists()) {
            await setDoc(userRef, {
                email: user.email,
                username: formData.username || "Anonyme",
                role: "user",
                createdAt: new Date()
            });
            console.log("Utilisateur ajouté à Firestore");
        } else {
            console.log("L'utilisateur est déjà dans Firestore");
        }
    };

    const handleSubmit = async () => {
        if (!isChecked) {
            setError("Vous devez accepter les conditions pour continuer.");
            return;
        }

        setError("");
        try {
            if (state === "S'inscrire") {
                const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
                const user = userCredential.user;

                await addExistingUserToFirestore(user);
                console.log("Inscription réussie !");
                navigate('/');
            } else {
                const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
                const user = userCredential.user;

                await addExistingUserToFirestore(user);
                console.log("Connexion réussie !");
                navigate('/');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const userCredential = await signInWithPopup(auth, googleProvider);
            const user = userCredential.user;

            await addExistingUserToFirestore(user);
            console.log("Connexion réussie avec Google !");
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className='loginsignup'>
            <div className='loginsignup-container'>
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "S'inscrire" && (
                        <input
                            className='name'
                            name='username'
                            value={formData.username}
                            onChange={changeHandler}
                            type="text"
                            placeholder='Votre nom'
                        />
                    )}
                    <input
                        className='email'
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        type="email"
                        placeholder='Adresse email'
                    />
                    <input
                        className='password'
                        type="password"
                        name='password'
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder='Mot de passe'
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button onClick={handleSubmit} className="continue-button">
                    {state === "S'inscrire" ? "S'inscrire" : "Se connecter"}
                </button>
                <button onClick={handleGoogleLogin} className="google-button">Se connecter avec Google</button>
                {state === "S'inscrire" ? (
                    <p className='loginsignup-login'>
                        Vous avez déjà un compte ?
                        <span onClick={() => setState("Se connecter")}> Se connecter</span>
                    </p>
                ) : (
                    <p className='loginsignup-login'>
                        Créez un compte ?
                        <span onClick={() => setState("S'inscrire")}> Cliquez ici</span>
                    </p>
                )}
                <div className="loginsignup-agree">
                    <input
                        type="checkbox"
                        name="agree"
                        id="agree"
                        checked={isChecked}
                        onChange={checkboxHandler}
                    />
                    <p>En continuant, vous acceptez nos termes d'utilisation</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
