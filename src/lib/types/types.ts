import type { IconType } from "react-icons";

export interface IUser {
	id: string;
	email: string;
	name?: string;
}

export interface IIncomeData {
	totalAmount: number;
	incomes: IIncome[];
}

export interface IIncome {
	id: string;
	title: string;
	amount: number;
}

export interface IAllocationData {
	freePercentage: number;
	freeAmount: number;
	allocations: IAllocation[];
}

export interface IAllocation {
	id: string;
	title: string;
	percentage: number;
	amount: number;
	color: string;
}

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
