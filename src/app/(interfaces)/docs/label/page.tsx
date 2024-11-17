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
			<Question question="What is labeling ?">
				<p className="mb-7">
					Labeling is assigning categories to your images to create{" "}
					<strong>examples</strong> that teach Lobe. These examples are commonly
					known as a <strong>dataset</strong>. From this dataset, Lobe will
					learn to automatically predict a label for a given image.
				</p>
			</Question>
			<Question question="How do I create a dataset?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<div className="pb-5 border-b text-grey border-gray-200 dark:border-gray-700">
						<strong>Import and label your images in Lobe.</strong>
						<ul className="mb-7">
							<li>
								<p>
									<strong>Images </strong> - import common image files directly
									from your computer. Lobe supports JPEG, PNG, BMP, and WebP
									formats.
								</p>
							</li>
							<li>
								<p>
									<strong>Camera </strong>- use any connected camera source to
									capture images directly in Lobe. You can optionally provide a
									label for these images. Hold down the camera button to capture
									a burst of images.
								</p>{" "}
							</li>
							<p className="mt-7">
								<strong>Import an existing dataset.</strong>
							</p>
							<li>
								<p>
									<strong>Folders </strong> - import existing labeled images by
									using folder names as the labels. You can create new labels or
									edit existing ones by using the text box in the bottom corner
									of each image.
								</p>
							</li>
							<p className="mt-7">
								<i>Note</i>
							</p>
							<li>
								<p>
									The max image size Lobe can process is 178,956,970 pixels. For
									a square image, that is about 13,300 x 13,300 pixels. We
									recommend staying lower-resolution for faster processing
									because Lobe will resize and crop your image to a 224 x 224
									square.
								</p>
							</li>
						</ul>
					</div>
				</div>
			</Question>
			<Question question="What types of images should I collect ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<p className="mb-4">
						<strong className="mb-4">
							Collect images that you expect to see in the real world.
						</strong>
						<br></br>
						Lobe can only learn the patterns that exist in the images you
						provide as examples. Collect images from the same source you expect
						to use with your exported model.
					</p>
					<p className="mb-4">
						<strong>Capture as many variations as possible.</strong> <br></br>
						Try to capture all the variations that naturally occur by collecting
						images in different conditions. Try different backgrounds, lighting,
						orientations, or zoom. This helps Lobe learn what parts of the image
						are useful for making predictions and what is noise.
					</p>
					<p className="mb-7">
						<strong>
							Make sure your content is visible in the center square of the
							image.
						</strong>
						<br></br>
						While training your model, Lobe crops the center square of your
						images.
					</p>
				</div>
			</Question>
			<Question question="What labels should I use ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<p className="mb-4">
						<strong className="mb-4">Label for each desired prediction.</strong>
						<br></br>
						Create a label for each category you want the model to predict.
					</p>
					<p className="mb-7">
						<strong>Catch-all label.</strong>
						<br></br>
						Lobe will always predict one of your supplied labels for each image.
						If you expect the model to see images that don’t belong to any of
						your desired labels, create a 'None' label as a catch-all bucket to
						show unrelated images.
					</p>
				</div>
			</Question>
			<Question question="How many images should I have ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<p className="mb-4">
						<strong className="mb-4">
							Gather as many different images as you can.
						</strong>
						<br></br>A rough guideline is 100-1,000 images per label for smaller
						problems. To quickly get started with your project, Lobe has a
						minimum requirement of 5 images per label.
					</p>
					<p className="mb-7">
						<strong>Have roughly equal number of images per label.</strong>
						<br></br>
						Balance the number of images between each label. If imbalanced, Lobe
						will be biased to predict the labels with more images and ignore the
						labels with fewer images.
					</p>
				</div>
			</Question>
			<Question question="Can I use videos ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<p className="mb-4">
						You cannot use videos directly with Lobe, but it is a great way to
						collect many images. Turn your video into frames and select the best
						and highest variety of images for your problem.
					</p>
					<p className="mb-7">
						Have roughly equal number of images per label. You can use a tool
						like SnapMotion, VLC, Free Video to JPG Converter, or VirtualDub.
					</p>
				</div>
			</Question>
			<Question question="Can I connect external cameras ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<p className="mb-4">
						Yes! Lobe will use the default camera connected to your computer as
						the primary source. To switch cameras, use the source selector in
						the Label or Use views.
					</p>
					<p className="mb-5">
						If you do not see an image from the camera, make sure the selected
						camera is connected to your computer and functional, and the Lobe
						app has permissions to use cameras. You can check permissions by
						going to:
					</p>
					<ul className="mb-7">
						<li>
							<i>Mac </i> - System Preferences{" >"} Security & Privacy{" >"}{" "}
							Privacy{" >"} Camera
						</li>
						<li>
							<i>Windows</i> - Settings{" >"} Privacy{" >"} App permissions
							{" >"} Camera
						</li>
					</ul>
				</div>
			</Question>
			<Question question="How do I speed up labeling ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<ul className="mb-7">
						<li>
							<p>
								Use <strong>shift + click </strong> or{" "}
								<strong>cmd/ctrl + click </strong> to multi-select many images
								and label them at the same time.
							</p>
						</li>
						<li>
							<p>Capture a burst of labeled images from the webcam.</p>
						</li>
						<li>
							<p>Use folder names as labels to import existing datasets.</p>
						</li>
						<li>
							<p>
								Use your arrow keys to move the image selection and label
								entirely with your keyboard.
							</p>
						</li>
					</ul>
				</div>
			</Question>
			<Question question="How do I import images from a CSV ?">
				<div
					id="accordion-flush-body-2"
					aria-labelledby="accordion-flush-heading-2"
				>
					<p className="mb-5">
						You can’t use CSVs directly with Lobe. However, we built an external
						desktop app and Python command line tool to both download images and
						run your exported model on a CSV of image URLs.
					</p>
					<p className="mb-7">
						Learn more on our{" "}
						<a
							className="text-green"
							href="https://github.com/lobe/image-tools"
						>
							{" "}
							Github
						</a>
					</p>
				</div>
			</Question>
		</div>
	);
}

export default Page;
