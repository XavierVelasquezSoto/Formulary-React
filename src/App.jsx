import { BrowserRouter } from 'react-router-dom';
import Button from './components/button/Button';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Router />
		</BrowserRouter>
	);
};

export default App;

// npm install react-router-dom --- para terminal
