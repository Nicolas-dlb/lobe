"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarTabProps {
	name: string;
}

function SidebarTab({ name }: SidebarTabProps) {
	const pathname = usePathname();
	const isActive = pathname === `/docs/${name.toLowerCase()}`;
	return (
		<Link
			href={`/docs/${name.toLowerCase()}`}
			className={`text-[18px] rounded-[10px] font-medium transition-all duration-[100] py-3 w-[200px] pl-5 ${
				isActive && "text-white bg-green"
			}`}
		>
			{name}
		</Link>
	);
}

export default SidebarTab;
