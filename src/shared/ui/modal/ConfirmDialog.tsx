import type { ReactNode } from "react";
import BaseButton from "../../../shared/ui/buttons/BaseButton";
import { AnimatePresence, motion } from "framer-motion";
import { modalFade, modalScale } from "@src/shared/animations";
import { useTranslation } from "react-i18next";
import { CancelButton } from "../buttons";

interface ConfirmDialogProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	title?: string;
	children?: ReactNode;
}

const ConfirmDialog = ({
	title,
	children,
	isOpen,
	onClose,
	onConfirm,
}: ConfirmDialogProps) => {
	const { t } = useTranslation();

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					variants={modalFade}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{ duration: 0.1 }}
					className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4 cursor-pointer"
					onClick={onClose}>
					<motion.div
						variants={modalScale}
						initial="initial"
						animate="animate"
						exit="exit"
						transition={{ duration: 0.1 }}
						className="bg-slate-200 dark:bg-slate-800 rounded-xl p-6 max-w-md w-full shadow-lg cursor-default"
						onClick={(e) => e.stopPropagation()}>
						<h2 className="text-xl font-semibold mb-2">{title}</h2>
						{children && (
							<p className="text-sm text-slate-700 dark:text-slate-300 mb-6">
								{children}
							</p>
						)}

						<div className="flex justify-end gap-3">
							<CancelButton onClick={onClose} />
							<BaseButton
								color="danger"
								className="font-semibold"
								onClick={onConfirm}>
								{t("confirm.confirm")}
							</BaseButton>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ConfirmDialog;
