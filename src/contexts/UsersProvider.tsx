import { createContext, FunctionComponent, ReactNode, useReducer } from 'react';

interface Users {
	name: string;
}

interface UsersAction {
	type: string;
	payload?: unknown;
}

function reducer(state: Users[], action: UsersAction) {
	switch (action.type) {
		case 'log':
			console.log('teste', state);
			console.log(action.payload);
			return state;
		default:
			return state;
	}
}

interface UsersContextType {
	users: Users[];
	dispatch: React.Dispatch<UsersAction>;
}

export const UsersContext = createContext<UsersContextType | undefined>(undefined);

const UsersProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
	const [users, dispatch] = useReducer(reducer, []);

	return <UsersContext.Provider value={{ users, dispatch }}>{children}</UsersContext.Provider>;
};

export default UsersProvider;
