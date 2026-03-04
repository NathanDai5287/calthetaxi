import { securedREST } from '@/utils/rest';
import { useEffect, useState } from 'react';

interface Reimbursement {
	id: string;
	userId: string;
	description: string;
	amount: number;
	status: Status;
	receiptUrl: string;
	adminNote: string | null;
	reviewedBy: string | null;
	createdAt: string;
}

type Status = 'PENDING' | 'APPROVED' | 'REJECTED';

const ReimbursementsList = () => {
	const [reimbursements, setReimbursements] = useState<Reimbursement[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await securedREST({
				path: '/api/reimbursements?status=PENDING',
				method: 'GET',
			});
			const data = await response.json();
			setReimbursements(data);
		};

		fetchData();
	}, []);

	return (
		<div>
			{reimbursements.map((reimbursement) => (
				<div key={reimbursement.id} className='mb-4'>
					<img src={reimbursement.receiptUrl} alt='Receipt' width='200px' />
					<p>Description: {reimbursement.description}</p>
					<p>Amount: ${reimbursement.amount.toFixed(2)}</p>
					Approved
				</div>
			))}
		</div>
	);
};

export { ReimbursementsList };
