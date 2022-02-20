import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
	routes() {
		this.namespace = 'api';
		this.get('/transactions', () => {
			return [
				{
					id: 1,
					title: 'Freelance de website',
					type: 'deposit',
					category: 'Dev',
					amount: 6000,
					createdAt: new Date('2021-02-12 09:00:00'),
				  },
				  {
					id: 2,
					title: 'Aluguel',
					type: 'withdraw',
					category: 'Casa',
					amount: 1100,
					createdAt: new Date('2021-02-12 11:00:00'),
				  },
		]
		});
	}
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
