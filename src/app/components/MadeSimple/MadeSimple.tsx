import React from "react";
import Features from "./Features/Features";
import Screenshot from "./Screenshot/Screenshot";
import Intro from "./Intro/Intro";
import Templates from "./Templates/Templates";

function MadeSimple() {
	return (
		<section
			id="made-simple"
			className="bg-greyBG items-center flex flex-col justify-center w-screen overflow-hidden"
		>
			<Intro />
			<Screenshot />
			<Features />
			<Templates />
		</section>
	);
}

export default MadeSimple;
