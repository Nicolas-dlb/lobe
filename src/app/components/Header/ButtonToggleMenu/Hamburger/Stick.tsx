import React from "react";

interface StickProps {
	dynamicStyle: string;
}

function Stick({ dynamicStyle }: StickProps) {
	return (
		<span
			aria-hidden="true"
			className={`block absolute rounded h-0.5 w-4 bg-current transform transition duration-500 ease-in-out ${dynamicStyle}`}
		></span>
	);
}

export default Stick;
