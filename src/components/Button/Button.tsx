import { FunctionComponent, ReactNode } from 'react';

import './Button.css';

interface ButtonProps {
	children: string; // Texto do botão
	icon?: ReactNode | false;
	style?: 'default' | 'empty';
	type?: 'submit' | 'button' | 'reset';
   title?: string;
	onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({
	icon,
	style = 'default',
	type = 'submit',
   title,
	children,
	onClick,
}) => {
	return (
		<button
			className={`Button Button--${style}`}
			type={type}
			onClick={onClick}
         title={title ? title : ''}
		>
			{icon ? icon : ''} {children}
		</button>
	);
};

export default Button;
