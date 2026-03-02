import { SubmitEvent } from 'react';

interface ReimbursementFormData {
	image: File;
	description: string;
	amount: string;
}

const ReimbursementForm = () => {
	const handleSubmit = (e: SubmitEvent<HTMLFormElement>): void => { // TODO: call api to submit form data
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		const image = formData.get('image') as File;
		const description = formData.get('description') as string;
		const amount = formData.get('amount') as string;

		const data: ReimbursementFormData = { image, description, amount };

		console.log('Image:', data.image);
		console.log('Description:', data.description);
		console.log('Amount:', data.amount);
	};

	return (
		<div>
			<p>Reimbursements</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor='image'>Upload Image:</label>
				<input type='file' id='image' name='image' accept='image/*' />
				<br />
				<label htmlFor='description'>Description:</label>
				<input type='text' id='description' name='description' />
				<br />
				<label htmlFor='amount'>Amount:</label>
				<input type='number' step='0.01' id='amount' name='amount' />
				<br />
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export { ReimbursementForm };
