export const navigationLinks = [
	{
		name: "Overview",
		path: "/",
	},
	{
		name: "Examples",
		path: "/examples",
	},
	{
		name: "Tour",
		path: "/tour",
	},
	{
		name: "Blog",
		path: "/blog",
	},
	{
		name: "Help",
		path: "/docs/welcome",
	},
];

export const features = [
	{
		id: "Easy",
		video: "/assets/features/Easy.mp4",
		img: "/assets/features/Easy.jpg",
		title: "Easy to Use",
		description:
			"Designed to be easy enough for anyone to use. No code or experience required.",
		altText:
			"Animated lightbulb icon indicating how easy it is to start training machine learning models with Lobe.",
	},
	{
		id: "feature-2",
		video: "/assets/features/Private.mp4",
		img: "/assets/features/Private.jpg",
		title: "Free and Private",
		description:
			"Train for free on your own computer without uploading your data to the cloud.",
		altText:
			"Animated lock icon indicating that Lobe is a safe, secure, and private way to train machine learning models.",
	},
	{
		id: "feature-3",
		video: "/assets/features/Anywhere.mp4",
		img: "/assets/features/Anywhere.jpg",
		title: "Export Anywhere",
		description:
			"Available for Mac and Windows. Export your model and ship it on any platform you choose.",
		altText:
			"Animated ship icon indicating that machine learning models created with Lobe can be exported and shipped on any platform.",
	},
];

export const models = [
	{
		id: "model-1",
		img: "/assets/modelTypes/Classification.jpg",
		video: "/assets/modelTypes/Classification.mp4",
		altText:
			"Animated icon depicting image classification with Lobe using deep learning.",
		name: "Image Classification",
		description: "Label an image based on its content.",
		available: true,
	},
	{
		id: "model-2",
		img: "/assets/modelTypes/Detection.jpg",
		video: "/assets/modelTypes/Detection.mp4",
		altText:
			"Animated icon depicting object detection in images using deep learning with Lobe.",
		name: "Object Detection",
		description: "Locate an object inside of an image.",
		available: false,
	},
	{
		id: "model-3",
		img: "/assets/modelTypes/Tabular.jpg",
		video: "/assets/modelTypes/Tabular.mp4",
		altText:
			"Animated icon depicting tabular problem types, where Lobe uses deep learning to understand data in tables and spreadsheets.",
		name: "Data Classification",
		description: "Label data in a table based on its content.",
		available: false,
	},
];

export const footerCategories = [
	{
		name: "About",
		links: [
			{ name: "Download", url: "/" },
			{ name: "Overview", url: "/" },
			{ name: "Exemples", url: "/exemples" },
			{ name: "Blog", url: "/blog" },
		],
	},
	{
		name: "General",
		links: [
			{ name: "Notice", url: "/" },
			{ name: "Licence", url: "/" },
			{ name: "Press Inquiry", url: "/" },
			{ name: "Press Images", url: "/" },
		],
	},
	{
		name: "Ressources",
		links: [
			{ name: "Help", url: "/docs/welcome" },
			{ name: "Tour", url: "/tour" },
			{ name: "Contact", url: "/" },
			{ name: "Privacy", url: "/" },
		],
	},
];

export const socialMedia = [
	{
		id: "media-1",
		link: "https://reddit.com/r/lobe",
		img: "/assets/img/media/reddit.svg",
		altText: "Visit the Lobe Reddit community",
	},
	{
		id: "media-2",
		link: "https://twitter.com/lobe_ai",
		img: "/assets/img/media/twitter.svg",
		altText: "Visit the Lobe Twitter profile",
	},
	{
		id: "media-3",
		link: "https://www.youtube.com/channel/UCYryctkBIcCszPAFg79rwAw",
		img: "/assets/img/media/youtube.svg",
		altText: "Visit the Lobe Youtube channel",
	},
];

export const examples = [
	{
		name: "plants",
		img: "/assets/examples/Plants.jpg",
		video: "/assets/examples/Plants.mp4",
		title: "Plant Species",
		altText:
			"Video of the Plant Species example showing a Toyon and a Madrone with a live prediction in the bottom corner.",
		description:
			"Train your app to distinguish between different species of plants to help people identify poisonous vegetation.",
	},
	{
		name: "hands",
		img: "/assets/examples/Hand Count.jpg",
		video: "/assets/examples/Hand Count.mp4",
		title: "Hand Gestures",
		altText:
			"Video of the Hand Gestures example showing a human hand counting up to 5 and down to 1 with a live prediction in the bottom corner.",
		description:
			"Train your app to understand the movement of your hand to create new kinds of immersive user experiences.",
	},
	{
		name: "burn",
		img: "/assets/examples/Feel the Burn.jpg",
		video: "/assets/examples/Feel the Burn.mp4",
		title: "Personal Trainer",
		altText:
			"Video of the Personal Trainer example showing a woman doing while doing crunches with a live prediction in the bottom corner.",
		description:
			"Train your app to recognize different workout positions to create an automated personal trainer that counts your reps.",
	},
	{
		name: "laughing",
		img: "/assets/examples/Laughing.jpg",
		video: "/assets/examples/Laughing.mp4",
		title: "Emotional Reactions",
		altText:
			"Video of the Emotional Reactions example showing a woman smiling and then laughing with a live prediction in the bottom corner.",
		description:
			"Train your app to react to different expressions allowing people to send emoji reactions using just their face.",
	},
	{
		name: "painting",
		img: "/assets/examples/Painting with Mike.jpg",
		video: "/assets/examples/Painting with Mike.mp4",
		title: "Interactive Painting",
		altText:
			"Video of the Safety Precautions example showing a woman putting her mask on with a live prediction in the bottom corner.",
		description:
			"Train your app to respond with sounds and stories while kids draw to create engaging learning experiences.",
	},
	{
		name: "masks",
		img: "/assets/examples/Mask Up.jpg",
		video: "/assets/examples/Mask Up.mp4",
		title: "Safety Precautions",
		altText:
			"Video of the Safety Precautions example showing a woman putting her mask on with a live prediction in the bottom corner.",
		description:
			"Train your app to monitor when masks are being correctly worn to help encourage proper safety precautions.",
	},
	{
		name: "whales",
		img: "/assets/examples/Whales.jpg",
		video: "/assets/examples/Whales.mp4",
		title: "Whale Watching",
		altText:
			"Video of the Whale Watching example showing a whale jumping off the ocean with a live prediction in the bottom corner.",
		description:
			"Train your app to detect marine life in tourist photos to help conservationists map and protect the ocean.",
	},
	{
		name: "bees",
		img: "/assets/examples/Bees.jpg",
		video: "/assets/examples/Bees.mp4",
		title: "Beehive Health",
		altText:
			"Video of the Beehive Health example showing a bee enter the hive with pollen, with a live prediction in the bottom corner.",
		description:
			"Train your app to monitor the entrance of hives to help beekeepers track and analyze the health of their colonies.",
	},
];

