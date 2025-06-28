import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./services/basequery";

const BaseApi = createApi({
	reducerPath: "api",
	baseQuery: baseQueryWithReauth,
	tagTypes: ["Income", "Allocation"],
	endpoints: () => ({}),
});

export default BaseApi;
