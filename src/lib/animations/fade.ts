import type { Variants } from "framer-motion";

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
