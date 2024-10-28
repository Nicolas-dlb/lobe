import Image from "next/image";
import React from "react";

function Screenshot() {
	return (
		<div className="mx-8 flex justify-center max-w-[888px] sm:max-w-[892px] xl:max-w-[1072px]">
			<Image
				className="sm:hidden max-w-[120%]"
				alt="Screenshot of the Lobe app showcasing a machine learning dataset called California Plants."
				src="/assets/screenshot/screenshot.jpg"
				width={1360}
				height={900}
			/>
			<Image
				className="hidden sm:inline max-w-[120%]"
				alt="Screenshot of the Lobe app showcasing a machine learning dataset called California Plants."
				src="/assets/screenshot/screenshot@2x.jpg"
				width={1800}
				height={2720}
			/>
		</div>
	);
}

export default Screenshot;
