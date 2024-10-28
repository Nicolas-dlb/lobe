import IntroSection from "@/app/components/IntroSection/IntroSection";
import React, { ReactNode } from "react";
import Sidebar from "./Sidebar/Sidebar";

function layout({ children }: { children: ReactNode }) {
	return (
		<section className="flex flex-col items-center justify-center pt-12">
			<IntroSection
				section="Help"
				description="Everything you need to know to train great machine learning models with Lobe."
			/>
			<div className="flex justify-center max-w-[600px] w-full lg:max-w-none px-8">
				<Sidebar />
				{children}
			</div>
		</section>
	);
}

export default layout;
