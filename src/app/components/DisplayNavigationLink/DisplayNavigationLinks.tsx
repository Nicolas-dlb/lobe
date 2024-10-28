import { navigationLinks } from "@/app/constants";
import React from "react";
import NavLink from "../Header/Navbar/NavLink";

type DisplayNavigationLinksProps = {
	closeMenuWithoutAnimation?: () => void;
};

function DisplayNavigationLinks({
	closeMenuWithoutAnimation,
}: DisplayNavigationLinksProps) {
	return (
		<>
			{navigationLinks.map((link) => (
				<NavLink
					key={link.name}
					name={link.name}
					href={link.path}
					closeMenuWithoutAnimation={closeMenuWithoutAnimation}
				/>
			))}
		</>
	);
}

export default DisplayNavigationLinks;
