import { LoginForm } from "@src/components/Auth/LoginForm";
import { RegisterForm } from "@src/components/Auth/RegisterForm";
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
