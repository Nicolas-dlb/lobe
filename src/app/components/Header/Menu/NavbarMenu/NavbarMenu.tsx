import React from "react";
import DisplayNavigationLinks from "@/app/components/DisplayNavigationLink/DisplayNavigationLinks";

interface NavbarMenuProps {
	isMenuOpen?: boolean;
	closeMenuWithoutAnimation: () => void;
}

function NavbarMenu({
	isMenuOpen,
	closeMenuWithoutAnimation,
}: NavbarMenuProps) {
	return (
		<nav
			className={`flex-col flex gap-9 md:gap-10 lg:gap-11 py-9 transition-all duration-500 md:flex-row ${
				isMenuOpen ? "opacity-100" : "opacity-0 "
			}`}
		>
			<DisplayNavigationLinks
				closeMenuWithoutAnimation={closeMenuWithoutAnimation}
			/>
		</nav>
	);
}

export default NavbarMenu;
