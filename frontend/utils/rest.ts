const APIRoute = process.env.NEXT_PUBLIC_API_PATH;

interface FetchParams {
	method: string;
	headers: { 'Content-Type': string };
	credentials: RequestCredentials;
	body?: string;
	signal?: AbortSignal;
}

export const securedREST = async (params: {
	path: string;
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
	body?: unknown;
	abortSignal?: AbortSignal;
}) => {
	const fetchParams: FetchParams = {
		method: params.method,
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
	};

	if (params.body) {
		fetchParams.body = JSON.stringify(params.body);
	}

	if (params.abortSignal) {
		fetchParams.signal = params.abortSignal;
	}

	const res = await fetch(`${APIRoute}${params.path}`, fetchParams);

	if (res.status === 401) {
		window.location.href = '/';
	}

	return res;
};
