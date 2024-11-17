import React, { RefObject } from "react";

interface AutoPlayInViewProps {
	videoRef: RefObject<HTMLVideoElement>;
	src: string;
	index: number;
	title: string;
}

function FeatureVideo({ src, videoRef, title, index }: AutoPlayInViewProps) {
	return (
		<video
			data-index={index}
			ref={videoRef}
			title={title}
			className="rounded-[14px] z-20 relative 900:rounded-2xl mb-6 w-10 900:w-[46px] 900:h-[46px] xl:w-[56px] xl:h-[56px] xl:rounded-[20px]"
			src={src}
			muted
			playsInline
			width={40}
			height={40}
		/>
	);
}

export default FeatureVideo;
