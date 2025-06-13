import type { FC, ReactNode } from "react";

interface ModalProps {
	onClose: () => void;
	children: ReactNode;
}

const Modal: FC<ModalProps> = ({ onClose, children }) => {
	return (
		<div
			onClick={onClose}
			className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
			<div
				onClick={(e) => e.stopPropagation()}
				className="bg-slate-800 p-6 rounded-xl w-full max-w-md relative">
				<button className="absolute top-2 right-2 text-white" onClick={onClose}>
					✕
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
