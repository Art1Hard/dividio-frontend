interface AccountFieldProps {
	title: string;
	content: string;
}

const AccountField = ({ title, content }: AccountFieldProps) => {
	return (
		<div>
			<h3 className="text-sm">{title}</h3>
			<p className="text-sm @xs:text-lg">{content}</p>
		</div>
	);
};

export default AccountField;
