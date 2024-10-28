import React, { useState } from "react";
import Modal from "react-modal";
import { useSpring, animated } from "@react-spring/web";
import ButtonCloseModal from "./ButtonCloseModal/ButtonCloseModal";
import YoutubeFrame from "./YoutubeFrame/YoutubeFrame";

const customStyles = {
	overlay: {
		background: "transparent",
		zIndex: "100",
	},
	content: {
		top: "0",
		left: "0",
		right: "0",
		bottom: "0",
		border: "none",
		background: "none",
		zIndex: "100",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "0",
		borderRadius: "0",
	},
};

Modal.setAppElement("body");

interface WatchTourModalProps {
	isOpen: boolean;
	closeModal: () => void;
}

function WatchTourModal({ isOpen, closeModal }: WatchTourModalProps) {
	const [FrameLoaded, setFrameLoaded] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const animation = useSpring({
		opacity: !isClosing && isOpen && FrameLoaded ? 1 : 0,
		onRest: () => {
			if (isClosing) {
				closeModal();
				setIsClosing(false);
			}
		},
		config: {
			duration: 100,
		},
	});

	const AnimeCloseModal = () => {
		setIsClosing(true);
	};

	return (
		<Modal
			isOpen={isOpen}
			shouldReturnFocusAfterClose={false}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<animated.div
				onClick={AnimeCloseModal}
				className="backdrop-blur-md bg-[rgba(51,51,51,.8)] w-full h-full flex items-center justify-center"
				style={animation}
			>
				<YoutubeFrame setFrameLoaded={setFrameLoaded} />
				<ButtonCloseModal closeModal={AnimeCloseModal} />
			</animated.div>
		</Modal>
	);
}

export default WatchTourModal;
