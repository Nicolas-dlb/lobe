import { brands } from "@/app/constants";
import { useWidth } from "@/app/utils/hooks/useWidth";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import React, { useState } from "react";

function Ship() {
	const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
	const [brandAnimate, setBrandAnimate] = useState(false);
	const width = useWidth();

	const fadeAnimation = useSpring({
		opacity: brandAnimate ? 0 : 1,
	});

	const titleAnimation = (brand: string | null) => {
		setBrandAnimate(true);
		setTimeout(() => {
			setSelectedBrand(brand);
			setBrandAnimate(false);
		}, 250);
	};

	return (
		<div className="bg-greyBG w-screen overflow-x-clip flex flex-col items-center justify-center">
			<div className="px-8 sm:px-16 pt-14 max-w-[1088px] w-full">
				<h2 className="text-grey font-black text-[38px] sm:text-[56px] xl:text-[64px] mb-2">
					<span className="text-green">Export</span>{" "}
					<animated.span style={fadeAnimation}>
						{selectedBrand ? selectedBrand : "Anywhere"}
					</animated.span>
				</h2>
				<p className="text-[18px] sm:text-[24px] xl:text-[26px] leading-[1.45] mb-10 sm:max-w-[700px]">
					When you are done, you can export your model to a variety of industry
					standard formats and ship it on any platform you choose.
				</p>
				<button className="text-green rounded-md hover:scale-105 transition-all duration-200 font-bold text-[18px] sm:text-[24px] flex items-center justify-center">
					Learn More{" "}
					<Image
						src="/assets/img/chevron.svg"
						className=""
						alt=""
						width={24}
						height={24}
					/>
				</button>
			</div>
			<div className="h-[50vh] sm:h-[75vh] min-w-[1024px] relative">
				{brands
					.filter((brand) => (width < 640 ? brand.position?.mobile : true))
					.map((brand) => (
						<figure
							key={brand.name}
							onMouseEnter={() => titleAnimation(brand.export)}
							onMouseLeave={() => titleAnimation(null)}
							style={{
								backgroundColor: brand.backgroundColor,
								left: brand.position?.[width < 640 ? "mobile" : "desktop"]
									?.left,
								top: brand.position?.[width < 640 ? "mobile" : "desktop"]?.top,
							}}
							className={`rounded-[20px] sm:rounded-3xl xl:rounded-[26px] absolute flex items-center justify-center w-[57px] h-[57px] sm:w-[67px] sm:h-[67px] xl:w-[76.5px] xl:h-[76.5px] shadow-[0_30px_50px_-20px_rgba(0,0,0,.25)] hover:scale-110 transition-all duration-[400ms] ease-in`}
						>
							<Image
								src={brand.img}
								alt={`${brand.name} logo`}
								className="sm:w-[48.75px] sm:h-[48.75px]"
								width={41.6}
								height={41.6}
							/>
						</figure>
					))}
			</div>
		</div>
	);
}

export default Ship;
