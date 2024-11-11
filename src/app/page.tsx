"use client";
import Hero from "@/app/components/Hero/Hero";
import MadeSimple from "@/app/components/MadeSimple/MadeSimple";
import Ship from "@/app/components/Ship/Ship";
import Testimonials from "@/app/components/Testimonials/Testimonials";
import Use from "@/app/components/Use/Use";
import React, { useEffect } from "react";
import Examples from "./components/Examples/Examples";

export default function Home() {
	useEffect(() => {
		// Function to handle smooth scrolling to the anchor on another page
		const scrollToAnchor = () => {
			const { hash } = window.location;
			if (hash) {
				const target = document.querySelector(hash);
				if (target) {
					target.scrollIntoView({
						behavior: "smooth",
					});
				}
			}
		};

		// Check if there's a hash in the URL and scroll to it on page load
		scrollToAnchor();

		// Add a listener to handle smooth scrolling when navigating to anchors
		const handleHashChange = () => {
			console.log("uhg");
			scrollToAnchor();
		};

		window.addEventListener("hashchange", handleHashChange);

		// Clean up the listener when the component unmounts
		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);

	return (
		<main className="flex flex-col overflow-hidden items-center">
			<Hero />
			<MadeSimple />
			<Use />
			<Ship />
			<Testimonials />
			<Examples />
		</main>
	);
}
