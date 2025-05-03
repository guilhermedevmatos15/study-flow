import { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

// routes
import Router from './Router';

// css
import './styles/index.css';

// data (contexts)
import GlobalProvider from './contexts/GlobalProvider';

const App: FunctionComponent = () => {
	return (
		<GlobalProvider>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</GlobalProvider>
	);
};

export default App;
