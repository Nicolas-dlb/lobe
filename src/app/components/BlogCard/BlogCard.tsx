import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
	img: string;
	title: string;
	description: string;
	type: string;
	date: string;
}

function BlogCard({ img, title, description, type, date }: BlogCardProps) {
	const path = title.replaceAll(" ", "-").toLowerCase();

	return (
		<Link
			href={`/blog/${path}`}
			className="flex flex-col z-10 w-full m-[20px] 900:m-[24px] 900:mb-[48px] xl:mb-[82px] max-w-[428px] xl:max-w-[518px] rounded-[20px] overflow-hidden hover:scale-[1.01] transition-all duration-500 shadow-[0_100px_140px_-50px_rgba(0,0,0,.25),_0_0_20px_0_rgba(0,0,0,.03)]"
		>
			<Image src={img} className="w-full" alt="" width={428} height={290} />
			<div className="text-[18px] 952:text-[20px] xl:text-[22px] p-6 pb-9 952:px-8 952:pb-[38px] 952:pt-[26px]">
				<h2 className="font-black mb-2 leading-[1.63]">{title}</h2>
				<p className="mb-9 952:mb-[45px] xl:mb-[50px] leading-[1.67]">
					{description}
				</p>
				<p className="text-[#989898] font-[500] text-[16px] 952:text-[18px] xl:text-[20px]">
					{type} . {date}
				</p>
			</div>
		</Link>
	);
}

export default BlogCard;
