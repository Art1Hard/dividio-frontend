import type { AppDispatch } from "@src/app/store";
import { allocationApi } from "@src/features/allocation/api/allocation.api";
import { authApi } from "@src/features/auth/api/auth.api";
import { incomeApi } from "@src/features/income/api/income.api";
import { userApi } from "@src/features/user/api/user.api";

const resetFullApiState = (dispatch: AppDispatch) => {
	dispatch(authApi.util.resetApiState());
	dispatch(userApi.util.resetApiState());
	dispatch(incomeApi.util.resetApiState());
	dispatch(allocationApi.util.resetApiState());
};

export default resetFullApiState;
