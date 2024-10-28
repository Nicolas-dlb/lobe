"use client";
import { usePathname } from "next/navigation";
import React from "react";

interface IntroSectionProps {
	section: string;
	description: string;
}

function IntroSection({ section, description }: IntroSectionProps) {
	const pathname = usePathname();

	return (
		<div className="text-center mb-10 sm:max-w-[968px] xl:max-w-[1200px] flex items-center flex-col justify-center px-8 sm:px-16">
			<h2 className="font-black text-[38px] sm:text-[56px] xl:text-[64px]">
				Lobe <span className="text-green">{section}</span>
			</h2>
			<p
				className={`text-[18px] sm:text-[24px] xl:text-[26px] sm:max-w-[560px] xl:max-w-[${
					pathname === "/blog" ? "700" : pathname === "/help" ? "550" : "600"
				}px]`}
			>
				{description}
			</p>
		</div>
	);
}

export default IntroSection;
