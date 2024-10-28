import React from "react";

function Intro() {
	return (
		<div className="max-w-[968px] w-full sm:mx-16 mt-14 sm:mt-20 ">
			<div className="max-w-[700px] xl:max-w-[700px] mb-8 mx-8 sm:mx-14 xl:mx-0  900:px-0">
				<h1 className="font-black mb-3 text-grey leading-none text-[38px] sm:text-[56px] xl:text-[64px]">
					Machine learning <br /> made
					<span className="text-green leading-none"> easy</span>
				</h1>
				<p className="text-grey text-[18px] sm:text-[24px] mb-10 leading-[1.45] xl:text-[26px] max-w-[600px] xl:max-w-[700px]">
					Lobe has everything you need to bring your machine learning ideas to
					life. Just show it examples of what you want it to learn, and it
					automatically trains a custom machine learning model that can be
					shipped in your app.
				</p>
			</div>
		</div>
	);
}

export default Intro;
