"use client";
import React from "react";
import FeatureCard from "./FeatureCard/FeatureCard";
import { features } from "../../../constants";
import useVideoPlayedInView from "@/app/utils/hooks/useVideoPlayedInView";

function Features() {
	const videoRefs = useVideoPlayedInView();
	return (
		<div className="flex flex-col box-border items-start px-6 sm:px-14 900:pl-[48px] xl:pl-[56px] sm:gap-0  900:flex-row max-w-[991px] xl:max-w-[1108px] -mt-[10px] sm:-mt-[32px] mb-[56px] sm:mb-[80px] xl:mb-[100px] xl:-mt-[56px] ">
			{features.map((feature, index) => (
				<FeatureCard
					key={feature.id}
					videoRef={(el: HTMLVideoElement) => (videoRefs.current[index] = el!)}
					index={index}
					{...feature}
				/>
			))}
		</div>
	);
}

export default Features;
