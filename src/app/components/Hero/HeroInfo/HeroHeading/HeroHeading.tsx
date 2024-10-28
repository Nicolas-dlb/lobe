import React from "react";
import HeroHeadingDynamic from "./HeroHeadingDynamic/HeroHeadingDynamic";

function HeroHeading() {
	return (
		<h1 className="text-[38px] 900:text-start flex-col flex 900:text-[56px] xl:text-[64px] sm:text-[56px] text-grey font-black">
			<span className="900:-translate-x-2.5 -z-10 leading-[1.05] xl:-translate-x-[11px]">
				Train apps to
			</span>
			<HeroHeadingDynamic />
		</h1>
	);
}

export default HeroHeading;
