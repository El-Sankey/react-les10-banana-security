import './AuthContext.css';
import React, { createContext, useState } from 'react';


export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const login = (username) => {
		setTimeout(() => {
			setUser({ name: username, role: "gebruiker" });
			setIsLoggedIn(true);
		}, 1000);
	};

	const logout = () => {
		setUser(null);
		setIsLoggedIn(false);
	};

	const isGebruiker = user?.role === "gebruiker";

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

// export const Authcontext = createContext();
//
// const Authcontext = ({children}) => {
// 	const [authstate, setAuthState] = useState({
// 		isAuth: false,
// 		user: "",
// 	});
// 	const login = (email) => {
// 		setAuthState({
// 			isAuth: true,
// 			user: email,
// 		});
// 	};
//
// 	const logout = () => {
// 		setAuthState({
// 			isAuth: false,
// 			user: ""
// 		});
// 	};
//
// 	const authData = {
// 		...authstate,
// 		login,
// 		logout,
// 	};
// };
//
// return (
// 	<AuthContext.Provider value={authData}>
// 		{children}
// 	</AuthContext.Provider>
// );


