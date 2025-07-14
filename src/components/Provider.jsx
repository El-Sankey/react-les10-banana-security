import './Provider.css'
import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Dashboard = () => {
	const auth = useContext(AuthContext);

	return (
		<div>
			<h2>Welkom, {auth.user.name}!</h2>
			<p>Je bent ingelogd als: {auth.user.role}</p>
		</div>
	);
};

export default Dashboard;