export const examples2 = [
	{
		name: "sleeping",
		img: "/assets/examples/Sleeping.jpg",
		video: "/assets/examples/Sleeping.mp4",
		title: "Baby Monitor",
		altText:
			"Video of the Baby Monitor example showing a kid waking up with a live prediction in the bottom corner.",
		description:
			"Train your app to detect when babies are sleeping or awake to notify parents before they start crying.",
	},
	{
		name: "checkout",
		img: "/assets/examples/Checkout.jpg",
		video: "/assets/examples/Checkout.mp4",
		title: "Smart Checkout",
		altText:
			"Video of the Smart Checkout example showing a woman checking out her groceries with a live prediction in the bottom corner.",
		description:
			"Train your app to recognize different types of produce to help checkout faster without the need to remember price look-up codes.",
	},
	{
		name: "wildfire",
		img: "/assets/examples/Wildfire.jpg",
		video: "/assets/examples/Wildfire.mp4",
		title: "Fire Watch",
		altText:
			"Video of the Fire Watch example showing a fire in the middle of a forest burning a tree with a live prediction in the bottom corner.",
		description:
			"Train your app to detect smoke and flames using remote cameras to help spot new wildfires before it's too late.",
	},
	{
		name: "microscope",
		img: "/assets/examples/Microscope.jpg",
		video: "/assets/examples/Microscope.mp4",
		title: "Scientific Research",
		altText:
			"Video of the Scientific Research example showing a microscopic zygote moving around with a live prediction in the bottom corner.",
		description:
			"Train your app to detect organisms under a microscope to help researchers analyze large quantities of scientific samples.",
	},
	{
		name: "wildlife",
		img: "/assets/examples/African Wildlife.jpg",
		video: "/assets/examples/African Wildlife.mp4",
		title: "Wildlife Behavior",
		altText:
			"Video of the Wildlife Behavior example showing an elephant drinking out of a river with a live prediction in the bottom corner.",
		description:
			"Train your app to detect wildlife behavior with remote cameras to track population and migration patterns over a large area.",
	},
	{
		name: "compression",
		img: "/assets/examples/Compression.jpg",
		video: "/assets/examples/Compression.mp4",
		title: "Equipment Analytics",
		altText:
			"Video of the Equipment Analytics example showing a gauge moving up and down with a live prediction in the bottom corner.",
		description:
			"Train your app to monitor analog gauges and equipment to provide modern digital readouts and real time analytics.",
	},
	{
		name: "telescope",
		img: "/assets/examples/Telescope.jpg",
		video: "/assets/examples/Telescope.mp4",
		title: "Telescopic Imagery",
		altText:
			"Video of the Telescopic Imagery example showing a nebula with a live prediction in the bottom corner.",
		description:
			"Train your app to recognize different celestial bodies to help astronomers analyze large amounts of telescopic imagery.",
	},
	{
		name: "deforestation",
		img: "/assets/examples/Deforestation.jpg",
		video: "/assets/examples/Deforestation.mp4",
		title: "Aerial Imagery",
		altText:
			"Video of the Aerial Imagery example showing a forest and the impact of deforestation with a live prediction in the bottom corner.",
		description:
			"Train your app to monitor aerial imagery to gain insights into macro level changes happening around the globe.",
	},
];

export const testimonials = [
	{
		profilPic: "/assets/avatars/avatar1@2x.jpg",
		content:
			"As soon as I used Lobe I was completely blown away. I don't have to spend days trying to learn machine learning. Simply label some images and boom, it really just works.",
		name: "Chris Cachor",
		work: "Software Engineer",
	},
	{
		profilPic: "/assets/avatars/avatar2@2x.jpg",
		content:
			"We've been using Lobe to quickly process previously untapped sources of data so that we can improve our models of nature-dependent tourism to promote better decision-making in our oceans.",
		name: "Kate Longley-Wood",
		work: "Ocean Mapper",
	},
	{
		profilPic: "/assets/avatars/avatar3@2x.jpg",
		content:
			"Lobe is so easy and takes so much of the complicated stuff out of machine learning. Even my kid was begging me to sit in front of the computer and categorize my bees for me.",
		name: "Sean Cusack",
		work: "Beekeeper",
	},
];

export const steps = [
	{
		name: "Label",
		title: "Label your images",
		description:
			"Collect bursts using your webcam, or drag in a folder of images from your computer. Then quickly label your images to create a machine learning dataset.",
		inverse: false,
		altText:
			"Quickly label images in Lobe by selecting an image, then typing or selecting a label.",
	},
	{
		name: "Train",
		title: "Train automatically",
		description:
			"Automatically train on your own computer without any setup or configuration. Understand the strengths and weaknesses of your model with live visual results.",
		inverse: true,
		altText:
			"Once you've added and labeled images, Lobe will automatically start training and showing the predicted label for each image.",
	},
	{
		name: "Play",
		title: "Use your model",
		description:
			"Use your model with your webcam or images from your computer. Improve your results by giving your model feedback on its predictions, then finally export it to your app.",
		inverse: false,
		altText:
			"Finally, you can add image to Lobe from your computer, or use your webcam to get predictions in real-time for images your model has never seen. Mark them correct or incorrect to add them to your dataset.",
	},
];

