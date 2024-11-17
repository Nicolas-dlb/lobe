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
			<Question question="How can I learn more about Lobe ?">
				<p className="mb-5">
					Follow announcements on our website and social media:
				</p>
				<ul className="mb-5">
					<li>
						<a href="https://www.lobe.ai">Github</a>
					</li>
					<li>
						<a href="https://x.com/lobe_ai">Twitter</a>
					</li>
					<li>
						<a href="https://www.facebook.com/lobeai">Facebook</a>
					</li>
					<li>
						<a href="https://www.reddit.com/r/Lobe/">Reddit</a>
					</li>
				</ul>
				<p className="mb-7">Watch our intro tour for a tutorial.</p>
			</Question>
			<Question question="What keyboard shortcuts are supported ?">
				<p className="">
					<strong>Global</strong>
				</p>
				<ul className="mb-7">
					<li>Check for updates: ctrl/cmd + shift + U</li>
					<p className="mt-7">
						<strong>Open Screen</strong>
					</p>
					<li>New project: ctrl/cmd + N</li>
					<li>Close Lobe: ctrl/cmd + W</li>
					<p className="mt-7">
						<strong>Open Screen</strong>
					</p>
					<li>Import data: ctrl/cmd + I</li>
					<li>Webcam import: ctrl/cmd + shift + I</li>
					<li>Export model: ctrl/cmd + E</li>
					<li>Optimize model: ctrl/cmd + shift + O</li>
					<li>Switch to Label: ctrl/cmd + 1</li>
					<li>Switch to Train: ctrl/cmd + 2</li>
					<li>Switch to Play: ctrl/cmd + 3</li>
					<li>Project settings: ctrl/cmd + comma</li>
					<li>Select all data: ctrl/cmd + A</li>
					<li>View options: ctrl/cmd + J</li>
					<li>Duplicate this project: ctrl/cmd + shift + S</li>
					<li>Close project window (go back to open screen): ctrl/cmd + W</li>
				</ul>
			</Question>
			<Question question="Why is my computer running slowly during training ?">
				<p className="mb-7">
					Training is a very computation-heavy process. Lobe will use a lot of
					memory and CPU bandwidth to train as quickly as possible. This
					generally means your computer will have less CPU and memory available
					for other apps to use.
				</p>
			</Question>
			<Question question="Does Lobe use the GPU for training ?">
				<p className="mb-5">
					Yes! Lobe usesTensorFlow with DirectML on Windows. Mac acceleration is
					coming in a future update.
				</p>
				<p>Supported GPUs:</p>
				<ul className="mb-5">
					<li>NVIDIA driver version {">"}= 451.67</li>
					<li>AMD driver version {">"}= 27.20.1000.8009</li>
				</ul>
				<p className="mb-5">
					<i>Note</i>
				</p>
				<p className="mb-7">
					If your GPU becomes disconnected during training, Lobe will throw an
					error.
				</p>
			</Question>
			<Question question="Why is Lobe running slow ?">
				<p className="mb-7">
					You may experience Lobe running slowly for larger projects and images.
					We are actively working on performance improvements during the beta.
					To help make Lobe run and train faster, you can resize large image
					resolutions to 224px on the smallest side.
				</p>
			</Question>
			<Question question="How can I move or backup my Lobe projects ?">
				<p className="mb-5">
					Lobe projects are saved on your computer in the application data
					directory. You can backup your Lobe projects by zipping and saving the
					projects folder:
				</p>
				<ul className="mb-5">
					<li>Windows - %appdata%\lobe\projects</li>
					<li>Mac -~/Library/Application Support/lobe/projects</li>
				</ul>
				<p className="mb-7">
					Future versions will let you manage project files explicitly.
				</p>
			</Question>
			<Question question="I messed up! How do I undo ?">
				<p className="mb-7">
					Lobe does not currently support undo. We are working to support this
					in a future version. We recommend making a duplicate of your project
					before major changes with <strong>Project {">"} Duplicate</strong>.
				</p>
			</Question>
			<Question question="How can I report an issue or bug ?">
				<p className="mb-7">
					Within Lobe, select <strong>File {">"} Report Issue </strong>to send
					an email to LobeSupport@microsoft.com with the required information
					for us to investigate the issue. Please attach the zipped logs that
					Lobe creates for you.
				</p>
			</Question>
			<Question question="How can I get help with my project ?">
				<p className="mb-7">
					We have acommunity on Redditwhere you can ask for help, show off your
					projects, or discuss all things Lobe!
				</p>
			</Question>
			<Question question="Are there additional resources ?">
				<p className="mb-7">
					<a className="text-green" href="https://github.com/lobe">
						Lobe’s GitHub{" "}
					</a>{" "}
					is continually updated with example apps and power tools to get you
					started using your model.
				</p>
			</Question>
			<Question question="What data is collected ?">
				<p className="mb-5">
					Your privacy is important to us. Data is only collected to diagnose
					issues and help improve the product. Your images and models are never
					collected or uploaded to the cloud. Below outlines what data is
					collected and how it is used. Read ourprivacy statementto learn more.
				</p>
				<strong>Sign up data</strong>
				<p className="mb-5">
					If you sign up on our website to download Lobe, we collect your name,
					email, and country. This is used to email you updates and information
					about Lobe. If you subscribe to receive emails about Lobe, you can
					unsubscribe bymanaging your communication permissionsfor your
					Microsoft account.
				</p>
				<strong>App data</strong>
				<p className="mb-7">
					If you opt-in to analytics, your system information, app usage, crash
					reporting, and diagnostic logs are collected while using Lobe. This
					information is used to help troubleshoot issues and improve the
					product. Data is processed and stored in the US. Analytics is disabled
					by default. You can opt-in or opt-out of analytics by going to{" "}
					<strong>File {">"} Preferences</strong> in Lobe.
				</p>
			</Question>
			<Question question="How can I opt-in or opt-out of app analytics ?">
				<p className="mb-5">
					You can change your app analytics preferences by going to{" "}
					<strong>File {">"} Preferences</strong>. You need to restart Lobe for
					the settings to take effect.
				</p>
				<p className="mb-7">
					Learn more about{" "}
					<a className="text-green" href="#What-data-is-collected">
						what data is collected
					</a>
					.
				</p>
			</Question>
			<Question question="How can I view, edit, or delete my data ?">
				<p className="mb-5">
					You can request to view, edit, or delete your data by contacting us at
					lobeprivacy@microsoft.com. Deletion requests will be honored within 30
					days by our support team.
				</p>
				<p className="mb-7">
					For additional privacy questions, you can{" "}
					<a
						className="text-green"
						target="_blank"
						href="https://www.microsoft.com/fr-fr/privacy/privacystatement"
					>
						learn more and contact Microsoft here
					</a>
					.
				</p>
			</Question>
			<Question question="Why would I need to rename the Lobe app ?">
				<p className="mb-7">
					If your Lobe app is named to something with a space (such as "Lobe
					2"), you may see an error when exporting your model in the TensorFlow
					Lite format. Please rename your app back to "Lobe" or something else
					without a space to resolve this issue.
				</p>
			</Question>
			<Question question="Why can't I open my project ?">
				<p className="mb-7">
					A project may be locked when it has been opened in a newer version of
					Lobe or Lobe Insiders that contains breaking changes. To open your
					project, make sure you are using the latest version of both Lobe and
					Lobe Insiders, and try again.
				</p>
			</Question>
			<Question question="Why can’t I sign into Power Platform ?">
				<p className="mb-5">
					If you cannot sign into your account, make sure you are using the same
					work or school account as you use in Power Platform. It may also be
					due to your company's security and compliance policy.
				</p>
				<p className="mb-7">
					If you are still experiencing issues, please go to the Lobe app menu
					and let us know through "Report Issue".
				</p>
			</Question>
			<Question question="Why can’t I view my environments ?">
				<p className="mb-7">
					If Lobe is unable to retrieve environments for your account, sign into
					Power Platform with the same account and check if you have an
					environment configured. Next, make sure AI Builder is enabled for your
					environment. If you are still experiencing issues, please go to Lobe
					settings and let us know through “Report Issue”.
				</p>
			</Question>
			<Question question="Why can’t I see models in my environment ?">
				<p className="mb-7">
					If Lobe is unable to retrieve your models, sign into Power Platform
					with the same account and check if you have an environment configured.
					Next, make sure AI Builder is enabled for your environment and you
					have models in your environment. If you are still experiencing issues,
					please go to Lobe settings and let us know through “Report Issue”.
				</p>
			</Question>
			<Question question="Why can’t I export a model to Power Platform ?">
				<p className="mb-7">
					If Lobe is unable to export your model, sign into Power Platform with
					the same account and check if you have an environment configured.
					Next, make sure AI Builder is enabled for your environment. If you are
					still experiencing issues, please go to Lobe settings and let us know
					through “Report Issue”.
				</p>
			</Question>
		</div>
	);
}

export default Page;
