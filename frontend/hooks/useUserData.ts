import { useSyncExternalStore } from 'react';

type Role = 'UNVERIFIED' | 'MEMBER' | 'ADMIN';

interface UserData {
	loggedIn: boolean;
	role: Role | null;
}

let cache: UserData | null = null;

const getSnapshot = (): UserData => {
	const loggedIn = document.cookie.split(';').some((c) => c.trim() === 'loggedIn=true');
	if (cache && cache.loggedIn === loggedIn) return cache;
	cache = { loggedIn, role: null };
	return cache;
};

const useUserData = (): UserData | null =>
	useSyncExternalStore(
		() => () => {},
		getSnapshot,
		() => null
	);

export default useUserData;
