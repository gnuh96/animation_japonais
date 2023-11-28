import React, { useState } from 'react';
import "./Login.css";
import Icon from '../icon/Icon'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vous pouvez ajouter ici la logique pour traiter les données de connexion
    console.log('Username:', username, 'Password:', password);
  };

  return (
    <div>
      <div id="icon">
    <Icon type='logo' size='25%'/>
    </div>
    <form onSubmit={handleSubmit} className="login-form">
     
      <div>
        <label htmlFor="username">Identifiant :</label>
        <input
          type="text"
          id="username"
          className="login-input"  // Ajout de la classe pour le style
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          className="login-input"  // Ajout de la classe pour le style
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="login-button">Connexion</button>
    </form>
    </div>
  );
}

export default Login;
