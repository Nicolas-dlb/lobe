"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface StepIllustrationProps {
	name: string;
	altText: string;
}

function StepIllustrations({ name, altText }: StepIllustrationProps) {
	const videoMobile = useRef<HTMLVideoElement>(null);
	const videoDesktop = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const videoMobileElement = videoMobile.current as HTMLVideoElement;
		const videoDesktopElement = videoDesktop.current as HTMLVideoElement;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						videoMobileElement.play();
						videoDesktopElement.play();
					}
				});
			},
			{ threshold: 0.5 } // Vous pouvez ajuster le seuil selon vos besoins
		);

		observer.observe(videoMobileElement);
		observer.observe(videoDesktopElement);

		return () => {
			observer.unobserve(videoMobileElement);
			observer.unobserve(videoDesktopElement);
		};
	}, []);
	return (
		<div className="relative min-w-[600px] min-h-[320px] sm:min-w-[1500px] sm:min-h-[702px] xl:min-w-[1860px] xl:min-h-[871px]">
			<video
				ref={videoMobile}
				src={`/assets/steps/${name} Mobile.mp4`}
				className="sm:hidden relative z-20"
				playsInline
				muted
				width={600}
				title={altText}
			/>
			<Image
				src={`/assets/steps/${name} Mobile.jpg`}
				className="absolute left-0 top-0 w-full h-full sm:hidden"
				width={600}
				height={320}
				alt={altText}
			/>
			<video
				ref={videoDesktop}
				src={`/assets/steps/${name}.mp4`}
				className="hidden sm:flex relative z-20 w-full"
				playsInline
				muted
				width={1500}
				title={altText}
			/>
			<Image
				src={`/assets/steps/${name}.jpg`}
				className="hidden sm:flex absolute left-0 top-0 w-full h-full"
				width={1500}
				height={702}
				alt={altText}
			/>
		</div>
	);
}

export default StepIllustrations;
