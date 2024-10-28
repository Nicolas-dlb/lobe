import React, { Dispatch, SetStateAction } from "react";

interface YoutubeFrameProps {
	setFrameLoaded: Dispatch<SetStateAction<boolean>>;
}

function YoutubeFrame({ setFrameLoaded }: YoutubeFrameProps) {
	return (
		<div className="relative pb-[62.42%] sm:pb-[49.96%] h-0 sm:rounded-[20px] overflow-hidden w-full sm:w-4/5">
			<iframe
				className="top-0 aspect-video left-0 w-full h-full absolute shadow-[0_100px_160px_-60px_rgba(0,0,0,.4)]"
				src="https://www.youtube-nocookie.com/embed/Mdcw3Sb98DA?autoplay=1&amp;modestbranding=1"
				allow="autoplay; encrypted-media"
				allowFullScreen
				onLoad={() => setFrameLoaded(true)}
				sandbox="allow-scripts allow-same-origin allow-presentation"
				title="Introducing Lobe | Build your first machine learning model in ten minutes."
				width={800}
				height={550}
			/>
		</div>
	);
}

export default YoutubeFrame;
