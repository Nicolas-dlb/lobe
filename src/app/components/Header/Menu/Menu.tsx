"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import ButtonDownloadMenu from "./ButtonDownloadMenu/ButtonDownloadMenu";
import NavbarMenu from "./NavbarMenu/NavbarMenu";

interface MenuProps {
	isOpen: boolean;
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

function Menu({ isOpen, setIsMenuOpen }: MenuProps) {
	const [closeWithoutAnimation, setCloseWithoutAnimation] = useState(false);
	const [props, set] = useSpring(() => ({
		from: { height: 0, boxShadow: "rgba(0, 0, 0, 0.2) 0px 30px 60px -10px" },
		// from: { height: 480, boxShadow: "rgba(0, 0, 0, 0) 0px 30px 60px -10px" },
		// to: { height: 0, boxShadow: "rgba(0, 0, 0, 0.2) 0px 30px 60px -10px" },
	}));

	const closeMenuWithoutAnimation = () => {
		set({
			height: 0,
			boxShadow: "rgba(0, 0, 0, 0.2) 0px 30px 60px -10px",
			immediate: true,
		});
		setIsMenuOpen(false);
	};

	useEffect(() => {
		set({
			height: isOpen ? 480 : 0,
			boxShadow: isOpen
				? "rgba(0, 0, 0, 0) 0px 30px 60px -10px"
				: "rgba(0, 0, 0, 0.2) 0px 30px 60px -10px",
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	return (
		<animated.div
			style={{ ...props }}
			className="px-8 md:hidden ease-in-out duration-[20ms] shadow-[rgba(0,0,0,0.2)_0px_30px_60px_-10px] transition-all backdrop-blur-xl absolute top-full left-0 right-0 bottom-0 flex-col items-start overflow-hidden"
		>
			{/* blurred background */}
			<div className="w-full h-[480px] backdrop-blur-xl bg-[hsla(0,0%,100%,.8)] -z-10 absolute left-0" />
			<NavbarMenu
				isMenuOpen={isOpen}
				closeMenuWithoutAnimation={closeMenuWithoutAnimation}
			/>
			<ButtonDownloadMenu />
		</animated.div>
	);
}

export default Menu;
