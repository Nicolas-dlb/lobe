import { useEffect, useState } from "react";

export const useWidth = () => {
	const [width, setWidth] = useState(0); // default width, detect on server.

	useEffect(() => {
		setWidth(window.innerWidth);
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return width;
};
