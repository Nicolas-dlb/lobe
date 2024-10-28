import React from "react";

interface AvailabilityProps {
	available: boolean;
}

function Availability({ available }: AvailabilityProps) {
	const theme = available ? "bg-green text-white" : "bg-[#eef0f2] text-grey";
	const sentence = available ? "AVAILABLE NOW" : "COMING SOON";

	return (
		<span
			className={`w-max font-black mt-6 900:mt-10 mb-3 xl:mb-5 py-[6px] px-3 text-center text-[12px] tracking-[0.8px] rounded-[50px] ${theme}`}
		>
			<p>{sentence}</p>
		</span>
	);
}

export default Availability;
