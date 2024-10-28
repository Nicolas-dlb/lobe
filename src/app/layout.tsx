import CallToAction from "./components/CallToAction/CallToAction";
import Header from "./components/Header/Header";
import "./style/globals.css";
import Footer from "./components/Footer/Footer";
import ConfettiProvider from "./Providers/ConfettiProvider";
import WatchTourProvider from "./Providers/WatchTourProvider";

export const metadata = {
	title: "Lobe",
	description: "Lobe website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="antialiased pt-20">
				<ConfettiProvider>
					<WatchTourProvider>
						<Header />
						{children}
						<CallToAction />
						<Footer />
					</WatchTourProvider>
				</ConfettiProvider>
			</body>
		</html>
	);
}