export const brands = [
	{
		name: "aws",
		export: "AWS",
		img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NyIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiB4bWxuczp2PSJodHRwczovL3ZlY3RhLmlvL25hbm8iPjxwYXRoIGQ9Ik0xNy4zIDI3LjE4N2MwIC41NzYuMDYyIDEuMDQ0LjE3IDEuMzg2LjEyNS4zNDMuMjguNzE2LjQ5OCAxLjEyLjA3OC4xMjUuMTEuMjUuMTEuMzU4IDAgLjE1Ni0uMDkzLjMxMi0uMjk2LjQ2N2wtLjk4LjY1NGMtLjE0LjA5My0uMjguMTQtLjQwNS4xNC0uMTU2IDAtLjMxMi0uMDc4LS40NjctLjIxOGE0LjgyIDQuODIgMCAwIDEtLjU2MS0uNzMybC0uNDgzLS45MmMtMS4yMTUgMS40MzMtMi43NCAyLjE1LTQuNTggMi4xNS0xLjMwOCAwLTIuMzUyLS4zNzQtMy4xMTUtMS4xMnMtMS4xNTMtMS43NDQtMS4xNTMtM2MwLTEuMzI0LjQ2Ny0yLjQgMS40MTctMy4yMDhzMi4yMTItMS4yMTUgMy44MTYtMS4yMTVjLjUzIDAgMS4wNzUuMDQ3IDEuNjUuMTI1czEuMTY4LjIwMiAxLjc5LjM0M1YyMi4zOWMwLTEuMTg0LS4yNS0yLjAxLS43MzItMi40OTItLjQ5OC0uNDgzLTEuMzQtLjcxNi0yLjU0LS43MTYtLjU0NSAwLTEuMTA2LjA2Mi0xLjY4Mi4yMDJhMTIuNDEgMTIuNDEgMCAwIDAtMS42ODIuNTMgNC40NyA0LjQ3IDAgMCAxLS41NDUuMjAyYy0uMTEuMDMtLjE4Ny4wNDctLjI1LjA0Ny0uMjE4IDAtLjMyNy0uMTU2LS4zMjctLjQ4M3YtLjc2M2MwLS4yNS4wMy0uNDM2LjExLS41NDVzLjIxOC0uMjE4LjQzNi0uMzI3Yy41NDUtLjI4IDEuMi0uNTE0IDEuOTYyLS43Ljc2My0uMjAyIDEuNTczLS4yOTYgMi40My0uMjk2IDEuODUzIDAgMy4yMDguNDIgNC4wOCAxLjI2Mi44NTcuODQgMS4yOTMgMi4xMTggMS4yOTMgMy44M3Y1LjA0NmguMDN6bS02LjMyMyAyLjM2N2MuNTE0IDAgMS4wNDQtLjA5MyAxLjYwNC0uMjhzMS4wNi0uNTMgMS40OC0uOTk3Yy4yNS0uMjk2LjQzNi0uNjIzLjUzLS45OTdhNS41OSA1LjU5IDAgMCAwIC4xNTYtMS4zNTV2LS42NTRjLS40NTItLjExLS45MzUtLjIwMi0xLjQzMy0uMjY1cy0uOTgtLjA5My0xLjQ2NC0uMDkzYy0xLjA0NCAwLTEuODA3LjIwMi0yLjMyLjYyM3MtLjc2MyAxLjAxMi0uNzYzIDEuNzljMCAuNzMyLjE4NyAxLjI3Ny41NzYgMS42NS4zNzQuMzkuOTIuNTc2IDEuNjM1LjU3NnptMTIuNTA3IDEuNjgyYy0uMjggMC0uNDY3LS4wNDctLjU5Mi0uMTU2LS4xMjUtLjA5My0uMjM0LS4zMTItLjMyNy0uNjA3bC0zLjY2LTEyLjA0Yy0uMDkzLS4zMTItLjE0LS41MTQtLjE0LS42MjMgMC0uMjUuMTI1LS4zOS4zNzQtLjM5aDEuNTI2Yy4yOTYgMCAuNDk4LjA0Ny42MDcuMTU2LjEyNS4wOTMuMjE4LjMxMi4zMTIuNjA3bDIuNjE3IDEwLjMxIDIuNDMtMTAuMzFjLjA3OC0uMzEyLjE3LS41MTQuMjk2LS42MDdzLjM0My0uMTU2LjYyMy0uMTU2aDEuMjQ2Yy4yOTYgMCAuNDk4LjA0Ny42MjMuMTU2LjEyNS4wOTMuMjM0LjMxMi4yOTYuNjA3bDIuNDYgMTAuNDM1IDIuNjk0LTEwLjQzNWMuMDkzLS4zMTIuMjAyLS41MTQuMzEyLS42MDcuMTI1LS4wOTMuMzI3LS4xNTYuNjA3LS4xNTZoMS40NDhjLjI1IDAgLjM5LjEyNS4zOS4zOSAwIC4wNzgtLjAxNi4xNTYtLjAzLjI1cy0uMDQ3LjIxOC0uMTEuMzlsLTMuNzU0IDEyLjA0Yy0uMDkzLjMxMi0uMjAyLjUxNC0uMzI3LjYwN3MtLjMyNy4xNTYtLjU5Mi4xNTZoLTEuMzRjLS4yOTYgMC0uNDk4LS4wNDctLjYyMy0uMTU2cy0uMjM0LS4zMTItLjI5Ni0uNjIzTDI4LjE0IDIwLjQyN2wtMi40IDEwLjAzYy0uMDc4LjMxMi0uMTcuNTE0LS4yOTYuNjIzcy0uMzQzLjE1Ni0uNjIzLjE1NmgtMS4zNHptMjAuMDE0LjQyYy0uOCAwLTEuNjItLjA5My0yLjQtLjI4cy0xLjM4Ni0uMzktMS43OS0uNjIzYy0uMjUtLjE0LS40Mi0uMjk2LS40ODMtLjQzNmExLjEgMS4xIDAgMCAxLS4wOTMtLjQzNnYtLjc5NGMwLS4zMjcuMTI1LS40ODMuMzU4LS40ODNhLjg4Ljg4IDAgMCAxIC4yOC4wNDdjLjA5My4wMy4yMzQuMDkzLjM5LjE1NmE4LjQ3IDguNDcgMCAwIDAgMS43MTMuNTQ1Yy42MjMuMTI1IDEuMjMuMTg3IDEuODUzLjE4Ny45OCAwIDEuNzQ0LS4xNyAyLjI3NC0uNTE0cy44LS44NC44LTEuNDhjMC0uNDM2LS4xNC0uNzk0LS40Mi0xLjFzLS44LS41Ni0xLjU3My0uOGwtMi4yNTgtLjdjLTEuMTM3LS4zNTgtMS45NzgtLjg4OC0yLjQ5Mi0xLjU5LS41MTQtLjY4NS0uNzgtMS40NDgtLjc4LTIuMjU4IDAtLjY1NC4xNC0xLjIzLjQyLTEuNzNzLjY1NC0uOTM1IDEuMTItMS4yNzdjLjQ2Ny0uMzU4Ljk5Ny0uNjIzIDEuNjItLjhzMS4yNzctLjI2NSAxLjk2Mi0uMjY1YTcuODIgNy44MiAwIDAgMSAxLjA0NC4wNjJsMS4wMTIuMTcuODg4LjI1Yy4yOC4wOTMuNDk4LjE4Ny42NTQuMjguMjE4LjEyNS4zNzQuMjUuNDY3LjM5LjA5My4xMjUuMTQuMjk2LjE0LjUxNHYuNzMyYzAgLjMyNy0uMTI1LjQ5OC0uMzU4LjQ5OC0uMTI1IDAtLjMyNy0uMDYyLS41OTItLjE4Ny0uODg4LS40MDUtMS44ODUtLjYwNy0zLS42MDctLjg4OCAwLTEuNTkuMTQtMi4wNy40MzZzLS43MzIuNzQ4LS43MzIgMS4zODZhMS40NyAxLjQ3IDAgMCAwIC40NjcgMS4xMDZjLjMxMi4yOTYuODg4LjU5MiAxLjcxMy44NTdsMi4yMTIuN2MxLjEyLjM1OCAxLjkzLjg1NyAyLjQxNCAxLjQ5NXMuNzE2IDEuMzcuNzE2IDIuMThjMCAuNjctLjE0IDEuMjc3LS40MDUgMS44MDctLjI4LjUzLS42NTQuOTk3LTEuMTM3IDEuMzctLjQ4My4zOS0xLjA2LjY3LTEuNzMuODcyLS43LjIxOC0xLjQzMy4zMjctMi4yMjcuMzI3eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTQ2LjQ0MiAzOS4yMjZDNDEuMzE4IDQzIDMzLjg3MyA0NS4wMiAyNy40NzIgNDUuMDJjLTguOTcgMC0xNy4wNTUtMy4zMTctMjMuMTYtOC44My0uNDgzLS40MzYtLjA0Ny0xLjAyOC41My0uNjg1IDYuNjA0IDMuODMgMTQuNzUgNi4xNTIgMjMuMTc2IDYuMTUyIDUuNjg1IDAgMTEuOTMtMS4xODQgMTcuNjc4LTMuNjEzLjg1Ny0uNCAxLjYuNTYuNzQ4IDEuMTg0em0yLjEzNC0yLjQzYy0uNjU0LS44NC00LjMzLS40MDUtNS45OTYtLjIwMi0uNDk4LjA2Mi0uNTc2LS4zNzQtLjEyNS0uNyAyLjkyOC0yLjA1NiA3Ljc0LTEuNDY0IDguMzAyLS43OC41Ni43LS4xNTYgNS41MTQtMi44OTcgNy44Mi0uNDIuMzU4LS44MjUuMTctLjY0LS4yOTYuNjIzLTEuNTQyIDItNS4wMTUgMS4zNTUtNS44NHoiLz48L3N2Zz4=",
		backgroundColor: "rgb(255, 153, 0)",
		position: {
			desktop: {
				left: -155,
				top: -80,
			},
		},
	},
	{
		name: "windows",
		export: "Windows",
		img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0iI2ZmZiIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNMTIgMTJoMTQuNzQ3djE0Ljc0N0gxMnptMCAxNy4yNTNoMTQuNzQ3VjQ0SDEyek0yOS4yNTMgMTJINDR2MTQuNzQ3SDI5LjI1M3ptMCAxNy4yNTNINDRWNDRIMjkuMjUzeiIvPjwvc3ZnPg==",
		backgroundColor: "rgb(250, 202, 12)",
		position: {
			desktop: {
				left: 955,
				top: -80,
			},
		},
	},
	{
		name: "apple",
		export: "IOS and macOS",
		img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNNDIuMzcgMzUuMjc2Yy0uNTQgMS4yMjMtMS4xNzYgMi4zNDgtMS45MTUgMy4zODMtMS4wMDcgMS40MS0xLjgzIDIuMzg3LTIuNDY3IDIuOTMtLjk4NS45LTIuMDQgMS4zNDYtMy4xNyAxLjM3Mi0uODEgMC0xLjgtLjIyNy0yLjkyOC0uNjg3cy0yLjE5My0uNjg1LTMuMTUzLS42ODVjLTEuMDA3IDAtMi4wODcuMjI3LTMuMjQyLjY4NXMtMi4wOS43LTIuOC43MjRjLTEuMDg0LjA0NS0yLjE2NC0uNDIzLTMuMjQyLTEuNDEtLjY4OC0uNi0xLjU1LTEuNi0yLjU4LTMuMDMzLTEuMTA2LTEuNTMtMi4wMTYtMy4zMDMtMi43MjgtNS4zMjUtLjc2My0yLjE4NC0xLjE0Ni00LjMtMS4xNDYtNi4zNDcgMC0yLjM0Ni41MTYtNC4zNyAxLjU1LTYuMDY0LjgxMi0xLjM2MiAxLjg5Mi0yLjQzNiAzLjI0NC0zLjIyNGE4Ljg0IDguODQgMCAwIDEgNC4zODUtMS4yMTZjLjg2IDAgMS45OS4yNjIgMy4zOTIuNzc2czIuMjk3Ljc3OCAyLjcuNzc4Yy4yOTQgMCAxLjI5Mi0uMzA2IDIuOTgzLS45MTYgMS42LS41NjYgMi45NS0uOCA0LjA1NS0uNzA4IDIuOTk2LjIzOCA1LjI0OCAxLjM5OCA2Ljc0NSAzLjUtMi42OCAxLjU5Ni00LjAwNiAzLjgzLTMuOTggNi42OTguMDI0IDIuMjMzLjg1IDQuMDkyIDIuNDcgNS41NjcuNzM0LjY4NSAxLjU1NCAxLjIxNCAyLjQ2NyAxLjZsLS42MyAxLjYyMnpNMzUuNSA4LjdjMCAxLjc1LS42NSAzLjM4NS0xLjk0OCA0Ljg5Ny0xLjU2NSAxLjc5OC0zLjQ2IDIuODM4LTUuNTEyIDIuNjc0LS4wMjYtLjItLjA0LS40My0uMDQtLjY2MyAwLTEuNjguNzQ0LTMuNDggMi4wNjYtNC45NS42Ni0uNzQ0IDEuNS0xLjM2NCAyLjUxNy0xLjg1NyAxLjAxNi0uNDg2IDEuOTc2LS43NTUgMi44OC0uODAyYTYuMjUgNi4yNSAwIDAgMSAuMDM3LjdoMHoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=",
		backgroundColor: "rgb(36, 35, 35)",
		position: {
			desktop: {
				left: 755,
				top: 80,
			},
		},
	},
	{
		name: "tflite",
		export: "TensorFlow Lite",
		img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiB4bWxuczp2PSJodHRwczovL3ZlY3RhLmlvL25hbm8iPjxwYXRoIGQ9Ik00My4yNzYgMTguMjk3TDMwLjYyIDExLjE2NGMtLjY2Ni0uMzc1LTEuNS0uMTQtMS44ODYuNTI2LS4xMTcuMjA3LS4xNzguNDQyLS4xNzguNjh2MzAuOTdjMCAuNzY1LjYyIDEuMzg1IDEuMzg1IDEuMzg1YTEuMzkgMS4zOSAwIDAgMCAuNjg4LS4xODNsMy40LTEuOTQ3Yy40My0uMjQ3LjY5Ny0uNzA1LjY5Ny0xLjIwMnYtNi43NjdsMi41NyAxLjQ2Yy42NjUuMzc4IDEuNS4xNDUgMS44ODgtLjUyLjEyLS4yMTMuMTgzLS40NTMuMTgtLjY5OGwtLjAzNy0zLjY2M2MtLjAwNS0uNS0uMjY4LS45NC0uNjkzLTEuMTg2bC0zLjktMi4yNTR2LTYuNWw3LjE3NyA0LjE2Yy42NjIuMzg0IDEuNS4xNTggMS44OTItLjUwMy4xMjItLjIuMTg3LS40NS4xODctLjY5NHYtNC43MzVjMC0uNS0uMjctLjk2LS43MDUtMS4yMDZ6bS0zMS44MiAwbDEyLjY1Ny03LjEzNGMuNjY2LS4zNzUgMS41LS4xNCAxLjg4Ni41MjYuMTE3LjIwNy4xNzguNDQyLjE3OC42OHYzMC45N2MwIC43NjUtLjYyIDEuMzg1LTEuMzg1IDEuMzg1YTEuMzkgMS4zOSAwIDAgMS0uNjg4LS4xODNsLTMuNC0xLjk0N2MtLjQzLS4yNDctLjY5Ny0uNzA1LS42OTctMS4yMDJWMjEuMjc1bC03LjE3NyA0LjE2Yy0uNjYyLjM4NC0xLjUuMTU4LTEuODkyLS41MDMtLjEyMi0uMi0uMTg3LS40NS0uMTg3LS42OTR2LTQuNzM1YzAtLjUuMjctLjk2LjcwNS0xLjIwNnoiLz48L3N2Zz4=",
		backgroundColor: "rgb(255, 209, 1)",
		position: {
			desktop: {
				left: -55,
				top: 100,
			},
		},
	},
	{
		name: "framer",
		export: "Framer",
		img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0iI2ZmZiIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNMTcgMTJoMjIuNjY3djExLjMzM0gyOC4zMzN6Ii8+PHBhdGggZD0iTTE3IDIzLjMzM2gxMS4zMzNsMTEuMzMzIDExLjMzM0gxN3oiLz48cGF0aCBkPSJNMTcgMzQuNjY3VjMzaDExLjVsLS4xNjcgMS42NjdWNDZ6Ii8+PC9zdmc+",
		backgroundColor: "rgb(14, 56, 177)",
		position: {
			mobile: {
				left: 600,
				top: 20,
			},
			desktop: {
				left: 470,
				top: 150,
			},
		},
	},
	{
		name: "google",
		export: "Google Cloud",
		img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0iI2ZmZiIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNNDIuOTcyIDI4LjY2N2MwLTEuMDM3LS4wODQtMi4wOC0uMjY0LTMuMUgyOC4zMTR2NS44NzdoOC4yNDNjLS4zNDIgMS44OTUtMS40NCAzLjU3Mi0zLjA1IDQuNjM3djMuODEzaDQuOTE4YzIuODg4LTIuNjU4IDQuNTQ4LTYuNTgzIDQuNTQ4LTExLjIyNnoiLz48cGF0aCBkPSJNMjguMzE0IDQzLjU3OGM0LjExNiAwIDcuNTg3LTEuMzUgMTAuMTE2LTMuNjg0bC00LjkxOC0zLjgxM2MtMS4zNjguOTMtMy4xMzUgMS40NTgtNS4xOTMgMS40NTgtMy45OCAwLTcuMzU3LTIuNjg2LTguNTY4LTYuMjk3aC01LjA3NXYzLjkzYzIuNTkgNS4xNTMgNy44NjcgOC40MDYgMTMuNjM3IDguNDA2eiIvPjxwYXRoIGQ9Ik0xOS43NDYgMzEuMjRhOS4xNCA5LjE0IDAgMCAxIDAtNS44NDN2LTMuOTNoLTUuMDdjLTIuMTY0IDQuMzEyLTIuMTY0IDkuMzkzIDAgMTMuNzA1bDUuMDctMy45M3oiLz48cGF0aCBkPSJNMjguMzE0IDE5LjA5NWMyLjE3Ni0uMDM0IDQuMjguNzg1IDUuODU0IDIuMjg4bDQuMzU3LTQuMzU3Yy0yLjc2LTIuNTktNi40Mi00LjAxNS0xMC4yMS0zLjk3YTE1LjI2IDE1LjI2IDAgMCAwLTEzLjYzNyA4LjQxMWw1LjA3IDMuOTNjMS4yMDYtMy42MTcgNC41ODctNi4zMDMgOC41NjgtNi4zMDN6Ii8+PC9zdmc+",
		backgroundColor: "rgb(229, 75, 75)",
		position: {
			desktop: {
				left: 985,
				top: 120,
			},
		},
	},
	{
		name: "azure",
		export: "Azure",
		img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNMjcuNTA1IDM5LjM0NGw5LjQzMi0xLjY3LjA5LS4wMi00Ljg1Mi01Ljc3NC00Ljg1Mi01LjgwMmEzNzQxLjQ2IDM3NDEuNDYgMCAwIDEgNS4wMzgtMTMuODgyYy4wMS0uMDE2IDMuNDIgNS44NzMgOC4yNjUgMTQuMjc3TDQ5IDQxbC0zMC44NC0uMDA0IDkuMzQ0LTEuNjUyek05IDM3LjU4NGEzNTM4Ljc4IDM1MzguNzggMCAwIDEgNS4wOC04LjgyNGw1LjA4LTguODFMMzEuMDIgMTBjLjAxLS4wMDQtLjAzMi4xMDQtLjA5NS4yNEwxOC4xODMgMzcuNTg3bC00LjU5LjAwNmMtMi41MjUuMDAzLTQuNTktLjAwMS00LjU5LS4wMWgweiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==",
		backgroundColor: "rgb(0, 137, 214)",
		position: {
			mobile: {
				left: 370,
				top: 80,
			},
			desktop: {
				left: 145,
				top: 180,
			},
		},
	},
	{
		name: "onnx",
		export: "ONNX",
		img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNNDQuODc2IDI3LjAyYy0uMTU2LjAxLS4yODMtLjA3OC0uMzU0LS4yMTdsLTUuNzc3LTEwLjQ5NmMtLjA3NC0uMTE4LS4wODgtLjI2NC0uMDM3LS4zOTIuMjEtLjU5LjAwMy0xLjI0Ni0uNTA4LTEuNjJhMS40OCAxLjQ4IDAgMCAwLTEuNzI1LS4wMTFjLS4xNS4xMTYtLjM0NS4xNTUtLjUyOC4xMDZsLTExLjM2Mi0yLjIzOGMtLjE3Ni0uMDEtLjMyMy0uMTQtLjM1OC0uMzA2LS41NTYtMS44NTUtMy4zOS0uOTkzLTIuNzgyLjg0OC4wNjQuMTYuMDM0LjM0NC0uMDc2LjQ3OEwxMi4zNSAyNS44NzhjLS4xMjIuMTcyLS4yNC4yNDYtLjQyLjE4YTEuNDUgMS40NSAwIDAgMC0xLjU2NiAxLjIyOWMtLjA2LjM3Ny4wMzcuNzYzLjI3MiAxLjA2N3MuNTg1LjUwMi45Ny41NDhhLjM5LjM5IDAgMCAxIC4zNjguMjk5TDE2LjgzIDQwLjk0Yy4wNTcuMTI1LjA2OC4yNy4wMjguNDE3LS40MTggMS4zNDIgMS4xNzUgMi40MTMgMi4yOTcgMS41NDQuMTEtLjEuMjUtLjEzLjM5Mi0uMTEzbDE0LjYyIDEuNDAyYy4xNjYtLjAwNC4zMTYuMDk3LjM3LjI1LjgzMyAxLjg3IDMuNjYuNDMgMi41ODQtMS4zMTdhLjM1LjM1IDAgMCAxLS4wMDQtLjQxMmw3LjM3OC0xMi41OGMuMDY2LS4xNS4yMi0uMjQ0LjM4Ny0uMjM1IDEuOTcuMDIyIDEuOTgyLTIuODkzLS4wMDQtMi44NjVsLS4wMDEtLjAxek0yMi4zIDE1LjY4M2wuNDEzLTEuNzUyYy4wMzQtLjE0Ny4wOC0uMjM2LjI3NS0uMjQ4LjM2NS0uMDE4LjcwNS0uMTkyLjkzLS40NzcuMDktLjE0LjI1OC0uMTc1LjQwNC0uMTJsMTEuNDIgMi4yNGMuMDMuMDA2LjA2LjAyLjE3Ny4wNjRsLTMuNTk0IDEuNTMtMTAuODM3IDQuNjM1LS4xNjYuMDY4Yy0uMTE2LjA0Ni0uMjI3LjE1My0uMzYuMDQyLS4xMjUtLjEwNC0uMDMzLS4yMTgtLjAwNy0uMzI1bDEuMzQ0LTUuNjU2em0tLjgyLS45ODJsLjA2LjA0LTEuNTM2IDYuNDZjLS4wMi4xNS0uMTM1LjI3NC0uMjgzLjMxLS41NjIuMTUzLS45NjUuNjM4LTEuMDA0IDEuMi4wMDEuMTQyLS4wNzQuMjc1LS4xOTguMzQ4bC00Ljg2OCAyLjgxM2MtLjA0LjAxNC0uMDguMDIyLS4xMjIuMDI4TDIxLjQ4IDE0Ljd6bS0zLjg0NSAyNS4ybC0uMDcuMjc4TDEyLjkgMjguOTE3YS40OC40OCAwIDAgMSAuMDc2LS41OTUgMS4wNiAxLjA2IDAgMCAwIC4yNy0uODIxLjQxLjQxIDAgMCAxIC4yNTktLjQzOWw1LjMzLTMuMDg3Yy4xLS4wNTguMTk4LS4xOTIuMzQ2LS4wNTYuMTMyLjEyMi4zMTIuMTguMjguNDM3bC0uNDggNC4wMzctMS4zNSAxMS41MDh6bTEuNjY3LjljLS4xNDQtLjE3Ni0uMzQtLjMwNC0uNTYyLS4zNjYtLjEzMi0uMDQyLS4yMi0uMDkzLS4xNzctLjIxNmwuNDE4LTMuNTguODM1LTcuMTMuNTc4LTQuOTg3Yy4wMzUtLjMzLjI4My0uMzIuNDgtLjQ0cy4yNjMuMDYuMzU0LjE0bDEyLjA5NiAxMC4zMmEuNTUuNTUgMCAwIDEtLjE0OS44NzZsLTEzLjQ4IDUuNDYzYy0uMTYuMDY1LS4yNy4wODMtLjM5Ni0uMDc4bC4wMDMtLjAwMXptMTUuNzgyIDEuODc3YS42Mi42MiAwIDAgMC0uMjY5LjIyOGMtLjE4Ny4zODUtLjUuMzM4LS44NS4zMDZsLTEzLjk5Ni0xLjM1Ni0uMDIzLS4wNjQgMi4xNzItLjg4NyAxMS4zNTctNC42MDNjLjIxMi0uMDg4LjM0Ni0uMDEuNTQ0LjA1Ni41NjYuMTk1LjU3OC42MjYuNjMgMS4wOGwuNTcgNC45MTNjLjAxNy4xNC4wMTQuMjQ2LS4xMzUuMzIzbC4wMDEuMDA0em0tLjQ4LTkuMDQ4Yy0uMDIzLjE3NS0uMTA2LjIyNS0uMjQ4LjI5YS4zNS4zNSAwIDAgMS0uNDEzLS4wODlMMjEuODI1IDIzLjQ3NWMtLjIyLS4yMzQtLjMxMi0uNTU3LS4yNDYtLjg3LjA2Mi0uMTI1LjIxNy0uMTQuMzM0LS4xOWwxMy45NzItNS45OGMuMjA0LS4xLjM2My0uMTQuNTIuMDc1YS42OC42OCAwIDAgMCAuMjkzLjE5OWMuMTM3LjA1Ni4xOTQuMTI4LjE2My4yMThsLTIuMjQzIDE2LjY5My0uMDE2LS4wMDN6bTEuNTkgOC43NGwtLjIyNy0xLjgxNC0uNDA4LTMuNDc3Yy0uMDQtLjMyLS4wNjctLjU4NC4yNzgtLjgzNC4zNzMtLjI4Mi41NTMtLjc0Ni40NjQtMS4yLS4wMTQtLjEzMi0uMDEtLjIxNi4xMS0uMjk2bDYuODQtNC41NzVjLjAzNS0uMDEuMDctLjAyLjEwNi0uMDI1TDM2LjIgNDIuMzZ6bTcuNDMtMTQuNTlhMS4wMyAxLjAzIDAgMCAwLS4xNzMuODA5Yy4wNDYuMTcyLS4wMzguMzUyLS4yLjQzbC03LjMzMiA0LjkzM2MtLjA4LjA1Ni0uMTQ3LjE1Ni0uMjgzLjA4LS4xNS0uMDgzLS4wOTUtLjIwMy0uMDgtLjNsMi4yMjYtMTYuNTMzYy4wMTctLjEyMi4wNDUtLjI0Mi4wODUtLjQ0NWwxLjMyNCAyLjM4OCA0LjQyOCA4LjA0M2MuMTQ2LjE3NC4xNS40MjYuMDA4LjYwNGgtLjAwM3oiIGZpbGw9IiNmZmYiLz48ZyBvcGFjaXR5PSIuMyI+PHBhdGggZD0iTTM2LjY4IDE2LjY5M2MtLjExNC0uMDM4LS4yMTUtLjEwMy0uMjkzLS4xOS0uMTU2LS4yMDMtLjMxNi0uMTYtLjUyLS4wNzJsLTEzLjk1NiA1LjY5Yy0uMTE2LjA0OC0uMjcyLjA1OC0uMzM0LjE4LS4wNjUuMjk3LS4wNDggMS4xLjE3MiAxLjMyMmwxMi4wODcgMTAuNTRjLjEuMTE2LjI3Mi4xNTIuNDEzLjA4NS4xNDItLjA2LjIyNy0uMTA2LjI0OC0uMjc1bDIuMzQ1LTE3LjA3OGMuMDMzLS4wOC0uMDI0LS4xNS0uMTYtLjIwM3oiIGZpbGw9IiNmZWZlZmUiLz48cGF0aCBkPSJNMzMuNzcgMzQuNjY1Yy00LjAzLTMuMjc2LTguNTA3LTcuNTU0LTEyLjU0LTEwLjgzLS4wOTMtLjA3NS0uMTctLjI1LS4zNTQtLjEzMnMtLjQ0NS4xMDYtLjQ4LjQybC0uNTc4IDQuNzUtLjgzNSA2Ljc5LS44NjggNC44MzVjLS4wNDUuMTE3LjA0NS4xNjcuMTc3LjIwNS4yMjIuMDYuNDE4LjE4LjU2Mi4zNDguMTI1LjE1NC4yMzQuMTM1LjM5Ni4wNzRMMzMuNjI1IDM1LjVhLjUzLjUzIDAgMCAwIC4yOTgtLjM4MmMuMDMtLjE2NC0uMDI2LS4zMzItLjE1LS40NTJsLS4wMDMtLjAwMXoiIGZpbGw9IiNmNGY1ZjYiLz48L2c+PC9zdmc+",
		backgroundColor: "rgb(134, 75, 255)",
		position: {
			mobile: {
				left: 506,
				top: 140,
			},
			desktop: {
				left: 325,
				top: 285,
			},
		},
	},
	{
		name: "arduino",
		export: "Arduino",
		img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgc3Ryb2tlPSIjZmZmIiBmaWxsPSJub25lIiB4bWxuczp2PSJodHRwczovL3ZlY3RhLmlvL25hbm8iPjxwYXRoIGQ9Ik0xNC4yMzggMTguMDczYy02LjY3LS41My0xMi4yNzcgNy4zNTQtOS41MiAxMy40NyAyLjY2MyA2LjYyNSAxMi43IDguNDMgMTcuNDg1IDMuMTE3IDQuNjIzLTQuNTMgNi40MS0xMS40OCAxMi4wMzYtMTUuMDYyIDUuNzU2LTMuOTI3IDE1LjAzMi0uMjIgMTYuMTIzIDYuNzY3IDEuMDk2IDYuNy02LjExIDEzLjIwNi0xMi42NSAxMS4yMjMtNC44MjItMS4xLTguMjktNS4yMDQtMTAuMjY1LTkuNTI4LTIuNDIyLTQuMTM4LTUuNTktOC41NDgtMTAuNTMtOS43MS0uODc4LS4yLTEuNzgtLjI3OC0yLjY4LS4yNzd6IiBzdHJva2Utd2lkdGg9IjQuMTQiLz48cGF0aCBzdHJva2Utd2lkdGg9IjEuNzU0IiBkPSJNMTAuMzA4IDI3LjU2Mmg4LjQyIi8+PHBhdGggZD0iTTM2LjEzMiAyNy41NjJoNy4wMThtLTMuNTY0LTMuNTI0djcuMDE4IiBzdHJva2Utd2lkdGg9IjIuMjQ2Ii8+PC9zdmc+",
		backgroundColor: "rgb(4, 221, 178)",
		position: {
			mobile: {
				left: 683,
				top: 140,
			},
			desktop: {
				left: 650,
				top: 280,
			},
		},
	},
	{
		name: "python",
		export: "Python",
		img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0iI2ZmZiIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNMjcuNzUyIDhjLTEwLjEwMiAwLTkuNDcgNC4zOC05LjQ3IDQuMzhsLjAxIDQuNTM4aDkuNjR2MS4zNjNIMTQuNDY0UzggMTcuNTQ4IDggMjcuNzRzNS42NDIgOS44MyA1LjY0MiA5LjgzaDMuMzY3di00Ljczcy0uMTgtNS42NDIgNS41NTItNS42NDJoOS41NnM1LjM3Mi4wODcgNS4zNzItNS4yVjEzLjI4UzM4LjMxIDggMjcuNzUzIDh6bS01LjMxNSAzLjA1MmExLjczIDEuNzMgMCAwIDEgMS43MzQgMS43MzRjMCAuOTYtLjc3NSAxLjczNC0xLjczNCAxLjczNHMtMS43MzQtLjc3NS0xLjczNC0xLjczNC43NzUtMS43MzQgMS43MzQtMS43MzR6bTUuNjAzIDM2LjUzMmMxMC4xMDIgMCA5LjQ3LTQuMzggOS40Ny00LjM4di00LjUzOGgtOS42NHYtMS4zNjNoMTMuNDY4czYuNDY0LjczMyA2LjQ2NC05LjQ2LTUuNjQyLTkuODMtNS42NDItOS44M2gtMy4zNjd2NC43M3MuMTggNS42NDItNS41NTIgNS42NDJoLTkuNTZzLTUuMzcyLS4wODctNS4zNzIgNS4ydjguNzI3cy0uODE2IDUuMjgyIDkuNzQgNS4yODJ6bTUuMzE1LTMuMDUyYTEuNzMgMS43MyAwIDAgMS0xLjczNC0xLjczNGMwLS45Ni43NzUtMS43MzQgMS43MzQtMS43MzRzMS43MzQuNzc1IDEuNzM0IDEuNzM0LS43NzUgMS43MzQtMS43MzQgMS43MzR6Ii8+PC9zdmc+",
		backgroundColor: "rgb(23, 195, 123)",
		position: {
			mobile: {
				left: 306,
				top: 200,
			},
			desktop: {
				left: 0,
				top: 320,
			},
		},
	},
	{
		name: "tensorflow",
		export: "TensorFlow",
		img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiB4bWxuczp2PSJodHRwczovL3ZlY3RhLmlvL25hbm8iPjxwYXRoIGQ9Ik00My4yNzYgMTguMjk3TDMwLjYyIDExLjE2NGMtLjY2Ni0uMzc1LTEuNS0uMTQtMS44ODYuNTI2LS4xMTcuMjA3LS4xNzguNDQyLS4xNzguNjh2MzAuOTdjMCAuNzY1LjYyIDEuMzg1IDEuMzg1IDEuMzg1YTEuMzkgMS4zOSAwIDAgMCAuNjg4LS4xODNsMy40LTEuOTQ3Yy40My0uMjQ3LjY5Ny0uNzA1LjY5Ny0xLjIwMnYtNi43NjdsMi41NyAxLjQ2Yy42NjUuMzc4IDEuNS4xNDUgMS44ODgtLjUyLjEyLS4yMTMuMTgzLS40NTMuMTgtLjY5OGwtLjAzNy0zLjY2M2MtLjAwNS0uNS0uMjY4LS45NC0uNjkzLTEuMTg2bC0zLjktMi4yNTR2LTYuNWw3LjE3NyA0LjE2Yy42NjIuMzg0IDEuNS4xNTggMS44OTItLjUwMy4xMjItLjIuMTg3LS40NS4xODctLjY5NHYtNC43MzVjMC0uNS0uMjctLjk2LS43MDUtMS4yMDZ6bS0zMS44MiAwbDEyLjY1Ny03LjEzNGMuNjY2LS4zNzUgMS41LS4xNCAxLjg4Ni41MjYuMTE3LjIwNy4xNzguNDQyLjE3OC42OHYzMC45N2MwIC43NjUtLjYyIDEuMzg1LTEuMzg1IDEuMzg1YTEuMzkgMS4zOSAwIDAgMS0uNjg4LS4xODNsLTMuNC0xLjk0N2MtLjQzLS4yNDctLjY5Ny0uNzA1LS42OTctMS4yMDJWMjEuMjc1bC03LjE3NyA0LjE2Yy0uNjYyLjM4NC0xLjUuMTU4LTEuODkyLS41MDMtLjEyMi0uMi0uMTg3LS40NS0uMTg3LS42OTR2LTQuNzM1YzAtLjUuMjctLjk2LjcwNS0xLjIwNnoiLz48L3N2Zz4=",
		backgroundColor: "rgb(252, 60, 45)",
		position: {
			mobile: {
				left: 576,
				top: 260,
			},
			desktop: {
				left: 465,
				top: 400,
			},
		},
	},
	{
		name: "raspberry",
		export: "Raspberry Pi",
		img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNMzMuODMyIDkuMzU1Yy41Mi0uMTY0Ljk3My0uNTk4IDEuNjYtLjA1Ny41NzgtLjIyMyAxLjEzOC0uMyAxLjY0LjE1My43NzQtLjEgMS4wMjUuMTA3IDEuMjE2LjM1LjE3LS4wMDQgMS4yNy0uMTc1IDEuNzc3LjU4IDEuMjctLjE1IDEuNjcuNzQ3IDEuMjE2IDEuNTgzLjI2LjQuNTI4Ljc5OC0uMDc4IDEuNTYzLjIxNC40MjYuMDgyLjg4OC0uNDI0IDEuNDQ4LjEzMy42LS4xMyAxLjAyMi0uNiAxLjM1LjA4OC44Mi0uNzUyIDEuMjk2LTEuMDAzIDEuNDY2LS4wOTYuNDc4LS4yOTcuOTI4LTEuMjU2IDEuMTc4LS4xNTguNzEyLS43MzUuODM1LTEuMjkzLjk4NCAxLjg0NSAxLjA3MiAzLjQyNyAyLjQ4MyAzLjQxNiA1Ljk0NWgwbC4yNy40ODJjMi4xMTYgMS4yODcgNC4wMiA1LjQyMiAxLjA0MyA4Ljc4My0uMTk0IDEuMDUyLS41MiAxLjgwOC0uODEgMi42NDQtLjQzNCAzLjM3LTMuMjY4IDQuOTQ4LTQuMDE1IDUuMTM1LTEuMDk1LjgzNC0yLjI2MiAxLjYyNi0zLjg0IDIuMTgtMS40ODggMS41MzUtMy4xIDIuMTItNC43MiAyLjEyaDAtLjA3MmMtMS42Mi4wMDEtMy4yMzMtLjU4NC00LjcyLTIuMTItMS41NzgtLjU1NC0yLjc0NS0xLjM0Ni0zLjg0LTIuMTgtLjc0Ny0uMTg3LTMuNTgtMS43NjUtNC4wMTUtNS4xMzUtLjMtLjgzNi0uNjE2LTEuNTkyLS44MS0yLjY0NC0yLjk3Ni0zLjM2LTEuMDczLTcuNDk2IDEuMDQzLTguNzgzaDBsLjI3LS40ODJjLS4wMS0zLjQ2MiAxLjU3LTQuODczIDMuNDE2LTUuOTQ1LS41NTgtLjE1LTEuMTM1LS4yNzItMS4yOTMtLjk4NC0uOTYtLjI1LTEuMTYtLjctMS4yNTYtMS4xNzgtLjI1LS4xNy0xLjEtLjY0Ny0xLjAwMy0xLjQ2Ni0uNDctLjMzLS43MzItLjc1Mi0uNi0xLjM1LS41MDUtLjU2LS42MzgtMS4wMjItLjQyNC0xLjQ0OC0uNjA2LS43NjUtLjMzOC0xLjE2Mi0uMDc4LTEuNTYzLS40NTUtLjgzNi0uMDUzLTEuNzMzIDEuMjE2LTEuNTgzLjUwNS0uNzU0IDEuNjA3LS41ODIgMS43NzctLjU4LjE5LS4yNDIuNDQyLS40NSAxLjIxNi0uMzUuNS0uNDU0IDEuMDYyLS4zNzYgMS42NC0uMTUzLjIzNi0uMTg2LjQ0NC0uMjU4LjYzNy0uMjY0LjM3LS4wMS42ODIuMjEzIDEuMDIzLjMyLjgzLS4yNzIgMS4wMi4xIDEuNDMuMjUyLjkwNi0uMTkyIDEuMTgyLjIyNSAxLjYxNi42NjZoMGwuNTA1LS4wMWMxLjM2Ny44MDYgMi4wNDUgMi40NDYgMi4yODUgMy4zLjI0LS44NDMuOTItMi40ODQgMi4yODctMy4zaDBsLjUwNS4wMWMuNDM1LS40NC43LS44NTcgMS42MTYtLjY2Ni40MDgtLjE1LjU5OC0uNTIzIDEuNDMtLjI1MnptLTEuNjM4IDM0LjA1Yy0uMDA1LS44NDctMi4zNDctMS40ODUtNC4wOTItMS40MS0xLjczNS0uMDQzLTQuMzk1LjY5NS00LjM2MiAxLjY0LS4wMjguNjQ1IDIuMDg4IDIuNTA2IDQuMjQ2IDIuNDEzIDIuMDg0LjAzNiA0LjIzNy0xLjgyMiA0LjIwOC0yLjY0NHptMi4xMDYtNi45MDJjLTEuMzQ0IDEuNTc1LTIuMDkzIDQuNDQ3LTEuMTEyIDUuMzcyLjkzOC43MiAzLjQ1NS42MTggNS4zMTUtMS45NjIgMS4zNS0xLjczMy44OTgtNC42MjcuMTI3LTUuMzk1LTEuMTQ2LS44ODYtMi43OS4yNDgtNC4zMyAxLjk4NXptLTEyLjY0NS40NzVjLTEuNDI2LTEuNjU1LTMuMjgtMi42NC00LjQ3OC0xLjkxLS44MDIuNi0uOTUgMi42ODguMTkzIDQuNzMgMS42OTMgMi40MzMgNC4wNzYgMi42NzYgNS4wNTcgMi4wODUgMS4wMzctLjc3NS40Ny0zLjQwNi0uNzcyLTQuOTAzem02LjQyOC00LjI2Yy0yLjQgMC00LjM0NSAxLjc5NC00LjM0NSA0LjAwNnMxLjk0NSA0LjAwNiA0LjM0NSA0LjAwNiA0LjM0NS0xLjc5NCA0LjM0NS00LjAwNi0xLjk0NS00LjAwNi00LjM0NS00LjAwNnptLTEyLjQzNyAxLjgzYzEuNTguNzAzIDIuODctNy44Ni45MjUtNy4zNC0zLjIyNSAxLjg0Mi0yLjY2NSA1Ljk0LS45MjUgNy4zNHptMjQuMzEtLjEwN2MxLjc0LTEuNCAyLjMtNS40OTctLjkyNS03LjM0LTEuOTQ0LS41Mi0uNjU2IDguMDQuOTI1IDcuMzR6bS0xNC4zOTQtOS4xNjNjLTEuNzk3LTEuMTg0LTQuMzg2LS40MjYtNS43ODQgMS42OTRzLTEuMDczIDQuOC43MjQgNS45ODMgNC4zODYuNDI2IDUuNzg0LTEuNjk0IDEuMDczLTQuOC0uNzI0LTUuOTgzem00Ljg3LS4yMTRjLTEuNzk3IDEuMTg0LTIuMTIgMy44NjMtLjcyNCA1Ljk4M3MzLjk4NyAyLjg4IDUuNzg0IDEuNjk0IDIuMTItMy44NjMuNzI0LTUuOTgzLTMuOTg3LTIuODgtNS43ODQtMS42OTR6bTguMDMuNzI2Yy4xMTItMy42MzctMi42NzgtNS42My02LjAzMy01LjA2NC0xLjIzNi4yMDggNS45MjIgNi40NTggNi4wMzMgNS4wNjR6bS0yMS4zMzMtLjEwN2MuMSAxLjM5NCA3LjI2OC00Ljg1NiA2LjAzMy01LjA2NC0zLjM1NC0uNTY2LTYuMTQ1IDEuNDI2LTYuMDMzIDUuMDY0em0xMC44NS01LjkxMmMtMi4wMDItLjA1Mi0zLjkyMyAxLjQ4Ni0zLjkyOCAyLjM3OC0uMDA2IDEuMDg0IDEuNTgzIDIuMTk0IDMuOTQyIDIuMjIyIDIuNDEuMDE3IDMuOTQ2LS44ODggMy45NTMtMi4wMDcuMDEtMS4yNjctMi4xOS0yLjYxMi0zLjk2Ny0yLjU5M3ptLTYuNzk3LTkuNzY3Yy4yLjIzNS40NTUuNDY0LjE3NC43MzMtLjM4OC0uMjQ2LS43NzgtLjQ5LTEuNy0uNjY2LjIwNy4yMzUuNjM2LjQ3LjM3Ni43MDUtLjQ4Ny0uMTktMS4wMjUtLjMyNi0xLjYyLS40MDUuMjg1LjIzOC41MjMuNDcyLjMuNjU2LS41Mi0uMTYzLTEuMjQtLjM4Mi0xLjk0LS4xOTNoMGwuNDQ0LjQ1NGMuMDUuMDYtMS4wMzguMDQ3LTEuNzU2LjA1OC4yNjIuMzcuNTMuNzI2LjY4NSAxLjM2LS4wNy4wNzMtLjQyNy4wMzMtLjc2MiAwIC4zNDQuNzM1Ljk0LjkyIDEuMDggMS4yMzUtLjIuMTYyLS41MDIuMTItLjgyLjAxLjI0OC41MTguNzY3Ljg3MyAxLjE3NyAxLjI5My0uMTA0LjA3NS0uMjg1LjEyLS43MTQuMDY4LjM4LjQxLjgzNy43ODMgMS4zOCAxLjEyLS4wOTYuMTEzLS40MjcuMTA4LS43MzMuMTE2LjQ5Mi40OSAxLjEyNS43NDIgMS43MTggMS4wNjItLjI5Ni4yMDUtLjUwNy4xNTctLjczMy4xNTQuNDIuMzUgMS4xMzMuNTMyIDEuNzk1Ljc0My0uMTI2LjItLjI1Mi4yNTMtLjUyLjMxLjcuMzk0IDEuNzA1LjIxNCAxLjk4OC40MTUtLjA2OC4xOTgtLjI2LjMyNy0uNDkyLjQzNCAxLjEyOC4wNjcgNC4yMTUtLjA0MiA0LjgwNi0yLjQxMy0xLjE1NS0xLjI4OC0zLjI2NC0yLjgtNi44OS00LjY3IDIuODIyLjk2IDUuMzY4IDIuMjM3IDcuNSAzLjk5NSAyLjUwNS0xLjE4NC43NzgtNC4xNy0uNDQ0LTUuMzU2LS4wNjIuMzEzLS4xMzIuNTEtLjIxMi41Ny0uMzk4LS40MzMtLjcyMy0uODc3LTEuMjM1LTEuMjkzbC4wMDMuMDgyLjAxNi4xNjZjLjAxMy4xNjYgMCAuMzI3LS4yMDMuNDU2LS4yNzUtLjM3NS0uNjQ2LS43LTEuMTQtLjk5NC4yMzcuNDE2LjA0LjU0Mi0uMDg3LjcxNGgwbC0uMjUyLS4yMThhMy43IDMuNyAwIDAgMC0xLjE3Ni0uNjk5em0xMy43MDYgMGMtLjY5NC4yNTctMS4wNTIuNTktMS40MjguOTE3LS4xMjgtLjE3Mi0uMzI0LS4zLS4wODctLjcxNC0uNDkzLjI4NC0uODY0LjYyLTEuMTQuOTk0LS4yMDMtLjEzLS4yMTYtLjI5LS4yMDMtLjQ1NmwuMDE2LS4xNjYuMDAzLS4wODJjLS41MTIuNDE3LS44MzcuODYtMS4yMzUgMS4yOTMtLjA4LS4wNTgtLjE1LS4yNTYtLjIxMi0uNTctMS4yMjIgMS4xODYtMi45NSA0LjE3Mi0uNDQ0IDUuMzU2IDIuMTMtMS43NiA0LjY3Ny0zLjAzNyA3LjUtMy45OTUtMy42MjcgMS44Ny01LjczNiAzLjM4My02Ljg5IDQuNjcuNTkyIDIuMzcgMy42NzggMi40OCA0LjgwNiAyLjQxMy0uMjMtLjEwOC0uNDI0LS4yMzYtLjQ5Mi0uNDM0LjI4My0uMiAxLjI4Ny0uMDIgMS45ODgtLjQxNS0uMjctLjA1Ni0uMzk1LS4xLS41Mi0uMzEuNjYyLS4yMSAxLjM3Ni0uMzkzIDEuNzk1LS43NDNsLS4xNy4wMDZjLS4xNy4wMDUtLjM0My0uMDA3LS41NjUtLjE2bC4yMjQtLjExNy40NS0uMjNjLjM3My0uMTk1LjczNi0uNDEgMS4wNDMtLjcxNC0uMzA3LS4wMDgtLjYzNy0uMDAzLS43MzMtLjExNi41NDMtLjMzNiAxLS43IDEuMzgtMS4xMi0uNDMuMDUyLS42LjAwNy0uNzE0LS4wNjguNC0uNDIuOTMtLjc3NSAxLjE3Ny0xLjI5My0uMzIuMS0uNi4xNTItLjgyLS4wMS4xNC0uMzE1LjczNy0uNSAxLjA4LTEuMjM1LS4zMzUuMDMzLS42OS4wNzMtLjc2MiAwIC4xNTYtLjYzNS40MjMtLjk5LjY4NS0xLjM2bC0uNDA2LS4wMDRoLS4yODVsLTEuMDY1LS4wNTIuNDQ0LS40NTRjLS43LS4xOS0xLjQyLjAzLTEuOTQuMTkzLS4yMzQtLjE4NS4wMDQtLjQxOC4zLS42NTYtLjU5Ni4wOC0xLjEzNS4yMTctMS42Mi40MDUtLjE4LS4xNjMtLjAzLS4zMjUuMTQ4LS40ODhsLjEyLS4xMDguMTA4LS4xMDhjLS45Mi4xNzUtMS4zMS40Mi0xLjcuNjY2LS4yOC0uMjctLjAxNi0uNS4xNzQtLjczM3oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=",
		backgroundColor: "rgb(225, 0, 0)",
		position: {
			desktop: {
				left: 955,
				top: 420,
			},
		},
	},
	{
		name: "coreml",
		export: "CoreML",
		img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48cGF0aCBkPSJNMTEuODg0IDM4Ljc4VjI0LjIyN2guMTJsNS44NDIgMTQuNTU0aDIuODNsNS44NDItMTQuNTU0aC4xMlYzOC43OGg0LjAxVjE3LjIySDI1LjQzbC02LjEgMTUuNDhoLS4xMmwtNi4xLTE1LjQ4SDcuODc1VjM4Ljc4aDQuMDF6bTM2LjI0IDB2LTMuNzM2aC05LjQwM1YxNy4yMmgtNC41VjM4Ljc4aDEzLjkwM3oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=",
		backgroundColor: "rgb(167, 187, 195)",
		position: {
			desktop: {
				left: 785,
				top: 520,
			},
		},
	},
	{
		name: "unity",
		export: "Unity",
		img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgeG1sbnM6dj0iaHR0cHM6Ly92ZWN0YS5pby9uYW5vIj48ZGVmcz48ZmlsdGVyIHg9Ii02OC4yJSIgeT0iLTM0LjElIiB3aWR0aD0iMjM2LjQlIiBoZWlnaHQ9IjIzNi40JSIgPjxmZU1vcnBob2xvZ3kgcmFkaXVzPSIxMCIgaW49IlNvdXJjZUFscGhhIi8+PGZlT2Zmc2V0IGR5PSIzMCIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjI1Ii8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjI1Mzg1MTYxNyAwIi8+PC9maWx0ZXI+PC9kZWZzPjxwYXRoIGQ9Ik0zNy4yNiA0MC4wNTJsLTcuMTgyLTEyLjA3IDcuMTgyLTEyLjA3IDMuNDYyIDEyLjA3LTMuNDYyIDEyLjA3em0tMTUuOTg1LTEuMTc4bC05LjAyNC04Ljk0MmgxNC4zNjVsNy4xODIgMTIuMDctMTIuNTIzLTMuMTI4em0wLTIxLjgybDEyLjQ4Ni0zLjEyOC03LjE4MiAxMi4wN0gxMi4yMTRsOS4wNi04Ljk0MnpNMzkuNjE3IDhMMjMuMyAxMi4yMzIgMjAuODcgMTYuNGwtNC44OTgtLjAzN0w0IDI3Ljk4MiAxNS45NyAzOS42bDQuODk4LS4wMzcgMi40MyA0LjE1OEwzOS42MTcgNDggNDQgMzIuMTRsLTIuNDY4LTQuMTJMNDQgMjMuODk3IDM5LjYxNyA4eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==",
		backgroundColor: "rgb(51, 51, 51)",
		position: {
			mobile: {
				left: 420,
				top: 300,
			},
			desktop: {
				left: 230,
				top: 480,
			},
		},
	},
];

