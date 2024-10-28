"use client";
import React from "react";
import ModelCard from "./ModelCard/ModelCard";
import useVideoPlayedInView from "@/app/utils/hooks/useVideoPlayedInView";
import { models } from "@/app/constants";

function Models() {
	const videoRefs = useVideoPlayedInView();
	return (
		<div className="flex overflow-scroll 900:overflow-visible no-scrollbar box-border px-3 sm:px-12">
			{models.map((model, index) => (
				<ModelCard
					key={model.id}
					index={index}
					videoRef={(el: HTMLVideoElement) => (videoRefs.current[index] = el!)}
					{...model}
				/>
			))}
		</div>
	);
}

export default Models;
