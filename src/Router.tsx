import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const Router = () => {
	return (
		<Routes>
			<Route index path="/" element={<HomePage />}></Route>

			{/* Error route (404) */}
			<Route path="*" element={<ErrorPage />}></Route>
		</Routes>
	);
};

export default Router;
