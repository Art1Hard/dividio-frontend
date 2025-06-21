import type { Variants } from "framer-motion";

export const defaultScale: Variants = {
	initial: { opacity: 0, scale: 0.96 },
	animate: { opacity: 1, scale: 1 },
	exit: { opacity: 0, scale: 0.96 },
};
