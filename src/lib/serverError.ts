/* eslint-disable @typescript-eslint/no-explicit-any */
type ServerError = {
	data: {
		error: string;
		message: string;
		statusCode: number;
	};
};

export function isServerError(e: unknown): e is ServerError {
	return (
		typeof e === "object" &&
		e !== null &&
		"data" in e &&
		typeof (e as any).data === "object" &&
		typeof (e as any).data.message === "string" &&
		typeof (e as any).data.error === "string" &&
		typeof (e as any).data.statusCode === "number"
	);
}
