"use client";
import React, { useEffect, useRef, useState } from "react";
import VideoDesktop from "./VideoDesktop/VideoDesktop";
import VideoMobile from "./VideoMobile/VideoMobile";

function HomeVideo() {
	const video1Ref = useRef<HTMLVideoElement>(null);
	const video2Ref = useRef<HTMLVideoElement>(null);
	const [isSynced, setIsSynced] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);

	useEffect(() => {
		const video1 = video1Ref.current;
		const video2 = video2Ref.current;

		const handleTimeUpdate = () => {
			if (isSynced) {
				setCurrentTime(video1!.currentTime);
			}
		};

		const handlePlay = () => {
			setIsSynced(true);
		};

		const handlePause = () => {
			setIsSynced(false);
		};

		const handleVisibilityChange = () => {
			if (document.visibilityState === "hidden") {
				video1!.pause();
				video2!.pause();
			} else {
				video1!.play();
				video2!.play();
			}
		};

		video1!.addEventListener("timeupdate", handleTimeUpdate);
		video1!.addEventListener("play", handlePlay);
		video1!.addEventListener("pause", handlePause);
		video2!.addEventListener("play", handlePlay);
		video2!.addEventListener("pause", handlePause);

		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
			video1!.removeEventListener("timeupdate", handleTimeUpdate);
			video1!.removeEventListener("play", handlePlay);
			video1!.removeEventListener("pause", handlePause);
			video2!.removeEventListener("play", handlePlay);
			video2!.removeEventListener("pause", handlePause);

			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, [isSynced]);

	useEffect(() => {
		const video2 = video2Ref.current;

		if (isSynced) {
			video2!.currentTime = currentTime;
		}
	}, [isSynced, currentTime]);

	return (
		<div className="w-80 h-56 sm:h-96 -z-10 overflow-visible flex items-center justify-center">
			<VideoDesktop videoRef={video1Ref} />
			<VideoMobile videoRef={video2Ref} />
		</div>
	);
}

export default HomeVideo;
