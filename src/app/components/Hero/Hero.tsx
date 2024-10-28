import React from "react";
import HomeVideo from "./HomeVideo/HomeVideo";
import HeroInfo from "./HeroInfo/HeroInfo";
import ScrollToMadeSimple from "./ScrollToMadeSimple/ScrollToMadeSimple";

function Hero() {
	return (
		<section className="flex overflow-visible sm:mt-[80px] md:w-full sm:pb-28 900:pb-0 min-h-[calc(100vh-80px)] 900:mt-0 items-center justify-center flex-col 900:overflow-hidden">
			<div className="flex flex-col 900:justify-around max-w-5xl 900:w-full 900:px-10 xl:px-0 900:flex-row-reverse items-center 900:items-start">
				<HomeVideo />
				<HeroInfo />
			</div>
			<ScrollToMadeSimple />
		</section>
	);
}

export default Hero;
