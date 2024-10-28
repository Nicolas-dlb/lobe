"use client";
import React, { ReactNode, createContext, useState } from "react";
import WatchTourModal from "../components/Hero/HeroInfo/WatchTourModal/WatchTourModal";

export const WatchTourContext = createContext({
	openModal: () => {},
	closeModal: () => {},
});

function WatchTourProvider({ children }: { children: ReactNode }) {
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<WatchTourContext.Provider value={{ openModal, closeModal }}>
			{children}
			<WatchTourModal isOpen={modalIsOpen} closeModal={closeModal} />
		</WatchTourContext.Provider>
	);
}

export default WatchTourProvider;
