import React, { Dispatch, SetStateAction, useCallback } from "react";
import Hamburger from "./Hamburger/Hamburger";

interface ButtonMenuProps {
	isMenuOpen: boolean;
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

function ButtonToggleMenu({ isMenuOpen, setIsMenuOpen }: ButtonMenuProps) {
	const toggleMenu = useCallback(() => {
		setIsMenuOpen((prevState: boolean) => !prevState);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<button
			className="text-gray-700 md:hidden rounded-full w-9 h-9 relative focus:outline-none bg-[#eef0f2]"
			onClick={toggleMenu}
		>
			<span className="sr-only">Ouvrir le menu principal</span>
			<Hamburger isMenuOpen={isMenuOpen} />
		</button>
	);
}

export default ButtonToggleMenu;
