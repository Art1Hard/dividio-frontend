import { useEffect, useState } from "react";

const useDelayValue = (value: number) => {
	const [delayValue, setDelayValue] = useState(0);

	useEffect(() => {
		setDelayValue(0);

		const timeout = setTimeout(() => {
			setDelayValue(value);
		});

		return () => clearTimeout(timeout);
	}, [value]);

	return delayValue;
};

export default useDelayValue;
