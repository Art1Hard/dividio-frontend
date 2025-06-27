import type { AppDispatch } from "@app/store";
import { allocationApi } from "@features/allocation/services/allocation.api";
import { authApi } from "@features/auth/services/auth.api";
import { incomeApi } from "@features/income/services/income.api";
import { userApi } from "@features/user/services/user.api";

const resetFullApiState = (dispatch: AppDispatch) => {
	dispatch(authApi.util.resetApiState());
	dispatch(userApi.util.resetApiState());
	dispatch(incomeApi.util.resetApiState());
	dispatch(allocationApi.util.resetApiState());
};

export default resetFullApiState;
