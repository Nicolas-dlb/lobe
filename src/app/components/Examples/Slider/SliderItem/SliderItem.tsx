"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SliderItemProps {
	name: string;
	img: string;
	video: string;
	altText: string;
	title: string;
}

function SliderItem({ img, name, video, altText, title }: SliderItemProps) {
	return (
		<a
			href={`/examples/#${name}`}
			className="rounded-3xl m-[10px] sm:m-4 xl:m-5 relative transition-all duration-300 ease min-w-[280px] h-[190px] sm:min-w-[420px] sm:h-[285px] xl:min-w-[500px] xl:h-[339px] hover:shadow-[0_80px_120px_-40px_rgba(0,0,0,.5),0_50px_100px_-40px_rgba(0,0,0,.3)] shadow-[0_50px_100px_-40px_rgba(0,0,0,.3)] overflow-hidden hover:scale-105 after:bg-[linear-gradient(180deg,rgba(0,0,0,.3),transparent)] after:content-[''] after:absolute after:w-full after:h-full after:left-0 after:top-0"
		>
			<Image
				src={img}
				className="absolute top-0 left-0 w-full"
				alt={altText}
				width={300}
				height={300}
			/>
			<video
				src={video}
				autoPlay
				playsInline
				title={altText}
				muted
				loop
				className="w-full h-full relative"
				width={300}
				height={300}
			/>
			<p className="font-bold text-white absolute top-3 left-6 z-20 text-[18px] sm:text-[20px] xl:text-[28px]">
				{title}
			</p>
		</a>
	);
}

export default SliderItem;
