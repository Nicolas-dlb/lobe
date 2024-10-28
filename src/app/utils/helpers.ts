export const getHomeVideoTransition = () => {
	const x = 200; // Coordonnée X du pixel
	const y = 550; // Coordonnée Y du pixel

	// Obtenez l'élément vidéo
	const videoElement = document.getElementById("HomeVideo") as HTMLVideoElement;

	// Créez un canevas pour effectuer une capture d'écran
	const canvas = document.createElement("canvas");
	const context = canvas.getContext("2d");

	// Assurez-vous que les dimensions du canevas correspondent à la vidéo
	canvas.width = videoElement?.videoWidth;
	canvas.height = videoElement?.videoHeight;

	// Effectuez la capture d'écran de la vidéo sur le canevas
	context!.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

	// Obtenez la couleur du pixel à partir de la capture d'écran
	const imageData = context!.getImageData(x, y, 1, 1);
	const pixelData = imageData.data;
	const backgroundColor = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;

	if (
		backgroundColor === "rgb(255, 255, 255)" ||
		backgroundColor === "rgb(254, 254, 254)" ||
		backgroundColor === "rgb(253, 253, 253)"
	) {
		return true;
	}

	return false;
};

export const slugify = (str: string) => {
	return String(str)
		.normalize("NFKD") // split accented characters into their base characters and diacritical marks
		.replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
		.trim() // trim leading or trailing whitespace
		.toLowerCase() // convert to lowercase
		.replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
		.replace(/\s+/g, "-") // replace spaces with hyphens
		.replace(/-+/g, "-"); // remove consecutive hyphens
};
