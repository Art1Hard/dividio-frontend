import { createApi } from "@reduxjs/toolkit/query/react";
import authBaseQuery from "./auth.basequery";

const authBaseApi = createApi({
	reducerPath: "api",
	baseQuery: authBaseQuery("/api"),
	tagTypes: ["Income", "Allocation"],
	endpoints: () => ({}),
});

export default authBaseApi;
