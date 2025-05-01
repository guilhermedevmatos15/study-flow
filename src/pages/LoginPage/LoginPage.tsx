import { FormEvent, FunctionComponent, useCallback } from 'react';

import './LoginPage.css';

// components
import Button from '../../components/Button/Button';
import Slider from '../../components/Slider/Slider';

const LoginPage: FunctionComponent = () => {
	const handleSubmit = useCallback((e: FormEvent): void => {
		e.preventDefault();
	}, []);

	return (
		<div className="LoginPage">
			<main>
				<section className="left">
					<h1>Seja bem vindo!</h1>
					<p>
						Estude com propósito. Organize sua rotina, acompanhe seu
						progresso e alcance seus objetivos com o{' '}
						<strong>StudyFlow</strong>.
					</p>

					<form onSubmit={handleSubmit}>
						<input type="text" placeholder="Usuário" />

						<Button type="submit">Login</Button>
					</form>
				</section>

				<section className="right">
					<Slider
						elements={[
							{ text: 'Teste1', image: '' },
							{ text: 'Teste2', image: '' },
							{ text: 'Teste3', image: '' },
						]}
					/>
				</section>
			</main>
		</div>
	);
};

export default LoginPage;
