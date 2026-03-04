const handleLogout = async () => {
	await fetch(`${process.env.NEXT_PUBLIC_API_PATH}/api/auth/logout`, {
		method: 'POST',
		credentials: 'include',
	});

	window.location.href = '/';
};

export default handleLogout;
