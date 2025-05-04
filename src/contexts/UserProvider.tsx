import { createContext, FunctionComponent, ReactNode, useEffect, useReducer } from 'react';

const KEY_LOCAL_STORAGE = 'user';

interface User {
	name: string;
}

interface Actions {
	type: 'set-name' | 'set';
	payload?: unknown;
}

function reducer(user: User, action: Actions): User {
	switch (action.type) {
		case 'set-name':
			return { ...user, name: action.payload as string };
		case 'set':
			return action.payload as User;
		default:
			return user;
	}
}

interface UserContext {
	user: User;
	dispatch: React.Dispatch<Actions>;
}

export const UserContext = createContext<UserContext | undefined>(undefined);

const UsersProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
	const [user, dispatch] = useReducer(reducer, {} as User);

	useEffect(() => {
		const stored = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE) || '{}');

		if (stored?.name) dispatch({ type: 'set', payload: stored });
		else dispatch({ type: 'set', payload: { name: '' } });
	}, []);

	useEffect(() => localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(user)), [user]);

	return <UserContext.Provider value={{ user, dispatch }}>{children}</UserContext.Provider>;
};

export default UsersProvider;
