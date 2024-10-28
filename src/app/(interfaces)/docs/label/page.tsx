"use client";
import React, { useState } from "react";
import Image from "next/image";
import Question from "@/app/components/Question/Question";

function Page() {
	return (
		<div
			id="accordion-flush"
			data-accordion="collapse"
			className="w-full max-w-[600px] lg:w-[600px] text-[18px]"
			data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
			data-inactive-classes="text-grey dark:text-gray-400"
		>
			<Question question="What is lobe ?">
				<p>
					Lobe is a free, private desktop application that has everything you
					need to take your machine learning ideas from prototype to production.
				</p>
				<ul>
					<li>
						<a href="/docs/label/label">Label</a> your examples
					</li>
					<li>
						<a href="/docs/train/train">Train</a> a model
					</li>
					<li>
						Evaluate training <a href="/docs/results/results">Results</a>
					</li>
					<li>
						<a href="/docs/play/play">Play</a> with your model
					</li>
					<li>
						<a href="/docs/export/export">Export</a> and use your model in an
						app
					</li>
				</ul>
			</Question>
			<Question question="How do I create a dataset?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<div className="py-5 border-b text-grey border-gray-200 dark:border-gray-700">
						<b>Import and label your images in Lobe.</b>
						<ul>
							<li className="flex items-start gap-2">
								<Image
									src="/assets/img/checklist.svg"
									alt=""
									width="20"
									height="20"
								/>
								<div>
									<strong>Images</strong> - import common image files directly
									from your computer. Lobe supports JPEG, PNG, BMP, and WebP
									formats.
								</div>
							</li>
							<li></li>
						</ul>
						<p className="mb-2 text-grey dark:text-gray-400">
							You can create new labels or edit existing ones by using the text
							box in the bottom corner of each image.
						</p>
					</div>
				</div>
			</Question>
			<Question question="How do I create a dataset?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<div className="py-5 border-b text-grey border-gray-200 dark:border-gray-700">
						<b>Import and label your images in Lobe.</b>
						<ul>
							<li className="flex items-start gap-2">
								<Image
									src="/assets/img/checklist.svg"
									alt=""
									width="20"
									height="20"
								/>
								<div>
									<strong>Images</strong> - import common image files directly
									from your computer. Lobe supports JPEG, PNG, BMP, and WebP
									formats.
								</div>
							</li>
							<li></li>
						</ul>
						<p className="mb-2 text-grey dark:text-gray-400">
							You can create new labels or edit existing ones by using the text
							box in the bottom corner of each image.
						</p>
					</div>
				</div>
			</Question>
		</div>
	);
}

export default Page;
