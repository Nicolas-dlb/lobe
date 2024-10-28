export interface Model {
	id: string;
	img: string;
	video: string;
	altText: string;
	name: string;
	description: string;
	available: boolean;
}

export interface Feature {
	id: number;
	video: string;
	img: string;
	title: string;
	description: string;
	altText: string;
}

export type FeatureWithoutId = Omit<Feature, "id">;

export interface Exemple {
	name: string;
	img: string;
	video: string;
	title: string;
	altText: string;
}

export type SocialNetwork = "Twitter" | "Facebook" | "Linkedin";
