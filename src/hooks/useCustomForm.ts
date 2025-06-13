import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type DefaultValues } from "react-hook-form";
import type { z, ZodTypeAny } from "zod";

function useCustomForm<T extends ZodTypeAny>(
	schema: T,
	defaultValues?: DefaultValues<z.TypeOf<T>> | undefined
) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting, isDirty },
		setError,
		resetField,
		watch,
	} = useForm<z.infer<typeof schema>>({
		mode: "onBlur",
		resolver: zodResolver(schema),
		defaultValues: defaultValues,
	});

	return {
		register,
		handleSubmit,
		errors,
		setError,
		isSubmitting,
		isDirty,
		reset,
		resetField,
		watch,
	};
}

export default useCustomForm;
