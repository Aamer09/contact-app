import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
	const contacts = [
		{
			id: '1',
			name: 'Shyam',
			email: 'shyamjaiswal@gmail.com'
		},
		{
			id: 2,
			name: 'Bob',
			email: 'bob32@gmail.com'
		},

		{
			id: 3,
			name: 'Jai',
			email: 'jai87@gmail.com'
		}
	];

	return (
		<div className="ui container">
			<Header />
			<AddContact />
			<ContactList contacts={contacts} />
		</div>
	);
}
export default App;
