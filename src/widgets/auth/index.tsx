import { useState } from "react";
import { Login } from "@src/features/auth/ui/Login";
import { Register } from "@src/features/auth/ui/Register";

const AuthWidget = () => {
	const [isRegister, setIsRegister] = useState<boolean>(false);

	return (
		<>
			{!isRegister ? (
				<Login onClickSwitchForm={() => setIsRegister(true)} />
			) : (
				<Register onClickSwitchForm={() => setIsRegister(false)} />
			)}
		</>
	);
};

export default AuthWidget;
