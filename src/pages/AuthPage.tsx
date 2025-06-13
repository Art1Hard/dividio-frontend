import { LoginForm } from "@src/components/auth/LoginForm";
import { RegisterForm } from "@src/components/auth/RegisterForm";
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
