import React from "react";

function UseHeading() {
	return (
		<div className="px-8 sm:px-16 max-w-[968px] xl:max-w-[1088px] w-full">
			<h2 className="text-grey font-black text-[38px] sm:text-[56px] xl:text-[64px]">
				Label, Train, <span className="text-green">Use</span>
			</h2>
			<p className="text-grey text-[18px] sm:text-[24px] xl:text-[26px] mb-10 leading-[1.45] max-w-[600px] xl:max-w-[700px]">
				Lobe simplifies the process of machine learning into three easy steps.
				Collect and label your images. Train your model and understand your
				results. Then play, improve, and export your model.
			</p>
		</div>
	);
}

export default UseHeading;
