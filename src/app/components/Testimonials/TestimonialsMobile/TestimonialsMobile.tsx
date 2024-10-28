import React from "react";
import Testimony from "../Testimony/Testimony";
import { testimonials } from "@/app/constants";

function TestimonialsMobile() {
	return (
		<div className="lg:hidden flex">
			{testimonials.map((testimony) => (
				<Testimony key={testimony.name} {...testimony} />
			))}
		</div>
	);
}

export default TestimonialsMobile;
