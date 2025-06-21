import { LoginForm } from "@src/features/auth/components/LoginForm";
import { RegisterForm } from "@src/features/auth/components/RegisterForm";
import { useState } from "react";

const AuthPage = () => {
	const [isRegisterForm, setIsRegisterForm] = useState<boolean>(false);

	return (
		<>
			{!isRegisterForm ? (
				<LoginForm onClickSwitchForm={() => setIsRegisterForm(true)} />
			) : (
				<RegisterForm onClickSwitchForm={() => setIsRegisterForm(false)} />
			)}
		</>
	);
};

export default AuthPage;
