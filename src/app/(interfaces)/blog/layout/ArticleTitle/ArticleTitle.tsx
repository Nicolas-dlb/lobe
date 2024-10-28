import React from "react";

interface ArticleTitleProps {
	grey: string;
	green: string;
}

function ArticleTitle({ grey, green }: ArticleTitleProps) {
	const greenWords = green.split(" ");
	return (
		<h1 className="font-black text-center mb-[26px] xxl:text-[80px] sm:mb-[40px] text-[38px] xl:text-[64px] sm:text-[56px] max-w-[700px] leading-[1.05] text-grey">
			{grey}
			{greenWords.map((word, index) => (
				<span
					key={`word-${index}`}
					className="text-green inline-block mx-1 sm:mx-2"
				>
					{word}
				</span>
			))}
		</h1>
	);
}

export default ArticleTitle;
