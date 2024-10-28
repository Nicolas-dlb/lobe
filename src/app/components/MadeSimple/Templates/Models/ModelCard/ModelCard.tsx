import { Model } from "@/app/utils/Types/Types";
import React from "react";
import Availability from "./Availability/Availability";
import Image from "next/image";

interface ModelCardProps extends Model {
	videoRef: (el: HTMLVideoElement) => HTMLVideoElement;
	index: number;
}

function ModelCard({
	videoRef,
	description,
	available,
	name,
	img,
	video,
	altText,
	index,
}: ModelCardProps) {
	return (
		<div className="flex flex-col mb-16 flex-1 m-4 items-center text-center box-border shadow-[0_80px_120px_-40px_rgba(0,0,0,.1)] bg-white rounded-[20px] xl:rounded-[28px] p-6 xl:p-8 min-h-[224px] min-w-[262px] 900:min-w-0 max-w-[332px]">
			<div className="mb-4 relative 900:mb-6 w-[110px] 900:w-[130px] 900:h-[86px] xl:w-[160px] xl:h-[106px] h-[70px]">
				<video
					data-index={index}
					ref={videoRef}
					src={video}
					title={altText}
					playsInline
					muted
					className="z-[1] relative"
				/>
				<Image
					src={img}
					alt={altText}
					width={110}
					height={70}
					className="absolute top-0 left-0 w-full"
				/>
			</div>
			<h4 className="text-grey 900:text-[20px] leading-[1.5] xl:text-[22px] font-black text-lg mb-1 900:mb-2">
				{name}
			</h4>
			<p className="text-[18px] 900:text-[20px] xl:text-[22px] leading-[1.5] whitespace-pre-wrap ">
				{description}
			</p>
			<Availability available={available} />
		</div>
	);
}

export default ModelCard;
