import React from "react";
import SidebarTab from "./SidebarTab/SidebarTab";
import { docsLinks } from "@/app/constants";

function Sidebar() {
	return (
		<div className="flex-col mr-20 hidden lg:flex">
			{docsLinks.map((link) => (
				<SidebarTab key={link.name} name={link.name} />
			))}
		</div>
	);
}

export default Sidebar;
