import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface ModalProps {
	onClose: () => void;
	children: ReactNode;
}

const Modal: FC<ModalProps> = ({ onClose, children }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			onClick={onClose}
			className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 cursor-pointer">
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.8, opacity: 0 }}
				transition={{ duration: 0.2 }}
				onClick={(e) => e.stopPropagation()}
				className="bg-slate-200 dark:bg-slate-800 p-6 rounded-xl w-full max-w-md relative cursor-default">
				<button className="absolute top-3 right-4" onClick={onClose}>
					✕
				</button>
				{children}
			</motion.div>
		</motion.div>
	);
};

export default Modal;
