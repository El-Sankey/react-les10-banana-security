import './AuthContext.css';
import React, { createContext, useState } from 'react';


export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const login = (username) => {
		setTimeout(() => {
			setUser({ name: username, role: "verkoper" });
			setIsLoggedIn(true);
		}, 1000);
	};

	const logout = () => {
		setUser(null);
		setIsLoggedIn(false);
	};

	const authData = {
		user,
		isLoggedIn,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={authData}>
			{children}
		</AuthContext.Provider>
	);
};
export default AuthProvider;
