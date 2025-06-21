import type { IconType } from "react-icons";

export interface IStatisticItem {
	title: string;
	postfix: string;
	value: number;
	icon: {
		IconComponent: IconType;
		bgColor?: string;
		color?: string;
	};
}

export interface IEditFutures {
	enableEditMode: () => void;
	disableEditMode: () => void;
	editMode: boolean;
}
