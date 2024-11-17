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
			<Question question="What is training ?">
				<p className="mb-7">
					Training is how your model learns to predict the correct labels from
					your examples. You can think of your examples as a collection of
					flashcards. During training, your model will continually look through
					the flashcards and try to find similar patterns that help it guess the
					right answers.
				</p>
			</Question>
			<Question question="How do I start training ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<div className="pb-5 border-b text-grey border-gray-200 dark:border-gray-700">
						<p className="text-justify">
							Lobe automatically starts training when your examples meet the
							minimum requirements. To start training, you need:
						</p>
						<ul className="mb-5">
							<li>
								<p>Imported images tolabel as examples</p>
							</li>
							<li>
								<p>At least two labels</p>
							</li>
							<li>
								<p>At least five images per label</p>
							</li>
						</ul>
						<p className="mb-5">
							Lobe will also follow best practices to continue training when you
							make changes to your examples. If you make large changes or
							add/remove labels, Lobe will reset training and start training a
							new model.
						</p>
						<p className="mb-7">
							After automatic training has completed, you can manually optimize
							your model to train for longer for better real-world performance (
							<strong>File {">"} Optimize Model</strong>).
						</p>
					</div>
				</div>
			</Question>
			<Question question="How long will training take?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<p className="mb-5">
						Training time is quite variable and depends on how hard it is to
						distinguish between the labels in your examples and how many
						examples you have. It can take anywhere from minutes to hours, and
						sometimes days for very large problems.
					</p>
					<p className="mb-7">
						You can hover over the training progress to see a time estimate.
						This training time estimate is updated every few seconds based on
						your progress and computer’s current processing speed. You may see
						it fluctuate if you are performing other tasks on your computer as
						available CPU and memory change.
					</p>
				</div>
			</Question>
			<Question question="How do I train for longer ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<p>
						When training has completed, you can optimize your model by
						selecting <strong>File {">"} Optimize Model</strong>. Optimizing a
						model performs additional training and can take much longer to
						complete, but will generally help find a better version of your
						model.
					</p>
					<p className="mb-7 mt-5">
						While optimizing, Lobe will keep training for as long as your model
						is improving and does not have a set end-time.
					</p>
				</div>
			</Question>
			<Question question="How long will training take?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<p className="mb-5">
						Lobe automatically picks the best model architecture for your
						problem; no setup or configuration needed. Project Settings (
						<strong>File {">"} Project Settings</strong>) lets you switch your
						project between two modes:
					</p>
					<ul className="mb-5">
						<li>
							<p>
								<strong>Accuracy </strong>: a larger model that will generally
								achieve higher accuracy on harder problems, but will have longer
								prediction times and use more memory.
							</p>
						</li>
						<li>
							<p>
								<strong>Speed </strong>: a smaller model that will have faster
								prediction speed and smaller memory usage, but may have lower
								accuracy. This model can also be optimized for edge devices such
								as mobile phones or the Raspberry Pi.
							</p>
						</li>
					</ul>
					<p className="mb-7">
						Changing your project will reset any training completed so far and
						automatically train a new model.
					</p>
				</div>
			</Question>
			<Question question="What models are used ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<p className="mb-5">
						Lobe uses two popular models for image classification:
					</p>
					<ul className="mb-5">
						<li>
							<p>
								<strong>Accuracy </strong>: ResNet-50 V2
							</p>
						</li>
						<li>
							<p>
								<strong>Speed </strong>: MobileNetV2
							</p>
						</li>
					</ul>
					<p className="mb-7">
						Both models utilizetransfer learningwith pretrained weights from
						theImageNetdataset. Transfer learning lets you train better models
						with less data and gives a better starting point for training on
						larger data.
					</p>
				</div>
			</Question>
			<Question question="Is Lobe performing data augmentation ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<p className="mb-5">
						When loading images for training, Lobe will crop to the center
						square and scale your image. Lobe will automatically create small
						variations of your images to reflect the noisiness of real-world
						data. During training, Lobe will make five variations of your images
						with randomly varied:
					</p>
					<ul className="mb-7">
						<li>
							<p>Brightness</p>
						</li>
						<li>
							<p>Contrast</p>
						</li>
						<li>
							<p>Saturation</p>
						</li>
						<li>
							<p>Hue</p>
						</li>
						<li>
							<p>Rotation</p>
						</li>
						<li>
							<p>Zoom</p>
						</li>
						<li>
							<p>JPEG encoding noise</p>
						</li>
					</ul>
				</div>
			</Question>
		</div>
	);
}

export default Page;
