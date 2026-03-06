'use client';

import { useState } from 'react';
import { securedREST } from '@/utils/rest';

const ReimbursePage = () => {
	const [description, setDescription] = useState<string>('');
	const [amount, setAmount] = useState<string>('');
	const [file, setFile] = useState<File | null>(null);
	const [error, setError] = useState<string>('');
	const [success, setSuccess] = useState<boolean>(false);

	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault();
		setError('');

		if (!file) {
			setError('Please attach a receipt');
			return;
		}

		const formData = new FormData();
		formData.append(
			'data',
			new Blob([JSON.stringify({ description, amount: parseFloat(amount) })], {
				type: 'application/json',
			})
		);
		formData.append('file', file);

		const res = await securedREST({
			path: '/api/reimbursements',
			method: 'POST',
			body: formData,
			multipart: true,
		});

		if (!res.ok) {
			const data = await res.json();
			setError(data.message || 'Submission failed');
			return;
		}

		setSuccess(true);
	};

	if (success) {
		return <p>Reimbursement submitted successfully.</p>;
	}

	return (
		<form onSubmit={(e) => handleSubmit(e.nativeEvent)}>
			<div>
				<label>Description</label>
				<input
					className='border'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					required
				/>
			</div>
			<div>
				<label>Amount ($)</label>
				<input
					className='border'
					type='number'
					step='0.01'
					min='0'
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					required
				/>
			</div>
			<div>
				<label>Receipt</label>
				<input
					type='file'
					accept='image/*,application/pdf'
					onChange={(e) => setFile(e.target.files?.[0] ?? null)}
					required
				/>
			</div>
			{error && <p>{error}</p>}
			<button type='submit'>Submit Reimbursement</button>
		</form>
	);
};

export default ReimbursePage;
