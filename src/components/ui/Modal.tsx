import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { modalFade, modalScale } from "@src/lib/animations";

interface ModalProps {
	onClose: () => void;
	children: ReactNode;
}

const Modal: FC<ModalProps> = ({ onClose, children }) => {
	return (
		<motion.div
			variants={modalFade}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.1 }}
			onClick={onClose}
			className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 cursor-pointer">
			<motion.div
				variants={modalScale}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ duration: 0.1 }}
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
