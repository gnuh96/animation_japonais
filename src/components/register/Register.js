import React, { useState } from 'react';
import "./Register.css";
import Icon from '../icon/Icon'
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vous pouvez ajouter ici la logique pour traiter les données de connexion
    console.log('Username:', username, 'Email:', email, 'Password:', password);
  };

  const handleLogin =() => {
    navigate("/login");
  }
  return (
    <div>
      <div id="icon">
    <Icon type='logo' size='25%'/>
    </div>
    <form onSubmit={handleSubmit} className="register-form">
     
      <div>
        <label htmlFor="username">Identifiant :</label>
        <input
          type="text"
          id="username"
          className="register-input"  // Ajout de la classe pour le style
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          className="register-input"  // Ajout de la classe pour le style
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          className="register-input"  // Ajout de la classe pour le style
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="register-button">Inscription</button>
      <button type="button" className="login-button" onClick={handleLogin}>Se connecter</button>
    </form>
    </div>
  );
}

export default Register;
