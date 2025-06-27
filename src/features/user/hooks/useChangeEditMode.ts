import { useState } from "react";

const useChangeEditMode = () => {
	const [editMode, setEditMode] = useState(false);

	const disableEditMode = () => {
		setEditMode(false);
	};

	const enableEditMode = () => setEditMode(true);

	return { editMode, enableEditMode, disableEditMode };
};

export default useChangeEditMode;
