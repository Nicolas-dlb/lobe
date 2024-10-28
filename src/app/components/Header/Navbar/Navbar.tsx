import React from "react";
import DisplayNavigationLinks from "../../DisplayNavigationLink/DisplayNavigationLinks";

function Navbar() {
	return (
		<nav className="gap-10 lg:gap-11 hidden md:flex transition-all duration-500 md:flex-row">
			<DisplayNavigationLinks />
		</nav>
	);
}

export default Navbar;
