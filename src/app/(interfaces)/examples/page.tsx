import React from "react";
import Example from "./Example/Example";
import { examples, examples2 } from "@/app/constants";
import IntroSection from "@/app/components/IntroSection/IntroSection";

function page() {
	const data = [...examples, ...examples2];

	return (
		<section className="pt-10 flex flex-col items-center justify-center">
			<IntroSection
				section="Examples"
				description="One tool, endless possibilities. Discover all the machine learning models you can train with Lobe."
			/>
			<div className="flex flex-wrap items-center justify-center">
				{data.map((example) => (
					<Example key={example.name} {...example} />
				))}
			</div>
		</section>
	);
}

export default page;
