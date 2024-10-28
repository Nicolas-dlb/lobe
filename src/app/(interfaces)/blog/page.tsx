import BlogCard from "@/app/components/BlogCard/BlogCard";
import IntroSection from "@/app/components/IntroSection/IntroSection";
import React, { useEffect } from "react";
import { blogPosts } from "../../constants";

function page() {
	return (
		<section className="flex flex-col items-center justify-center pt-10 sm:pt-16">
			<IntroSection
				section="Blog"
				description="Read about our newest releases, and get tips on how to create custom machine learning models with Lobe."
			/>
			<div className="flex flex-wrap items-center justify-center">
				{blogPosts.map((post) => (
					<BlogCard key={post.title} {...post} />
				))}
			</div>
		</section>
	);
}

export default page;
