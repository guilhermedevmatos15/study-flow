import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';

const Router = () => {
	return (
		<Routes>
			<Route index path="/" element={<HomePage />}></Route>
		</Routes>
	);
};

export default Router;
