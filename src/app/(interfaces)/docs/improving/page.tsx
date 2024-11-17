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
			<Question question="How can I improve my model ?">
				<p className="mb-5">
					Your examples are your model’s source of truth about the world. Here
					are some best practices for building successful projects:
				</p>
				<ul className="mb-7">
					<li>
						Understand your problem - start simple, expand over time. Break your
						scenario down into smaller experiments to prototype and then expand
						over time.
					</li>
					<li>
						Lobe only learns from the examples you import. Try to collect
						examples that cover the different types of images your model will
						see and make predictions on in the future.
					</li>
					<li>
						More images always help - new and unique images are better. The more
						unique and different the images are, the better your model will
						learn to generalize.
					</li>
					<li>
						If you can’t classify the label from looking at an image, it will
						also be difficult for Lobe. Make the image content as large and
						relevant to your label as possible.
					</li>
				</ul>
			</Question>
			<Question question="Why is Lobe not predicting well on new images in Use ?">
				<p className="mb-7">
					Lobe will always predict one of your labels even if your image does
					not contain any related content. If you expect your model to see these
					types of images, create a ‘None’ label and add variations of these
					images as examples. You can use this ‘None’ label as a placeholder
					when waiting for relevant predictions.
				</p>
			</Question>
			<Question question="Why are small objects not working ?">
				<p className="mb-7">
					The smaller the object is you are trying to classify, the harder it
					will be for the model to predict. If you can, set up your camera to be
					closer or zoom in to the object you need to classify. You could
					alternatively square crop the portion of the image that contains the
					object you want to classify.
				</p>
			</Question>
			<Question question="How do I make my model work with multiple objects in my images ?">
				<p className="mb-5">
					Your model may have a harder time learning with many objects in your
					images. You should:
				</p>
				<ul className="mb-7">
					<li>
						Make your subject as large and centered as possible in your images.
						The larger the surface area of your image with content related to
						your label, the better your model will perform.
					</li>
					<li>
						Collect more variations of images with multiple objects so that your
						model can learn to distinguish the objects unrelated to your label.
					</li>
				</ul>
			</Question>
			<Question question="Why is Lobe predicting one of my labels more often than others?">
				<p className="mb-7">
					If you have many more images in one of your labels, Lobe may predict
					this label more frequently than others. Balance your examples by
					making sure labels have an equal number of images.
				</p>
			</Question>
			<Question question="How can I create a new version or keep track of progress ?">
				<p className="mb-7">
					Duplicate your project through{" "}
					<strong>Project {">"} Duplicate</strong>. This will make a new copy of
					your examples and any training. Experiment with different images or
					model types on duplicated projects without worrying about losing your
					original project.
				</p>
			</Question>
			<Question question="Why are tall or wide images not performing well ?">
				<p className="mb-7">
					Try to keep your content center frame. Lobe takes the center square
					crop of every image for training. Important parts of your image may be
					cropped out and not seen by your model.
				</p>
			</Question>
			<Question question="How can I make sure my model is not biased towards different groups ?">
				<p className="mb-7">
					Examine your examples for potential biases, such as
					under-representation of minorities or any other images that may have
					been excluded during collection. Because your examples are the ground
					truth, Lobe will tend to learn any biases present from your images.
				</p>
			</Question>
			<Question question="How do I make my model work better under different conditions ?">
				<p className="mb-7">
					Collect more images in the different conditions that you expect to see
					in the real world. Your model may not perform well in situations it
					hasn’t seen in your examples, such as images at night or in different
					seasons and weather conditions. If you are unable to collect image
					variations, try to synthetically make them in an image editing tool
					like Photoshop.
				</p>
			</Question>
		</div>
	);
}

export default Page;
