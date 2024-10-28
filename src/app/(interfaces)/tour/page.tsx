import IntroSection from "@/app/components/IntroSection/IntroSection";
import React from "react";
import WatchTourPoster from "./WatchTourPoster/WatchTourPoster";

function page() {
	return (
		<section className="pt-10 flex flex-col items-center justify-center">
			<IntroSection
				section="Tour"
				description="Build your first machine learning model in ten minutes. No code or experience required."
			/>
			<WatchTourPoster />
		</section>
	);
}

export default page;