export const blogPosts = [
	{
		img: "/assets/blog/use-your-model-in-power-platform/lobe-and-power-platform.png",
		title: "Use your model in Power Platform",
		description:
			"We're excited to announce a new integration with Microsoft Power Platform.",
		date: "15 November 2021",
		type: "Release",
	},
	{
		img: "/assets/blog/introducing-new-ways-to-use-your-model/March Release Cards 4.jpg",
		title: "Introducing new ways to use your model",
		description:
			"Lobe 0.9 introduces new ways of using and exporting your model to your app.",
		date: "Coming soon",
		type: "Release",
	},
	{
		img: "/assets/blog/exporting-your-model-101/March Release Bison.jpg",
		title: "Using your model 101",
		description:
			"Learn everything you need to know to export your model and use it in your app.",
		date: "Coming soon",
		type: "Product",
	},
	{
		img: "/assets/blog/machine-learning-kit-with-adafruit/Adafruit Lobe Hero.jpg",
		title: "Machine Learning Kit with Adafruit",
		description:
			"Introducing a brand new machine learning kit from Adafruit and Lobe.",
		date: "Coming soon",
		type: "Product",
	},
	{
		img: "/assets/blog/four-new-features-in-lobe/Release 2.jpg",
		title: "Four New Features in Lobe",
		description:
			"Select your camera source, export your model to new formats, and more in the new Lobe.",
		date: "Coming soon",
		type: "Release",
	},
	{
		img: "/assets/blog/endless-camera-sources/4.jpg",
		title: "Endless Camera Sources",
		description:
			"Deep dive into the new camera sources and all the possibilities they open up inside of Lobe.",
		date: "Coming soon",
		type: "Product",
	},
	{
		img: "/assets/blog/introducing-the-new-lobe/Plants Overlay.jpg",
		title: "Machine Learning Made Easy",
		description:
			"Everything you need to train custom machine learning models in a free, easy to use app.",
		date: "Coming soon",
		type: "Release",
	},
];

export const docsLinks = [
	{
		name: "Welcome",
	},
	{
		name: "Label",
	},
	{
		name: "Train",
	},
	{
		name: "Results",
	},
	{
		name: "Play",
	},
	{
		name: "Export",
	},
	{
		name: "Improving",
	},
	{
		name: "Tips",
	},
];
