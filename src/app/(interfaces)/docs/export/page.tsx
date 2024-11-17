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
			<Question question="How do I use my model ?">
				<p className="mb-5">
					Your model is a collection of files that other programs can load to
					run predictions. These files store both the structure of your model
					and the weights that are a result of training.
				</p>
				<p className="mb-7">
					You can directly upload your model toPower Platformto use in Power
					Apps or Power Automate. You can also use the model files locally in
					your own app or in most major cloud platforms to create an API. Lobe
					also hosts your model as a local API to help kickstart your app
					development.
				</p>
			</Question>
			<Question question="Which export option should I choose ?">
				<p className="mb-5">
					Lobe provides a few workflows for using models: no-code apps on
					Microsoft’s Power Platform, calling a local API, adapting starter
					projects, or working with model files directly.
				</p>
				<p className="mb-5">
					<i>No-code apps with Microsoft’s Power Platform</i>
				</p>
				<p className="mb-5">
					If you want to quickly build an app or automation flow without needing
					to write code, export your model to AI Builder in the Power Platform
					for use in Power Apps or Power Automate flows. You can connect your
					model in your app or flow to other external services, including many
					Microsoft integrations, for easily creating complex end-to-end apps
					for you or your organization.
				</p>
				<p className="mb-5">
					<i>Integrate with an external app</i>
				</p>
				<p className="mb-5">
					If you are using Lobe with another app, check if it can call an API to
					get predictions over a network or if it can load and run model files
					directly.
				</p>
				<p className="mb-5">
					<strong>Using an API for predictions</strong>
				</p>
				<p className="mb-5">
					If your desired app can make POST requests, process JSON, and base64
					encode images, you can build a network request to get predictions from
					your model.
				</p>
				<p className="mb-5">
					If the app is running locally on the same machine or network as Lobe,
					such asOrigami Studio, you can use the <i>Lobe Connect</i> local API
					without additional configuration. Lobe must be running with your
					project open for the <i>Lobe Connect</i> local API to function.
				</p>
				<p className="mb-5">
					If your desired app is running in a different environment than Lobe,
					or you wish to have predictions without the Lobe app open, see the '
					<i>Create an API for flexibility</i>' section below for hosting your
					model as an external API.
				</p>
				<p className="mb-5">
					<strong className="mb-5">Loading model files directly</strong>
				</p>
				<p className="mb-5">
					If your desired app can load and run external models, select the
					appropriate Model File export option for your app.
				</p>
				<p className="mb-5">
					If Lobe doesn’t support that export yet, such as TensorRT or OpenVINO,
					look for officially supported converters supplied by the desired
					format. Most of the time a converter will exist from <i>ONNX </i>or
					<i>TensorFlow </i> model files into the end format. If you are running
					into difficulties for a particular model, please check out
					oursubreddit communityor use <strong>File {">"} Report Issue</strong>{" "}
					for support.
				</p>
				<p className="mb-5">
					See{" "}
					<a href="#Where-can-I-use-my-model" className="text-green">
						Where can I use my model ?
					</a>{" "}
					for more information on the model file exports.
				</p>
				<p className="mb-5">
					<i>Create an API for flexibility</i>
				</p>
				<p className="mb-5">
					Creating a REST API is one of the most versatile ways to hook up apps
					to use your model. You can call your model as a service from other
					products, deploy to a variety of cloud providers, or even run on your
					own computer or edge device like a Raspberry Pi.
				</p>
				<p className="mb-5">
					To prototype or experiment with using an API, check out{" "}
					<strong>Lobe Connect</strong>. To set one up yourself to run in any
					location, check out <i>REST Server </i> for an example using Python
					and Flask with deployment instructions to Azure App Service.
				</p>
				<p className="mb-5">
					To create an API using a Node server such as Express, use the
					<i>TensorFlow.js </i> export option and see the example code in the
					export package for loading and running the model on an image.
				</p>
				<p className="mb-5">
					<i>Use or customize a starter project</i>
				</p>

				<p className="mb-5">
					If you want to do predictions in the browser, check out the Web Sample
					starter project that uses TensorFlow.js without needing a backend
					server. We recommend using the <i>Speed </i> model from{" "}
					<strong>File {">"} Project Settings</strong> for faster load times and
					prediction speed at the expense of potentially lower accuracy when
					running TensorFlow.js in the browser.
				</p>
				<p className="mb-5">
					If you want to run your model in a mobile setting, see <i>iOS</i> App
					for a sample using CoreML for iPhone or iPad apps. Similarly, see
					Android App for a sample using TensorFlow Lite to run on an Android
					device. For mobile apps, we recommend using the <i>Speed</i> model
					from <strong>File {">"} Project Settings</strong> for faster load
					times and prediction speed at the expense of potentially lower
					accuracy.
				</p>
				<p className="mb-5">
					<i>Classifying images on your computer</i>
				</p>
				<p className="mb-5">
					You can export your model as <i>TensorFlow </i> and use theImage
					Toolsdesktop app to run your model on a folder of images or a
					spreadsheet of image URLs.
				</p>
				<p className="mb-5">
					<i>Write an app from scratch</i>
				</p>
				<p className="mb-5">
					If you have more experience as a developer, you can export model files
					directly and use their underlying frameworks such as TensorFlow,
					CoreML, or ONNX.
				</p>
				<p className="mb-5">
					Where applicable, we recommend using our libraries in Python and .NET
					for working with Lobe exports as they provide useful helper functions
					for loading and processing data, as well as formatting return values
					and even working with the local API for quickly prototyping.
				</p>
				<p className="mb-7">
					See{" "}
					<a href="#Where-can-I-use-my-model" className="text-green">
						Where can I use my model ?
					</a>{" "}
					for more information on the model file export options.
				</p>
			</Question>
			<Question question="Where can I use my model ?">
				<p className="mb-5">
					We are continually expanding the ways you can use your model. Current
					recommendations:
				</p>
				<strong>No-code apps with Microsoft’s Power Platform</strong>
				<p className="mb-5">
					Export your model to Power Platform for use in no-code app development
					with Power Apps and Power Automate, and to connect with many other
					Microsoft or external services. Use the Speed model from{" "}
					<strong>File {">"} Project Settings</strong> if you need fast
					inference speed or if want to use solutions with Application Lifecycle
					Management (ALM).
				</p>
				<strong>
					Local Python app or hosted on Azure, Google Cloud, or AWS
				</strong>
				<p className="mb-5">
					Export your model asTensorFlow. TensorFlow’s SavedModel is a standard
					format used in Python applications running TensorFlow 1.x or 2.x, and
					can be deployed in TensorFlow web services to run inference on the
					cloud as an API. See our Python SDK for an example running the
					TensorFlow export.
				</p>
				<strong>Apple iOS</strong>
				<p className="mb-5">
					Export your model asCore MLto develop iOS, iPad, and Mac apps. Use the{" "}
					<i>Speed</i> model from <strong>File {">"} Project Settings</strong>{" "}
					if you need low latency and a smaller memory footprint on iOS.
				</p>
				<strong>Android or Raspberry Pi</strong>
				<p className="mb-5">
					Export your model asTensorFlow Liteto be used for mobile and IoT
					applications. Use the <i>Speed </i>model from{" "}
					<strong>File {">"} Project Settings</strong> if you need low latency
					and a smaller memory footprint on the edge.
				</p>
				<strong>ONNX</strong>
				<p className="mb-5">
					Export your model as ONNX for cross-compatible applications, including
					edge devices and .NET applications.
				</p>
				<strong>Web Applications</strong>
				<p className="mb-5">
					Export your model asTensorFlow.jsfor browser-based JavaScript or
					server-side Node applications. Use the <i>Speed</i> model from{" "}
					<strong>File {">"} Project Settings</strong> if you need low latency
					and a smaller memory footprint in the browser.
				</p>
				<strong>Lobe Connect</strong>
				<p className="mb-3">
					Lobe will host a local API to call your model via a REST endpoint. Use
					this option to mock a service that runs predictions while developing
					your app.
				</p>
				<p className="mb-3">To run the local API:</p>
				<p className="mb-5">
					Capture an input image as a base64 string. Make sure the base64 string
					doesn't include the 'data:image/jpeg;base64,' prefix that sometimes is
					added.
				</p>
				<p className="mb-5">
					Do a POST request to the locally hosted API for your project with the
					details from the export sheet.
				</p>
				<strong>Spreadsheets and local images</strong>
				<p className="mb-7">
					Export your model as a TensorFlow SavedModel to use with ourhelper
					codefor running predictions on spreadsheets of image URLs or local
					image files.
				</p>
			</Question>
			<Question question="What is Power Platform ?">
				<p className="mb-7">
					Power Platform is Microsoft’s no-code/low-code platform for building
					applications and automation flows for your business. Use your model
					trained in Lobe with Power Apps and Power Automate to add intelligence
					to your business solutions.
				</p>
			</Question>
			<Question question="How do I export my model to Power Platform ?">
				<p className="mb-7">
					You can easily upload your model to AI Builder to use in the Power
					Platform. Select Power Platform on the Export tab and sign into your
					work or school Microsoft account. Upload your model and view it in AI
					Builder within your Power Platform account.
				</p>
			</Question>
			<Question question="How do I use my model in Power Platform ?">
				<p className="mb-7">
					Once you’ve uploaded your model to Power Platform, you can view your
					model in your environment. Then you can use your model in Power Apps
					and Power Automate.
				</p>
				<p className="mb-7">
					Learn more about Power Platform{" "}
					<a
						className="text-green"
						href="https://learn.microsoft.com/en-us/power-platform/important-changes-coming"
					>
						here
					</a>
					.
				</p>
			</Question>
			<Question question="Can I see example code ?">
				<p className="mb-5">
					When you export a model, the exported folder contains example code to
					use your model:
				</p>
				<ul className="mb-7">
					<li>
						example/ directory: Lobe provides an example with a readme on how to
						load and run your model in the chosen export format.
					</li>
					<li>
						signature.json file: the signature contains information about your
						model that your app will generally have to provide when loading the
						model. This includes details about the exposed inputs and outputs,
						their data types and shapes, and the labels corresponding to
						predicted confidence outputs. See theexample/ directory for code on
						how to load and use the signature.
					</li>
				</ul>
			</Question>
			<Question question="Can I see some starter projects ?">
				<p className="mb-5">
					Lobe provides example projects on{" "}
					<a className="text-green" href="https://github.com/lobe">
						GitHub{" "}
					</a>
					to help you get started.
				</p>
				<strong>iOS</strong>
				<p className="mb-5">
					A sample iOS application running the exported Core ML model:{" "}
					<a
						className="text-green"
						href="https://github.com/lobe/iOS-bootstrap"
					>
						{" "}
						https://github.com/lobe/iOS-bootstrap
					</a>
				</p>
				<strong>Android</strong>
				<p className="mb-5">
					A sample Android application running the exported TensorFlow Lite
					model:{" "}
					<a
						className="text-green"
						href="https://github.com/lobe/android-bootstrap"
					>
						https://github.com/lobe/android-bootstrap
					</a>
				</p>
				<strong>Web</strong>
				<p className="mb-3">
					An example React web application that runs predictions on images from
					your webcam in the browser:{" "}
					<a
						className="text-green"
						href="https://github.com/lobe/web-bootstrap"
					>
						https://github.com/lobe/web-bootstrap
					</a>
				</p>{" "}
				<p className="mb-5">
					An example Flask server that runs your model as an API service:
					<a className="text-green" href="https://github.com/lobe/flask-server">
						https://github.com/lobe/flask-server
					</a>
				</p>
				<strong>.NET</strong>
				<p className="mb-5">
					A .NET library and example command line app to run predictions on
					images from your computer:{" "}
					<a className="text-green" href="https://github.com/lobe/lobe.net">
						https://github.com/lobe/lobe.net
					</a>
				</p>
				<strong>Raspberry Pi</strong>
				<p className="mb-7">
					An example Python application that runs predictions on a Raspberry Pi:{" "}
					<a
						className="text-green"
						href="https://github.com/microsoft/trashclassifier"
					>
						https://github.com/microsoft/trashclassifier
					</a>
				</p>
			</Question>
			<Question question="What is Lobe Connect ?">
				<p className="mb-5">
					Lobe Connect is a local API to call your model via a REST endpoint. We
					recommend using Lobe Connect to prototype development with a REST
					service, connect to apps and tools locally, or run your model on
					devices connected to your same local network.
				</p>
				<p className="mb-7">
					You need to have Lobe running with your project open for Lobe Connect
					to enable your local API.
				</p>
			</Question>
			<Question question="Does Lobe have an SDK ?">
				<p className="mb-7">
					Yes! Lobe provides a Python SDK and .NET SDK to run the exported
					models.
				</p>
			</Question>
		</div>
	);
}

export default Page;
