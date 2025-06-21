export interface IIncomeData {
	totalAmount: number;
	incomes: IIncome[];
}

export interface IIncome {
	id: string;
	title: string;
	amount: number;
}
