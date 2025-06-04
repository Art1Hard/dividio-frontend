import { useAppSelector } from "@hooks/redux";
import { useThunks } from "@hooks/redux/thunks";
import { useUserQuery } from "@store/user/user.api";

const User = () => {
	const { logout } = useThunks();
	const { accessToken } = useAppSelector((state) => state.auth);
	const { data, isLoading, isError } = useUserQuery(undefined, {
		skip: !accessToken,
	});

	return (
		<div>
			{!isLoading && !isError && data && (
				<div>
					<h5>ID: {data.id}</h5>
					<h3 className="text-3xl font-bold underline">Email: {data.email}</h3>
					{data.name && <h3>Name: {data.name}</h3>}
				</div>
			)}

			<button onClick={logout}>Exit</button>
		</div>
	);
};

export default User;
