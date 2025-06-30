import { defaultScale } from "@src/shared/animations";
import AccountWidget from "@src/widgets/account";
import { motion } from "framer-motion";

const User = () => {
	return (
		<motion.div
			variants={defaultScale}
			animate="animate"
			initial="initial"
			className="h-full flex items-center px-3 py-6">
			<AccountWidget />
		</motion.div>
	);
};

export default User;
