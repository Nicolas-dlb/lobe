import React from "react";
import SliderItem from "./SliderItem/SliderItem";
import { Exemple } from "@/app/utils/Types/Types";

interface SliderProps {
	items: Exemple[];
	inverse?: boolean;
}

function Slider({ items, inverse }: SliderProps) {
	return (
		<div className={`h-fit overflow-visible  ${inverse && "self-end"}`}>
			<div
				className={`slide-track flex w-full sm:w-[calc(452px_*_16)] xl:w-[calc(540px_*_16)] ${
					inverse && "slide-track-inverse"
				}`}
			>
				{items.map((item) => {
					return <SliderItem key={item.name + 1} {...item} />;
				})}
				{items.map((item) => {
					return <SliderItem key={item.name + 2} {...item} />;
				})}
			</div>
		</div>
	);
}

export default Slider;
