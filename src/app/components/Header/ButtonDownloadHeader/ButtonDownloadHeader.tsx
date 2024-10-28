"use client";
import React, { useEffect, useState } from "react";
import ButtonDownload from "../../ButtonDownload/ButtonDownload";
import { usePathname } from "next/navigation";

function ButtonDownloadHeader() {
	const [greenBackground, setGreenBackground] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		if (pathname !== "/") {
			setGreenBackground(true);
			return;
		} else {
			if (greenBackground) setGreenBackground(false);
		}

		const options = { passive: true };

		let state = false;

		const checkScrollValue = () => {
			const { scrollY } = window;
			if (scrollY > 80 && !state) {
				setGreenBackground(true);
				state = true;
			} else if (scrollY < 80 && state) {
				setGreenBackground(false);
				state = false;
			}
		};

		checkScrollValue();

		document.addEventListener("scroll", checkScrollValue, options);

		return () => document.removeEventListener("scroll", checkScrollValue);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	return (
		<ButtonDownload
			className={`hidden md:flex w-32 h-12 ease-in-out duration-200 text-lg ${
				greenBackground ? "bg-green text-white" : "bg-[#eef0f2] text-grey"
			}`}
		/>
	);
}

export default ButtonDownloadHeader;
