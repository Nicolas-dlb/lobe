import { socialMedia } from "@/app/constants";
import React from "react";
import Media from "./Media/Media";

function SocialMedia() {
	return (
		<div className="flex flex-col items-center sm:flex-none justify-center min-w-[175px] sm:min-w-[70px] flex-1 xl:flex-row sm:-mt-2">
			{socialMedia.map((media) => {
				return <Media key={media.id} {...media} />;
			})}
		</div>
	);
}

export default SocialMedia;
