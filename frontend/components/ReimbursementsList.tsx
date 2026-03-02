// dummy data
const reimbursements = [
	{
		id: 1,
		image: 'https://placehold.co/600x400.png',
		description: 'Taxi fare from airport to hotel',
		amount: 45.0,
		checked: false,
	},
	{
		id: 2,
		image: 'https://placehold.co/600x400.png',
		description: 'Taxi fare from hotel to conference center',
		amount: 30.0,
		checked: true,
	},
];

const ReimbursementsList = () => {
	const handleCheckedChange = (id: number) => {
		// TODO: call api to update reimbursement status
		console.log('Checked reimbursement with id:', id);
	};

	return (
		<div>
			{reimbursements.map((reimbursement) => (
				<div key={reimbursement.id} className='mb-4'>
					<img src={reimbursement.image} alt='Receipt' width='200px' />
					<p>Description: {reimbursement.description}</p>
					<p>Amount: ${reimbursement.amount.toFixed(2)}</p>
					<input
						type='checkbox'
						defaultChecked={reimbursement.checked}
						onChange={() => handleCheckedChange(reimbursement.id)}
					/>
					Approved
				</div>
			))}
		</div>
	);
};

export { ReimbursementsList };
