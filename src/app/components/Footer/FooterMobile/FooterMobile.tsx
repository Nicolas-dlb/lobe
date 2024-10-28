import React from "react";
import Category from "../Category/Category";
import { footerCategories } from "@/app/constants";
import SocialMedia from "../SocialMedia/SocialMedia";
import Image from "next/image";
import CopywriteLine from "../CopywriteLine/CopywriteLine";

function FooterMobile() {
	return (
		<div className="sm:hidden">
			<div className="flex sm:flex-1 flex-wrap sm:flex-nowrap items-start justify-center sm:items-start sm:text-start sm:flex-row max-w-[350px] sm:max-w-none">
				{footerCategories.map((category) => (
					<Category
						key={category.name}
						name={category.name}
						links={category.links}
					/>
				))}
				<SocialMedia />
			</div>
			<div className="flex items-center justify-center sm:items-start flex-col mt-12 sm:mt-0">
				<Image
					src="/assets/img/logo.svg"
					className="mb-[29px]"
					alt="Lobe logo"
					width={68}
					height={18}
				/>
				<CopywriteLine value="A product by Microsoft" />
				<CopywriteLine value="All rights reserved." />
				<CopywriteLine value="© Microsoft 2021" />
			</div>
		</div>
	);
}

export default FooterMobile;
