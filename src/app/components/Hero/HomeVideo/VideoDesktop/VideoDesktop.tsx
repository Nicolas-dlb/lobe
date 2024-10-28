import React, { RefObject } from "react";
import AutoPlayVideo from "../../../AutoPlayVideo/AutoPlayVideo";
import Image from "next/image";

function VideoDesktop({ videoRef }: { videoRef: RefObject<HTMLVideoElement> }) {
	return (
		<div className="relative w-full h-full flex items-center justify-center opacity-0 sm:opacity-100 ">
			<AutoPlayVideo
				id="HomeVideo"
				videoRef={videoRef}
				title="Video showing exemples of ways to use Lobe to easily create machine learning models."
				className="sm:visible z-10 sm:relative absolute sm:max-w-[500px] xl:max-w-[600px]"
				src="./assets/hero/Home.mp4"
				width={600}
			/>
			<Image
				src="/assets/hero/Home.jpg"
				alt="Video showing exemples of ways to use Lobe to easily create machine learning models."
				className="absolute sm:max-w-[500px] xl:max-w-[600px]"
				width={680}
				height={760}
			/>
		</div>
	);
}

export default VideoDesktop;
