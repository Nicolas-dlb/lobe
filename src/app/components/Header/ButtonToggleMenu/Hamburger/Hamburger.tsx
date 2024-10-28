import React from "react";
import Stick from "./Stick";

interface HamburgerProps {
	isMenuOpen: boolean;
}

function Hamburger({ isMenuOpen }: HamburgerProps) {
	return (
		<div className="block w-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<Stick dynamicStyle={isMenuOpen ? "rotate-45" : "-translate-y-1.5"} />
			<Stick dynamicStyle={isMenuOpen ? "opacity-0" : ""} />
			<Stick dynamicStyle={isMenuOpen ? "-rotate-45" : "translate-y-1.5"} />
		</div>
	);
}

export default Hamburger;
