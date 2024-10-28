import React from "react";
import CategoryLink from "./CategoryLink";

interface CategoryProps {
	name: string;
	links: { name: string; url: string }[];
}

function Category({ name, links }: CategoryProps) {
	return (
		<div className="flex flex-col items-center sm:mb-0 sm:items-start justify-center flex-1 sm:flex-none min-w-[175px] sm:min-w-min mb-[72px] px-4">
			<h4 className="font-bold mb-4 sm:mb-[31.2px] leading-none">{name}</h4>
			<div className="flex flex-col items-center sm:items-start justify-center">
				{links.map((link) => (
					<CategoryLink key={link.name} name={link.name} url={link.url} />
				))}
			</div>
		</div>
	);
}

export default Category;
