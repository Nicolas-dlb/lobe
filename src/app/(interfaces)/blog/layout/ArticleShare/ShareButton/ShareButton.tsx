import { SocialNetwork } from "@/app/utils/Types/Types";
import Image from "next/image";
import React, { Suspense } from "react";

interface ShareButtonProps {
	network: SocialNetwork;
	slug: string;
}

async function ShareButton({ network, slug }: ShareButtonProps) {
	const get = async () => {
		return await import(`react-share`).then((module) => {
			return module[`${network}ShareButton`];
		});
	};

	const NetworkShareButton = await get();

	return (
		<Suspense>
			<NetworkShareButton
				key={network}
				url={`https://lobe.ai/blog/${slug}`}
				className="Demo__some-network__share-button !rounded-full outline-offset-2"
			>
				<span
					className={`bg-${network.toLowerCase()} w-[48px] hover:scale-110 transition-all duration-[400ms] h-[48px] rounded-full flex items-center justify-center`}
				>
					<Image
						src={`/assets/img/media/${network.toLowerCase()}.svg`}
						alt=""
						width="32"
						height="32"
					/>
				</span>
			</NetworkShareButton>
		</Suspense>
	);
}

export default ShareButton;
