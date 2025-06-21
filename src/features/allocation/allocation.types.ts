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
