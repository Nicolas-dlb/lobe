"use client";
import Image from "next/image";
import React from "react";
import ShareButton from "./ShareButton/ShareButton";
import { SocialNetwork } from "@/app/utils/Types/Types";

interface ArticleProps {
	slug: string;
}

function ArticleShare({ slug }: ArticleProps) {
	const networks: SocialNetwork[] = ["Twitter", "Facebook", "Linkedin"];

	const itemClassName =
		"w-[48px] hover:scale-110 transition-all duration-[400ms] h-[48px] rounded-full flex items-center justify-center";

	return (
		<div className="w-full sm:max-w-[828px] px-8 sm:px-[60px] mt-[77px] sm:mt-[88px]">
			<p className="font-medium">Share Article</p>
			<div className="mt-5 flex gap-[18px]">
				{networks.map((network) => (
					<ShareButton
						key={network}
						network={network}
						slug={slug}
					></ShareButton>
				))}

				<a
					href="mailto:?subject=Use your model in Power Platform&amp;body=We're excited to announce a new integration with Microsoft Power Platform.%0D%0A%0D%0Ahttps://www.lobe.ai/blog/use-your-model-in-power-platform"
					className={`bg-green ${itemClassName}`}
					aria-label="Share this article via email"
				>
					<Image src="/assets/img/mail.svg" alt="" width="32" height="32" />
				</a>
			</div>
		</div>
	);
}

export default ArticleShare;
