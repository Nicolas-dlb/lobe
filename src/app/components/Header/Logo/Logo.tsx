import Image from "next/image";
import React from "react";
import Link from "next/link";

function Logo() {
	return (
		<Link className="rounded-sm outline-offset-[7px]" href="/">
			<Image
				src="/assets/img/logo.svg"
				alt="lobe logo"
				height={21}
				width={83}
			/>
		</Link>
	);
}

export default Logo;
