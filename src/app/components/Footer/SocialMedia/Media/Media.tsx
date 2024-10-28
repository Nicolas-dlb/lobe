import Image from "next/image";
import React from "react";

interface MediaProps {
	link: string;
	img: string;
	altText: string;
}

function Media({ link, img, altText }: MediaProps) {
	return (
		<a
			href={link}
			className="rounded-[50%] m-2 w-10 h-10 xl:w-8 xl:h-8 bg-green flex items-center justify-center hover:scale-[1.07] transition-all duration-100"
		>
			<Image
				src={img}
				className={`xl:w-[22px]`}
				alt={altText}
				width="30"
				height="30"
			/>
		</a>
	);
}

export default Media;
