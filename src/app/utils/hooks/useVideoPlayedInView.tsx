"use client";
import { useEffect, useRef } from "react";

function useVideoPlayedInView() {
	const videoRefs = useRef<HTMLVideoElement[]>([]);

	useEffect(() => {
		const playedVideosIndex = new Set<number>();
		const observerOptions = {
			root: null,
			threshold: 0.5, // Se déclenche lorsque la moitié de l'élément est visible
		};

		const handleVideoIntersection = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const videoIndex = parseInt(
						entry.target.getAttribute("data-index") || "0"
					);
					const currentVideoRef = videoRefs.current[videoIndex];
					const previousVideoRef = videoRefs.current[videoIndex - 1];

					if (playedVideosIndex.has(videoIndex)) return;

					if (videoIndex === 0) {
						currentVideoRef.play();
					} else {
						const checkPreviousVideoEnded = setInterval(() => {
							if (previousVideoRef.ended) {
								clearInterval(checkPreviousVideoEnded);
								currentVideoRef.play();
							}
						}, 100);
					}

					playedVideosIndex.add(videoIndex);
				}
			});
		};

		const observer = new IntersectionObserver(
			handleVideoIntersection,
			observerOptions
		);

		videoRefs.current.forEach((videoRef) => {
			if (videoRef) {
				observer.observe(videoRef);
			}
		});

		return () => observer.disconnect();
	}, []);

	return videoRefs;
}

export default useVideoPlayedInView;
