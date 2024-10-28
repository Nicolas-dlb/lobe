import Image from "next/image";
import React from "react";

interface TestimonyProps {
	profilPic: string;
	name: string;
	content: string;
	work: string;
}

function Testimony({ profilPic, name, content, work }: TestimonyProps) {
	return (
		<div
			className={`bg-white hover:scale-[1.03]  text-[18px] lg:text-[20px] xl:text-[22px] relative duration-300 transition-all p-6 shadow-[0_80px_120px_-40px_rgba(0,0,0,.1)] min-h-[450px] xl:min-h-[504px] lg:min-h-[460px] rounded-[20px] max-w-[292px] lg:max-w-[280px] xl:max-w-[336px] w-full m-3`}
		>
			<Image
				src={profilPic}
				alt=""
				className="rounded-full mb-10 xl:w-12 xl:h-12"
				width="40"
				height="40"
			/>
			<p className="pb-8 leading-normal duration-0">{content}</p>
			<div className="bottom-6 absolute">
				<p className="mb-1 lg:mb-2 font-medium">{name}</p>
				<p className="text-lightGrey font-medium mb-2">{work}</p>
			</div>
		</div>
	);
}

export default Testimony;
