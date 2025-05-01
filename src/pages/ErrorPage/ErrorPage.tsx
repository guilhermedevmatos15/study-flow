import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import './ErrorPage.css';

import Button from '../../components/Button/Button';

const ErrorPage: FunctionComponent = () => {
	const Navigate = useNavigate();

	return (
		<div className="ErrorPage">
			<h1>Erro 404 <br />Página não encontrada...</h1>

			<p>
				A página que você está procurando não é existente, ela pode ter sido
				removida ou seu nome pode ter sido alterado.
			</p>

			<Button type="button" onClick={() => Navigate('/')}>Ir para Home</Button>
		</div>
	);
};

export default ErrorPage;
