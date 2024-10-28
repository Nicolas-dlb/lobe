import { useState } from "react";

function Question({
	question,
	children,
}: {
	question: string;
	children: React.ReactNode;
}) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="text-grey border-b border-gray-200 dark:border-gray-700">
			<h2>
				<button
					type="button"
					className="flex items-center justify-between w-full py-5 font-bold text-left dark:text-gray-400"
					aria-expanded={isOpen ? "true" : "false"}
					aria-controls="accordion-flush-body-1"
					onClick={() => setIsOpen((prev) => !prev)}
				>
					<span>{question}</span>
					<svg
						data-accordion-icon
						className={`w-3 h-3 ${!isOpen && "rotate-180"} shrink-0`}
						aria-hidden={!isOpen ? "true" : "false"}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 10 6"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M9 5 5 1 1 5"
						/>
					</svg>
				</button>
			</h2>
			{isOpen && children}
		</div>
	);
}

export default Question;
