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
			<Question question="How can I play with my trained model ?">
				<p className="mb-7">
					Use images from your computer or use the webcam as a video feed to
					test your model on new images live. Try to actively trick your model
					and see patterns where it is getting images incorrect. Help improve
					you model by giving feedback on its predictions.
				</p>
			</Question>
			<Question question="Can I correct an incorrect prediction ?">
				<p className="mb-7">
					To give your model feedback, you can edit the prediction text box
					directly and add the image and label as an example. Alternatively,
					click the <i>correct </i> or <i>incorrect </i> buttons on the image to
					add it as an example. Lobe will automatically train with these new
					examples to continually improve.
				</p>
			</Question>
			<Question question="Can I view multiple images at once ?">
				<p className="mb-7">
					Currently, you can only view a single image at a time or use your
					webcam as a video feed.
				</p>
			</Question>
			<Question question="My model is not performing well, what can I do ?">
				<p className="mb-7">
					Many factors can cause your model to not perform well when playing
					with new images. Check out Improving for tips on what to look for and
					how to improve your model.
				</p>
			</Question>
		</div>
	);
}

export default Page;
