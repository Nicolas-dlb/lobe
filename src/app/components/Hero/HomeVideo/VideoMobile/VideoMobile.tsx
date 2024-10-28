import React, { RefObject } from "react";
import AutoPlayVideo from "../../../AutoPlayVideo/AutoPlayVideo";
import Image from "next/image";

function VideoMobile({ videoRef }: { videoRef: RefObject<HTMLVideoElement> }) {
	return (
		<div className="relative sm:invisible visible w-full h-full flex items-center justify-center">
			<AutoPlayVideo
				id="HomeVideo"
				videoRef={videoRef}
				title="Video showing exemples of ways to use Lobe to easily create machine learning models."
				className="sm:absolute z-10 max-w-[400px]"
				src="./assets/hero/HomeMobile.mp4"
				width={400}
			/>
			<Image
				src="/assets/hero/HomeMobile.jpg"
				alt="Video showing exemples of ways to use Lobe to easily create machine learning models."
				className="absolute max-w-[400px]"
				width={680}
				height={760}
			/>
		</div>
	);
}

export default VideoMobile;
