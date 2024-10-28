import Image from "next/image";
import React from "react";

interface ExampleProps {
	name: string;
	video: string;
	img: string;
	altText: string;
	title: string;
	description: string;
}

function Example({
	name,
	video,
	img,
	altText,
	title,
	description,
}: ExampleProps) {
	return (
		<div
			id={name}
			className="relative w-full max-w-[428px] xl:max-w-[518px] shadow-[0_100px_140px_-50px_rgba(0,0,0,.25),0_0_20px_0_rgba(0,0,0,.03)] rounded-[20px] m-5 overflow-hidden"
		>
			<div className="relative max-h-[290px] xl:max-h-[351.5px]">
				<Image
					src={img}
					alt={altText}
					className="absolute top-0 left-0 w-full"
					height={290}
					width={428}
				/>
				<video
					src={video}
					className="w-full z-10 relative"
					title={altText}
					autoPlay
					playsInline
					muted
					loop
					height={290}
					width={428}
				/>
			</div>
			<div className="p-6 text-[18px] xl:text-[22px]">
				<h2 className="font-black mb-1">{title}</h2>
				<p className="mb-2">{description}</p>
			</div>
		</div>
	);
}

export default Example;
