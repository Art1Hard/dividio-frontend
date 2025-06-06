import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z, ZodTypeAny } from "zod";

function useCustomForm<T extends ZodTypeAny>(schema: T) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
		setError,
		resetField,
	} = useForm<z.infer<typeof schema>>({
		mode: "onBlur",
		resolver: zodResolver(schema),
	});

	return {
		register,
		handleSubmit,
		errors,
		setError,
		isSubmitting,
		reset,
		resetField,
	};
}

export default useCustomForm;
