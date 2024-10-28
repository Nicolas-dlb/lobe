import React from "react";
import ButtonDownloadHero from "../Hero/HeroInfo/ButtonDownloadHero/ButtonDownloadHero";

function CallToAction() {
	return (
		<div className="py-14 sm:py-20 xl:py-[100px] flex justify-center items-center flex-col">
			<h2 className="text-[38px] sm:text-[56px] xl:text-[64px] text-grey font-black max-w-[300px] sm:max-w-[400px] xl:max-w-[500px] text-center leading-[1.05] mb-8 sm:mb-12">
				Train your app with Lobe
			</h2>
			<ButtonDownloadHero />
		</div>
	);
}

export default CallToAction;
