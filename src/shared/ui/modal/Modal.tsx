import type { FC, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { modalFade, modalScale } from "@src/shared/animations";
import { IoClose } from "react-icons/io5";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
	return (
		<AnimatePresence>
			{isOpen && (
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
						className="bg-slate-200 dark:bg-slate-800 p-6 pt-12 rounded-xl w-full max-w-md relative cursor-default">
						<button className="absolute top-3 right-4" onClick={onClose}>
							<IoClose
								size={24}
								className="text-slate-600 dark:text-slate-300"
							/>
						</button>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
