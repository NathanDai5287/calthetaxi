'use client';

import handleLogout from '@/utils/logout';
import { securedREST } from '@/utils/rest';
import { useState } from 'react';

const Register = () => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');

	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault();
		setError('');

		const response = await securedREST({
			path: '/api/auth/register',
			method: 'POST',
			body: { name, email, password },
		});

		if (!response.ok) {
			if (response.status === 401) {
				await handleLogout();
				return;
			}

			const data = await response.json();
			setError(data.message || 'Registration failed');
			return;
		}

		window.location.href = '/';
	};

	return (
		<form onSubmit={(e) => handleSubmit(e.nativeEvent)}>
			<div>
				<label>Name</label>
				<input className='border' value={name} onChange={(e) => setName(e.target.value)} required />
			</div>
			<div>
				<label>Email</label>
				<input
					className='border'
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>
			<div>
				<label>Password</label>
				<input
					className='border'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>
			{error && <p>{error}</p>}
			<button type='submit'>Register</button>
		</form>
	);
};

export { Register };
