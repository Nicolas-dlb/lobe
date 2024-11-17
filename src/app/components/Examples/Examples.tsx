import React from "react";
import { examples, examples2 } from "@/app/constants";
import Slider from "./Slider/Slider";

function Examples() {
	return (
		<div className="bg-greyBG w-screen pb-14 sm:pb-20 -mt-16 xl:pb-[100px] overflow-x-hidden overflow-y-visible items-end flex justify-center flex-col">
			<div className="px-8 z-10 sm:px-16 max-w-[968px] xl:max-w-[1088px] w-full mb-8 sm:mb-12 xl:mb-16 self-center">
				<h2 className="text-grey text-[38px] mb-2  sm:mb-3 sm:text-[56px] xl:text-[64px] leading-[1.05] font-black">
					Lobe <span className="text-green">Exemples</span>
				</h2>
				<p className="text-[18px] sm:text-[24px] xl:text-[26px] leading-[1.45] sm:max-w-[600px] 900:max-w-[700px]">
					One tool, endless possibilities. Discover all the things you can train
					your app to do with Lobe.
				</p>
			</div>

			<Slider items={examples} />
			<Slider items={examples2} inverse />
		</div>
	);
}

export default Examples;
