import Image from "next/image";
import React from "react";
import CopywriteLine from "../CopywriteLine/CopywriteLine";
import Category from "../Category/Category";
import { footerCategories } from "@/app/constants";
import SocialMedia from "../SocialMedia/SocialMedia";

function FooterDesktop() {
	return (
		<div className="hidden sm:flex w-full items-start justify-between">
			<div className="flex items-center justify-center sm:items-start flex-col mt-12 sm:mt-0">
				<Image
					src="/assets/img/logo.svg"
					className="mb-[29px]"
					alt="Lobe logo"
					width={68}
					height={18}
				/>
				<div className="sm:pr-4">
					<CopywriteLine value="A product by Microsoft" />
					<CopywriteLine value="All rights reserved." />
					<CopywriteLine value="© Microsoft 2021" />
				</div>
			</div>

			{footerCategories.map((category) => (
				<Category
					key={category.name}
					name={category.name}
					links={category.links}
				/>
			))}
			<SocialMedia />
		</div>
	);
}

export default FooterDesktop;
