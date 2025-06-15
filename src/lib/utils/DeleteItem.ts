import { toast } from "sonner";

const deleteItem = async <T>(
	deleteHandler: () => Promise<T>,
	title: string
) => {
	const result = window.confirm(
		`Вы уверены, что хотите удалить элемент "${title}"?`
	);
	if (!result) return;

	toast.promise(deleteHandler(), {
		loading: `Удаление "${title}"...`,
		success: `Элемент "${title}" успешно удален`,
		error: `Ошибка при удалении "${title}"`,
	});
};

export default deleteItem;
