"use client";
import { WatchTourContext } from "@/app/Providers/WatchTourProvider";
import Image from "next/image";
import React, { useContext } from "react";

function WatchTourPoster() {
	const { openModal } = useContext(WatchTourContext);

	return (
		<button
			onClick={openModal}
			className="mt-8 max-w-[960px] transition-all duration-[400ms] rounded-3xl overflow-hidden hover:shadow-[0_100px_140px_-50px_rgba(0,0,0,.25),0_0_20px_0_rgba(0,0,0,.03)] hover:scale-[1.01]"
		>
			<Image src="/assets/tour/video.jpg" alt="" width={2000} height={1126} />
		</button>
	);
}

export default WatchTourPoster;
