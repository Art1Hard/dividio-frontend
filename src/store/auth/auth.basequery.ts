import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type { RootState } from "@src/store";

const authBaseQuery = (endpoint: string = "/") => {
	const baseQuery = fetchBaseQuery({
		baseUrl: `http://localhost:4200/api${endpoint}`,
		credentials: "include", //! важно для передачи и получения httpOnly cookie
		prepareHeaders: (headers, { getState }) => {
			const state = getState() as RootState;
			const token = state.auth.accessToken;
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
			return headers;
		},
	});

	return baseQuery;
};

export default authBaseQuery;
