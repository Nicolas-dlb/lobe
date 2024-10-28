import React from "react";

interface CopywriteLineProps {
	value: string;
}

function CopywriteLine({ value }: CopywriteLineProps) {
	return <div className="mb-6 leading-none">{value}</div>;
}

export default CopywriteLine;
