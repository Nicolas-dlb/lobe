"use client";
import React from "react";
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
				<ul className="mb-7">
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
			<Question question="What is machine learning ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<div className="pb-5 border-b text-grey border-gray-200 dark:border-gray-700">
						<p className="text-justify">
							Machine learning is software that learns to perform a task from a
							collection of examples rather than through a person explicitly
							defining rules and formulas. This learning software is called a
							<strong> model</strong>. Teaching a model through examples is
							called <strong>training</strong>.
						</p>
						<p className="mt-2">
							Learn more in this{" "}
							<a
								className="text-green"
								href="https://aischool.microsoft.com/en-us/machine-learning/learning-paths/ml-crash-course"
							>
								beginner crash course
							</a>
							.
						</p>
					</div>
				</div>
			</Question>
			<Question question="What kind of machine learning can I train with Lobe ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<p className="mb-7">
						This version of Lobe learns to look at images using{" "}
						<strong> image classification</strong> - categorizing an image into
						a single label overall. We are working to expand to more types of
						problems and data in future versions.
					</p>
				</div>
			</Question>
			<Question question="What is image classification ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<p>
						Image classification is categorizing an image into a single label to
						represent its content. Apps using image classification could:
					</p>
					<ul className="mb-7">
						<li>
							<p>Tell you when someone is coming up your front steps</p>
						</li>
						<li>
							<p>
								Send you photos of a new bird that just started showing up at
								your bird feeder
							</p>{" "}
						</li>
						<li>
							<p>Count the number of push-ups you’ve done in a workout</p>
						</li>
						<li>
							<p>Alert you when a shelf is empty</p>
						</li>
						<li>
							<p>Read signs in you environment</p>
						</li>
					</ul>
				</div>
			</Question>
		</div>
	);
}

export default Page;
