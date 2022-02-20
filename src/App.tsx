import styled from 'styled-components';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { TransactionsTable } from './components/TransactionsTable';


export function App() {
  return (
	<>
		<Header/>
		<Dashboard/>
		<TransactionsTable/>
		<GlobalStyle/>
	</>
  );
}
