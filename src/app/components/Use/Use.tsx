import React from "react";
import UseHeading from "./UseHeading/UseHeading";
import Step from "./Step/Step";
import { steps } from "@/app/constants";

function Use() {
	return (
		<div className="flex w-screen flex-col pt-14 pb-8 sm:pb-20 items-center justify-center overflow-hidden">
			<UseHeading />
			{steps.map((step) => (
				<Step key={step.name} {...step} />
			))}
		</div>
	);
}

export default Use;
