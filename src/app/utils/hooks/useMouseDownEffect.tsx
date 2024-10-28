import { useCallback, useState } from "react";

function useMouseDownEffect() {
	const [effect, setEffect] = useState(false);

	const handleMouseDown = useCallback(() => {
		setEffect(true);

		document.addEventListener(
			"mouseup",
			() => {
				setEffect(false);
			},
			{ once: true }
		);
	}, []);

	return { handleMouseDown, effect };
}

export default useMouseDownEffect;
