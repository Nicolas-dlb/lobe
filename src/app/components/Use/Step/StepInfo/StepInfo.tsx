import React from "react";

interface StepInfoProps {
	inverse?: boolean;
	title: string;
	description: string;
}
function StepInfo({ inverse, title, description }: StepInfoProps) {
	const splittedTitle = title.split(/ (.*)/, 2);
	const greenHeading = splittedTitle[0];
	const greyHeading = splittedTitle[1];

	return (
		<div
			className={`sm:-mt-[200px] relative z-30 w-full px-8 sm:px-16 mb-10 max-w-[968px] xl:max-w-[1088px] ${
				inverse && "sm:flex sm:justify-end"
			}`}
		>
			<div className="w-fit">
				<h2 className="text-grey font-black text-[32px] sm:text-[40px] xl:text-[48px] mb-1">
					<span className="text-green">{greenHeading}</span> {greyHeading}
				</h2>
				<p
					className={`text-[18px] sm:text-[24px] xl:text-[26px] leading-[1.45] xl:max-w-[612px] ${
						inverse ? "max-w-[500px]" : "max-w-[480px]"
					}`}
				>
					{description}
				</p>
			</div>
		</div>
	);
}

export default StepInfo;
