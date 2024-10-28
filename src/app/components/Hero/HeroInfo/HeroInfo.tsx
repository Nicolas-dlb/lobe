"use client";
import React, { useContext } from "react";
import HeroHeading from "./HeroHeading/HeroHeading";
import ButtonDownloadHero from "./ButtonDownloadHero/ButtonDownloadHero";
import HeroDescription from "./HeroDescription/HeroDescription";
import ButtonWatchTour from "./ButtonWatchTour/ButtonWatchTour";
import { WatchTourContext } from "@/app/Providers/WatchTourProvider";

function HeroInfo() {
	const { openModal } = useContext(WatchTourContext);
	return (
		<div className="text-center 900:items-start justify-start flex flex-col items-center">
			<HeroHeading />
			<HeroDescription />
			<div className="flex items-center gap-3 mt-8">
				<ButtonDownloadHero />
				<ButtonWatchTour onClick={openModal} />
			</div>
		</div>
	);
}

export default HeroInfo;
