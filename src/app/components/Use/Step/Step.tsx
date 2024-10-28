import React from "react";
import StepIllustrations from "./StepIllustrations/StepIllustrations";
import StepInfo from "./StepInfo/StepInfo";

interface StepProps {
	name: string;
	title: string;
	description: string;
	inverse?: boolean;
	altText: string;
}

function Step({ name, title, description, inverse, altText }: StepProps) {
	return (
		<div className="w-screen flex flex-col items-center justify-center">
			<StepIllustrations name={name} altText={altText} />
			<StepInfo inverse={inverse} title={title} description={description} />
		</div>
	);
}

export default Step;
