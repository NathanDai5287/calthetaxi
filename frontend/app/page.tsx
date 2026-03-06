'use client';

import Link from 'next/link';
import useUserData from '@/hooks/useUserData';

const HomePage = () => {
	const userData = useUserData();
	console.log(userData);

	if (!userData) return null;

	return (
		<ul>
			{userData.loggedIn ? (
				<>
					<li>
						<Link href='/admin'>Reimbursements list</Link>
					</li>
					<li>
						<Link href='/reimburse'>Submit a reimbursement</Link>
					</li>
				</>
			) : (
				<>
					<li>
						<Link href='/login'>Login</Link>
					</li>
					<li>
						<Link href='/register'>Register</Link>
					</li>
				</>
			)}
		</ul>
	);
};

export default HomePage;
