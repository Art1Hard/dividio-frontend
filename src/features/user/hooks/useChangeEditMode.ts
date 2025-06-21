import type { IEditFutures } from "@src/lib/types/types";
import { useState } from "react";

const useChangeEditMode = () => {
	const [editMode, setEditMode] = useState(false);

	const disableEditMode = () => {
		setEditMode(false);
	};

	const enableEditMode = () => setEditMode(true);

	return { editMode, enableEditMode, disableEditMode } as IEditFutures;
};

export default useChangeEditMode;
