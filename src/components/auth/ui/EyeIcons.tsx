// Иконка открытого глаза (показать пароль)
export const EyeOpenIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		viewBox="0 0 24 24"
		className="w-5 h-5">
		<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
		<circle cx={12} cy={12} r={3} />
	</svg>
);

// Иконка закрытого глаза (скрыть пароль)
export const EyeClosedIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		viewBox="0 0 24 24"
		className="w-5 h-5">
		{/* Контур глаза */}
		<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
		{/* Зрачок/радужка — перевёрнутая дуга, чуть выше */}
		<path d="M8 11.2a4 4 0 0 0 8 0" />
	</svg>
);
