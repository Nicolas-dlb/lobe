"use client";
import React, { useState } from "react";
import ButtonDownloadHeader from "./ButtonDownloadHeader/ButtonDownloadHeader";
import BlurBackground from "./BlurBackground/BlurBackground";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import Menu from "./Menu/Menu";
import ButtonToggleMenu from "./ButtonToggleMenu/ButtonToggleMenu";

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="flex z-50 justify-between top-0 px-6 xl:px-16 h-20 items-center fixed w-full">
			<BlurBackground />
			<Logo />
			<Navbar />
			<ButtonDownloadHeader />
			<ButtonToggleMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
			<Menu isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
		</header>
	);
}

export default Header;
