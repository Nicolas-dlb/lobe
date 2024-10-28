import React from "react";

interface ArticleDateProps {
	date: string;
}

function ArticleDate({ date }: ArticleDateProps) {
	return (
		<p className="text-[#989898] mb-9 sm:mb-[40px] flex items-center h-[19px] xxl:mb-12 text-base sm:text-lg font-medium text-center">
			{date}
		</p>
	);
}

export default ArticleDate;
