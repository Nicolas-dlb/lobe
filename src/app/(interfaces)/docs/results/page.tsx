/* eslint-disable react/no-unescaped-entities */
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
			<Question question="What are my training results ?">
				<p className="mb-5">
					Your results show you which images your model is predicting correctly
					and incorrectly. Correct predictions have green labels and incorrect
					predictions have red labels. The width of the label bar represents how
					confident the model was in that prediction.
				</p>
				<p className="mb-5">
					Hovering over a predicted label will show the true label you gave that
					image. The more correct the predictions, the better the model is
					performing.
				</p>
				<p className="mb-5">
					You can view and sort your images in different ways to check:
				</p>
				<p className="mb-5">
					Whether your model is successfully learning all the labels with{" "}
					<strong>View {">"} All Images </strong> selected.
				</p>
				<p className="mb-5">
					Approximately how well it will work on new images with{" "}
					<strong>View {">"} Test Images</strong> selected.{" "}
					<a className="text-green" href="#What-are-test-images">
						Learn more about test images.
					</a>
				</p>
				<p className="mb-7">
					Which images and labels confuse your model by selecting your
					individual labels in the sidebar.
				</p>
			</Question>
			<Question question="How do I see labels that are confused with one another ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<div className="pb-5 border-b text-grey border-gray-200 dark:border-gray-700">
						<p>
							Select your individual labels in the sidebar to see results
							specific to that label. Lobe will show you which other labels are
							commonly confused with this one.
						</p>
						<p className="mt-5 mb-7">
							Try to spot what similarities exist between the images that
							confuse the model and the images in the true label. For example,
							you may notice the same background color across the confused
							images and the images in your label. If you notice these patterns,
							try to collect varying images that look like the confused image to
							better teach Lobe what patterns to ignore. In this example,
							collect more images in your selected label with varying background
							colors.
						</p>{" "}
					</div>
				</div>
			</Question>
			<Question question="How do I see images that confuse the model ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<p className="mb-4">
						To see where your model is most confused, look at the most confident
						incorrect predictions and the least confident correct predictions.
					</p>
					<ul className="mb-5">
						<li>
							Select <strong>View{">"} Correct First</strong> to view your
							predictions sorted by most confident to least confident. Try to
							find any patterns where your model was very confident in its wrong
							prediction.
						</li>
						<li>
							Select <strong>View{">"} Incorrect First</strong> to view your
							predictions sorted by least confident to most confident. See where
							your model is least confident with its correct predictions.
						</li>
					</ul>
					<p className="mb-7">
						Collect more variations of images that have similar patterns to
						these two cases to help your model improve.
					</p>
				</div>
			</Question>
			<Question question="What are test images ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					{/* ici */}
					<p className="mb-4">
						Test images are a random subset of your examples that Lobe hides
						from your model during training. Lobe automatically splits your
						examples into two parts:
						<br></br>
						<br></br>
						Random 80% is used to train your model.
						<br></br>
						<br></br>
						Random 20% is held out and used to test your model.
						<br></br>
						<br></br>
						See the results on only your held out test images by selecting{" "}
						<strong>View {">"} Test Images</strong>. If your overall performance
						on All Images is very high and your performance withTest Images is
						lower, your model may be memorizing your examples instead of
						learning to generalize to unseen images. This is often
						calledoverfitting.
					</p>
					<p className="mb-5">To help prevent overfitting, you can:</p>
					<ul className="mb-7">
						<li>
							Collect more images overall so the training set includes more
							variations.
						</li>
						<li>Make sure your images don’t look too similar to each other.</li>
					</ul>
				</div>
			</Question>
			<Question question="Results look good, what should I do next ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<p className="mb-7">
						When you are happy with the results, you should try out the model in
						the real world! Experiment on new images with Play, or Export the
						model to use in your app. Try to trick your model with new images
						that test its limits, and add those images as examples to improve
						your model.
					</p>
				</div>
			</Question>
			<Question question="How will my model perform in the real world ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<p className="mb-7">
						Look at the results on your test images to get a better sense how
						your model will perform on unseen data. Select{" "}
						<strong>View {">"} Test Images</strong> to see the random subset of
						your examples that your model did not use during training.
					</p>
				</div>
			</Question>
			<Question question="Can I fix labeling errors ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<p className="mb-7">
						Yes, you can fix labeling errors directly from results. You may find
						some predictions marked as incorrect because they were incorrectly
						labeled examples. Fix these labeling mistakes by clicking on the
						predicted label text box and typing or selecting the true label.
					</p>
				</div>
			</Question>
		</div>
	);
}

export default Page;
