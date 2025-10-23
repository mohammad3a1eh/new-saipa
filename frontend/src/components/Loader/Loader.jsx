import "./Loader.css";

import { useEffect, useState } from "react";
import Loading from "../../assets/logo/logo.mp4";


export const Loader = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const hasVisited = localStorage.getItem("visited");

		if (!hasVisited) {
			setShow(true);
			localStorage.setItem("visited", "true");


			setTimeout(() => setShow(false), 5000);
		}
	}, []);

	if (!show) return null;

	return (
		<div className="loader-overlay">
			<video
				className="loader-video"
				src={Loading}
				autoPlay
				muted
				loop
				playsInline
			/>
		</div>
	);
}
