"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface NavLinkProps {
	name: string;
	href: string;
	closeMenuWithoutAnimation?: () => void;
}

function NavLink({ name, href, closeMenuWithoutAnimation }: NavLinkProps) {
	const [effect, setEffect] = useState(false);
	const pathname = usePathname();
	const isActive =
		pathname === href || (pathname.includes("docs") && name === "Help");

	return (
		<Link
			onClick={() => {
				!isActive && setEffect(true);
				closeMenuWithoutAnimation && closeMenuWithoutAnimation();
			}}
			onAnimationEnd={() => setEffect(false)}
			href={href}
			className={`transition-all duration-300 text-xl md:text-lg hover:text-grey font-medium md:hover:scale-[1.03] ${
				effect && "md:animate-click"
			} ${isActive ? "text-grey" : "text-lightGrey"}`}
		>
			{name}
		</Link>
	);
}

export default NavLink;
