import React from "react";
import FooterDesktop from "./FooterDesktop/FooterDesktop";
import FooterMobile from "./FooterMobile/FooterMobile";

function Footer() {
	return (
		<footer className="flex p-4 pt-0 sm:px-20 sm:pb-[60px] overflow-hidden xl:pb-[32px] items-center justify-center">
			<div className=" flex flex-col items-center flex-1 sm:flex-row sm:justify-around sm:max-w-[892px] sm:items-start  border-t-[rgba(0,0,0,.2)] sm:min-w-[767px] border-t-[.5px] xl:max-w-[1072px] py-[60px] px-[80px]">
				<FooterDesktop />
				<FooterMobile />
			</div>
		</footer>
	);
}

export default Footer;
