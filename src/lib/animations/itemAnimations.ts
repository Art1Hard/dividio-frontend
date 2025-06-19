import type { Variants } from "framer-motion";

export const defaultShowAnimation: Variants = {
	initial: { opacity: 0, scale: 0.96 },
	animate: { opacity: 1, scale: 1 },
	exit: { opacity: 0, scale: 0.96 },
};

export const stepsFade: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const itemFade = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};
