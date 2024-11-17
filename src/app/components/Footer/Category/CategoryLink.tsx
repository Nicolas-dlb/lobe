import Link from "next/link";
import React from "react";

interface LinkProps {
	url: string;
	name: string;
}

function CategoryLink({ url, name }: LinkProps) {
	return (
		<Link
			href={url}
			className="hover:scale-105 rounded-sm outline-offset-8 mb-4 sm:mb-6 transition-all duration-200 leading-none"
		>
			{name}
		</Link>
	);
}

export default CategoryLink;
