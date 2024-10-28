"use client";
import React from "react";
import TestimonialsMobile from "./TestimonialsMobile/TestimonialsMobile";
import TestimonialsDesktop from "./TestimonialsDesktop/TestimonialsDesktop";

function Testimonials() {
	return (
		<div className="bg-greyBG w-screen no-scrollbar flex justify-start lg:justify-center overflow-scroll lg:overflow-visible px-8 pt-16 pb-36 lg:pb-[270px]">
			<div className="min-w-[964px] flex overflow-visible">
				<TestimonialsMobile />
				<TestimonialsDesktop />
			</div>
		</div>
	);
}

export default Testimonials;
