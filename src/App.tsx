import { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

// routes
import Router from './Router';

// css
import './styles/index.css';

const App: FunctionComponent = () => {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	);
};

export default App;
