'use client';

import { useState } from 'react';
import handleLogout from '@/utils/logout';
import { securedREST } from '@/utils/rest';

const LoginPage = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');

		const res = await securedREST({
			path: '/api/auth/login',
			method: 'POST',
			body: { email, password },
		});

		if (!res.ok) {
			if (res.status === 401) {
				await handleLogout();
				return;
			}
			const data = await res.json();
			setError(data.message || 'Login failed');
			return;
		}

		window.location.href = '/';
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Email</label>
				<input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
			</div>
			<div>
				<label>Password</label>
				<input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>
			{error && <p>{error}</p>}
			<button type='submit'>Login</button>
		</form>
	);
};

export default LoginPage;
