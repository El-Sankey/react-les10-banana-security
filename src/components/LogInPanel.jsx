import './LogInPanel.css'
import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';

const LogInPanel = () => {
	const { user, isLoggedIn, login, logout } = useContext(AuthContext);
	const [username, setUsername] = useState('');

	return (
		<div className="logIn">
			{isLoggedIn ? (
				<>
					<h2>Welkom, {user.name}!</h2>
					<p>Rol: {user.role}</p>
					<button onClick={logout}>Uitloggen</button>
				</>
			) : (
				<>
					<h2>Log in</h2>
					<input
						type="text"
						placeholder="Gebruikersnaam"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<button onClick={() => login(username)}>Inloggen</button>
				</>
			)}
		</div>
	);
};

export default LogInPanel;
