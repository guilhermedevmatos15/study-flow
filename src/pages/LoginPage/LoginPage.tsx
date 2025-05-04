import { FormEvent, FunctionComponent, useCallback, useContext, useEffect, useState } from 'react';

import './LoginPage.css';

// components
import Button from '../../components/Button/Button';
import Slider from '../../components/Slider/Slider';

// images
import Illustration01 from '../../assets/img/illustrations/studying1.svg';
import Illustration02 from '../../assets/img/illustrations/studying2.svg';
import Illustration03 from '../../assets/img/illustrations/studying3.svg';

// context
import { UserContext } from '../../contexts/UserProvider';
import { useNavigate } from 'react-router-dom';

const LoginPage: FunctionComponent = () => {
	const navigate = useNavigate();

	const context = useContext(UserContext);
	if (!context) throw new Error('useContext must be used within a UsersProvider');
	const { user, dispatch } = context;

	const [inputUsername, setInputUsername] = useState<string>('');

	useEffect(() => {
		if (user?.name) navigate('/dashboard');
	}, [user?.name, navigate]);

	const handleSubmit = useCallback(
		(e: FormEvent): void => {
			e.preventDefault();

			if (inputUsername.trim()) dispatch({ type: 'set-name', payload: inputUsername.trim().split(' ')[0] });
			else alert('Por favor, informe um nome!');
		},
		[inputUsername, dispatch]
	);

	return (
		<div className='LoginPage'>
			<main>
				<section className='left'>
					<h1>Seja bem vindo!</h1>
					<p>
						Estude com propósito. Organize sua rotina, acompanhe seu progresso e alcance seus objetivos com o{' '}
						<strong>StudyFlow</strong>.
					</p>

					<form onSubmit={handleSubmit}>
						<input
							type='text'
							placeholder='Usuário'
							value={inputUsername}
							onChange={(e) => setInputUsername(e.target.value)}
						/>

						<Button type='submit'>Login</Button>
					</form>
				</section>

				<section className='right'>
					<Slider
						elements={[
							{ text: 'Organize sua rotina!', image: Illustration01 },
							{ text: 'Tudo em um só lugar!', image: Illustration02 },
							{ text: 'Auxiliando a realizar seus sonhos!', image: Illustration03 },
						]}
					/>
				</section>
			</main>
		</div>
	);
};

export default LoginPage;
