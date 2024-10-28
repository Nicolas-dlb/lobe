import React, { ReactNode } from "react";
import { default as Title } from "@/app/(interfaces)/blog/layout/ArticleTitle/ArticleTitle";
import { default as Date } from "../layout/ArticleDate/ArticleDate";
import { default as Share } from "../layout/ArticleShare/ArticleShare";
import Image from "next/image";
import { slugify } from "@/app/utils/helpers";
import Head from "next/head";

interface ArticleProps {
	children: ReactNode;
	title: { grey: string; green: string };
	date: string;
	picture: string;
}

function Article({ title, date, picture, children }: ArticleProps) {
	const slug = slugify(`${title.grey}-${title.green}`);
	return (
		<div className="flex pt-10 xl:pt-16 flex-col items-center mx-auto text-[18px] sm:text-[20px]">
			<Head>
				<title>My page title</title>
				<meta name="description" content="Page description" />
				<meta
					property="og:image"
					content="https://www.lobe.ai/assets/blog/introducing-the-new-lobe/Plants Overlay.jpg"
				></meta>
				<meta property="og:image:width" content="2400"></meta>
				<meta property="og:image:height" content="1260"></meta>
				<meta property="og:type" content="website"></meta>
				<meta
					property="og:description"
					content="Everything you need to train custom machine learning models in a free, easy to use app."
				></meta>
				<meta
					property="og:url"
					content="https://www.lobe.ai/blog/machine-learning-made-easy"
				></meta>
				<meta
					property="og:title"
					content="Lobe Blog | Machine Learning Made Easy"
				></meta>
			</Head>
			<Title grey="Use your model in" green="Power Platform" />
			<Date date="15 Novembre 2021" />
			<Image
				src={picture}
				alt=""
				width="640"
				height="360"
				className="w-full md:max-w-[800px] xl:max-w-[900px] md:rounded-[20px] mb-[30px] sm:mb-[40px] xxl:max-w-[1080px]"
			/>
			<div className="px-8 sm:px-16 w-full sm:max-w-[828px]">{children}</div>
			<Share slug={slug} />
		</div>
	);
}

export default Article;
