import React from "react";
import Models from "./Models/Models";

function Templates() {
	return (
		<div className="flex flex-col 900:max-w-[991px] xl:max-w-[1088px] w-screen 900:w-full ">
			<div className="px-8 sm:px-[65px] mb-12">
				<h3 className="text-[32px] leading-[1.3] font-bold text-grey sm:text-[40px] xl:text-[48px] mb-1">
					<span className="text-green">Project</span> Templates
				</h3>
				<p className="text-[18px] leading-[1.45] text-grey sm:text-[24px] xl:text-[26px] max-w-[600px] xl:max-w-[650px]">
					Lobe will automatically select the right machine learning architecture
					for your project. Image classification is available now, with more
					templates coming soon.
				</p>
			</div>
			<Models />
		</div>
	);
}

export default Templates;
