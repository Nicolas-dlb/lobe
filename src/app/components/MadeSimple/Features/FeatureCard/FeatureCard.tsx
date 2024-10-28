import React from "react";
import FeatureVideo from "./FeatureVideo/FeatureVideo";
import { FeatureWithoutId } from "@/app/utils/Types/Types";
import Image from "next/image";

interface FeatureProps extends FeatureWithoutId {
	videoRef: any;
	index: number;
}

function FeatureCard({
	video,
	img,
	title,
	description,
	videoRef,
	altText,
	index,
}: FeatureProps) {
	return (
		<div className="flex items-start flex-1 box-border m-4 justify-center 900:flex-col 900:max-w-[334px]">
			<div className="relative min-w-max">
				<FeatureVideo
					index={index}
					src={video}
					videoRef={videoRef}
					title={altText}
				/>
				<Image
					src={img}
					alt={altText}
					width={40}
					height={40}
					className="absolute left-0 top-0 rounded-[14px] 900:rounded-2xl mb-6 min-w-[40px] 900:w-[46px] 900:h-[46px] xl:w-[56px] xl:h-[56px] xl:rounded-[20px]"
				/>
			</div>
			<div className="ml-4 900:ml-0">
				<h3 className="font-black text-grey text-lg mb-1 900:mb-2 sm:text-xl xl:text-[22px]">
					{title}
				</h3>
				<p className="text-[18px] leanding-[1.5] 900:text-[20px] xl:text-[22px]">
					{description}
				</p>
			</div>
		</div>
	);
}

export default FeatureCard;
