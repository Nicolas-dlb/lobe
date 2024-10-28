import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Testimony from "../Testimony/Testimony";
import { testimonials } from "@/app/constants";

function TestimonialsDesktop() {
	return (
		<div className="hidden lg:flex lg:gap-2">
			<ParallaxProvider>
				{testimonials.map((testimony, index) => {
					const offsetY = index === 1 ? "75px" : index === 2 ? "150px" : "0px";
					const speed = index === 1 ? 100 : index === 2 ? 150 : 0;
					return (
						<Parallax
							key={testimony.name}
							translateY={[offsetY, "0px"]}
							speed={speed}
							easing="easeInQuad"
						>
							<Testimony key={testimony.name} {...testimony} />
						</Parallax>
					);
				})}
			</ParallaxProvider>
		</div>
	);
}

export default TestimonialsDesktop;
