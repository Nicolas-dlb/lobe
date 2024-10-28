/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Article from "../layout/Article";
import Image from "next/image";

function page() {
	return (
		<Article
			title={{ grey: "Use your model in", green: "Power Platform" }}
			date="15 novembre 2020"
			picture="/assets/blog/lobe-and-power-platform.png"
		>
			<div className="[&>p]:mb-6 [&>h2]:mt-9 [&>h2]:sm:mt-14 [&>h2]:mb-3 [&>h2]:font-bold [&>h2]:text-[24px] [&>h2]:sm:text-[32px] [&>p>a]:underline [&>.inline-image-container>img]:w-full [&>.inline-image-container>img]:rounded-lg [&>.inline-image-container>img]:sm:rounded-2xl [&>.inline-image-container>.inline-image-caption]:font-medium [&>.inline-image-container>.inline-image-caption]:text-[#737373] [&>.inline-image-container>.inline-image-caption]:mt-4 [&>.inline-image-container>.inline-image-caption]:text-base ">
				<p>
					Today we are excited to announce a new integration with Microsoft
					Power Platform. Lobe makes machine learning simple and understandable.
					By integrating with the Power Platform, you can now use your machine
					learning models virtually anywhere in an app or automation flow
					without having to write code.
				</p>
				<p>
					With Lobe 0.10, you can now export your Lobe model to Power Platform
					and use it in Power Apps and Power Automate, enabling you to build
					no/low-code applications and automation workflows within minutes. This
					is a major step forward to solving problems with machine learning
					end-to-end. Let's dive into the details.
				</p>
				<h2>Export to Power Platform</h2>
				<p>
					Our goal is to make it easier for you to put your machine learning
					models to work. We helped makers and developers with our prior updates
					that included the GitHub starter projects and the{" "}
					<a href="/blog/machine-learning-kit-with-adafruit">
						machine learning kit
					</a>{" "}
					with Adafruit. But these still required some level of programming
					skills to finish a project. So, we asked ourselves, how could we make
					the end-to-end experience of building software using machine learning
					as easy as possible?
				</p>
				<p>
					This is exactly why we integrated with Power Platform, Microsoft's
					no/low-code platform to build software for businesses. You can now
					export your model to Power Platform from the Export tab in Lobe.
				</p>
				<div className="inline-image-container">
					<Image
						width="300"
						height="300"
						src="/assets/blog/use-your-model-in-power-platform/power-platform-export-button.png"
						alt="You can now export your model to Power Platform"
						className="inline-image"
					/>
					<div className="inline-image-caption">
						You can now export your model to Power Platform
					</div>
				</div>
				<p>
					First click "Configure" to sign in with your work or school account.
					You can pick a name for your model and choose the development
					environment. When you export your model Lobe will automatically upload
					it to AI Builder, the home for AI models in Power Platform.
				</p>
				<p>
					After your model is uploaded to AI Builder, you can build apps in
					Power Apps or automation flows in Power Automate.
				</p>
				<h2>Build apps with Power Apps</h2>
				<p>
					<a href="https://powerapps.microsoft.com/en-us/">Power Apps</a> is
					Microsoft's low/no-code app development platform. It provides your
					business a shared place to build apps that can run on the web and
					mobile devices. Power Apps eases users into app development with a
					simple interface so every business user or pro developer can use it to
					build custom apps.
				</p>
				<p>
					In Power Apps you can integrate your Lobe model into your app to make
					it more intelligent. Create an app to classNameify
					difficult-to-identify products or parts in a factory. Or create an app
					to verify that employees at a workplace are properly wearing masks. Or
					create an app to take a picture of a completed job and automatically
					determine whether it has been completed. Any app that involves
					collecting or reviewing images can benefit from image
					classNameification to automatically classNameify or detect things.
				</p>
				<p>
					Customers today are using Lobe in Power Apps to make their business
					apps more intelligent. Learn more about Power Apps and how to get
					started <a href="https://docs.microsoft.com/en-us/powerapps/">here</a>
					.
				</p>
				<div className="inline-image-container">
					<Image
						width="300"
						height="300"
						src="/assets/blog/use-your-model-in-power-platform/power-apps-laptop-and-phone.png"
						alt="A car damage insurance claims app built in Power Apps"
						className="inline-image"
					/>
					<div className="inline-image-caption">
						A car damage insurance claims app built in Power Apps
					</div>
				</div>
				<h2>Build automations with Power Automate</h2>
				<p>
					<a href="https://powerautomate.microsoft.com/en-us/">
						Power Automate
					</a>{" "}
					is Microsoft's low/no-code platform for automating repetitive business
					processes and tasks such as communication, data collection and
					processing, and decision approvals. It lets users create workflows
					with over{" "}
					<a href="https://flow.microsoft.com/connectors/">500 connectors</a> to
					services like Microsoft 365, Outlook, OneDrive, Gmail, Twitter,
					Salesforce, and more. Power Automate used to be called Microsoft Flow
					and is similar to tools like IFTTT and Zapier.
				</p>
				<p>
					In Power Automate, you can integrate your Lobe model into your flow to
					make it more intelligent. Create a flow that takes a picture from a
					camera when it detects motion on a manufacturing floor, classNameify
					whether an employee is wearing a helmet, and notify you if there is a
					safety issue. Or automatically classNameify images uploaded to
					SharePoint and sort the images into folders based on the content when
					dealing with hundreds or thousands of images. Or automatically flag
					emails that contain images with explicit content.
				</p>
				<p>
					Customers today are using Lobe in Power Automate to infuse
					intelligence into automation flows for their business. Learn more
					about Power Automate and how to get started{" "}
					<a href="https://docs.microsoft.com/en-us/power-automate/">here</a>.
				</p>
				<div className="inline-image-container">
					<Image
						width="300"
						height="300"
						src="/assets/blog/use-your-model-in-power-platform/power-automate-laptop-and-phone.png"
						alt="Power Automate has over 500 connectors to services"
						className="inline-image"
					/>
					<div className="inline-image-caption">
						Power Automate has over 500 connectors to services
					</div>
				</div>
				<h2>Get started today</h2>
				<p>
					We believe that this new version of Lobe gets us a step closer to our
					mission of empowering anybody to solve problems with machine learning.
					The next step is getting started with Power Apps and Power Automate.
				</p>
				<p>
					Your workplace or school may already give you access to the Power
					Platform. Try logging into{" "}
					<a href="https://make.powerapps.com/">Power Apps</a> and{" "}
					<a href="https://flow.microsoft.com/signin/">Power Automate</a> with
					your work or school account.
				</p>
				<p>
					If your work or school does not have access to Power Apps or Power
					Automate, you can talk to your company administrator to get access.
					You can also{" "}
					<a href="https://go.microsoft.com/fwlink/p/?LinkID=510938&amp;clcid=0x409&amp;culture=en-us&amp;country=US">
						start
					</a>{" "}
					a one-month trial of a Microsoft 365 Business Standard account and
					start a free trial of Power Apps and Power Automate. There's also a
					free{" "}
					<a href="https://powerapps.microsoft.com/en-us/developerplan/">
						developer plan
					</a>{" "}
					that lets you build and test Power Apps for free.
				</p>
				<p>
					Once you're signed into Power Apps or Power Automate, read our{" "}
					<a href="https://aka.ms/PowerAppsLobeLearnMore">documentation</a> on
					how to use your Lobe model in apps and automations.
				</p>
				<p>
					Like Lobe, the integration with Power Platform is in preview and we'd
					love to hear your feedback. <a href="#download">Download</a> the
					latest version of Lobe for free to get started on your machine
					learning model today. And join the{" "}
					<a href="https://reddit.com/r/lobe">community</a> to share your
					feedback and see what others are building.
				</p>
			</div>
		</Article>
	);
}

export default page;
