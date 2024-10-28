import React, { RefObject, VideoHTMLAttributes } from "react";

interface VideoProps {
	src: string;
	width: number;
	className?: string;
	videoRef?: RefObject<HTMLVideoElement>;
}

function AutoPlayVideo({
	src,
	width,
	className,
	videoRef,
	...props
}: VideoProps & VideoHTMLAttributes<HTMLVideoElement>) {
	return (
		<video
			className={className}
			autoPlay
			playsInline
			loop
			muted
			ref={videoRef}
			width={width}
			{...props}
		>
			<source src={src} />
		</video>
	);
}

export default AutoPlayVideo;
