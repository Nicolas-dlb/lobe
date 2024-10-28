import React from "react";

function HeroDescription() {
	return (
		<div className="max-w-[300px] sm:max-w-[440px] ">
			<p className="900:hidden  mt-3 text-grey text-lg sm:text-2xl">
				Create machine learning models with a free, easy to use tool.
			</p>
			<p className="hidden leading-[1.45] 900:inline-flex mt-3 text-grey text-2xl xl:text-[26px] 900:text-start">
				Lobe helps you train machine learning models with a free, easy to use
				tool.
			</p>
		</div>
	);
}

export default HeroDescription;
