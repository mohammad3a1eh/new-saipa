

import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";

import {MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";


export default function RenaultStyleSlider({ slides = [], interval = 6000 }) {
	const [index, setIndex] = useState(0);
	const [playing, setPlaying] = useState(true);
	const timerRef = useRef(null);
	const containerRef = useRef(null);

	if (!slides || slides.length === 0) {
		slides = [
			{
				id: "demo-1",
				image:
					"https://files.virgool.io/upload/users/2755698/posts/xzphv4xxircg/7jwbh9rtfigc.jpg",
				title: "شاهین - سایپا نوین",
				subtitle: "ایمن‌ترین خودروی ملی",
				link: "#",
			},
			{
				id: "demo-2",
				image:
					"https://cdn.rokna.net/thumbnail/SlimCyAPGSic/4AWGqs3C3zj1VoMP2nMyyYaJhBmE6YiWGA6feRzhrZz3lrNHyp04x6-1-4nX83BW/%D8%B3%D8%A7%DB%8C%D9%86%D8%A7+.jpg",
				title: "ساینا اس - یه تغییر به موقع",
				subtitle: "طراحی مدرن‌تر، کابین ارتقایافته و ایمنی بیشتر، تجربه‌ای تازه از رانندگی",
				link: "#",
			},
			{
				id: "demo-3",
				image:
					"https://www.parskhodro.ir/Portals/0/PropertyAgent/389/Files/224/06.jpg",
				title: "سهند؛ زیبایی، ایمنی و صرفه‌جویی",
				subtitle: "نسلی نو در سدان‌های سایپا",
				link: "#",
			},
			{
				id: "demo-3",
				image:
					"https://files.virgool.io/upload/users/2597843/posts/i1xjpm3psrey/2vbcmuxcsl9q.jpg",
				title: "کوییک؛ هاچ‌بک کراس ملی",
				subtitle: "انتخابی مدرن برای نسل جوان",
				link: "#",
			},
			{
				id: "demo-3",
				image:
					"https://akharinkhodro.ir/wp-content/uploads/2025/06/zamyad-ex-8.webp",
				title: "وانت نیسان زامیاد",
				subtitle: "همراه مطمئن در هر مسیر",
				link: "#",
			},
		];
	}

	useEffect(() => {
		if (!playing) return;
		timerRef.current = setInterval(() => {
			setIndex((i) => (i + 1) % slides.length);
		}, interval);
		return () => clearInterval(timerRef.current);
	}, [playing, interval, slides.length]);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;
		const onEnter = () => setPlaying(false);
		const onLeave = () => setPlaying(true);
		el.addEventListener("mouseenter", onEnter);
		el.addEventListener("mouseleave", onLeave);
		return () => {
			el.removeEventListener("mouseenter", onEnter);
			el.removeEventListener("mouseleave", onLeave);
		};
	}, []);

	useEffect(() => {
		const onKey = (e) => {
			if (e.key === "ArrowRight") next();
			if (e.key === "ArrowLeft") prev();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	});

	useEffect(() => {
		if (slides[index]) {
			document.body.style.setProperty(
				"--bg-image",
				`url(${slides[index].image})`
			);
		}
	}, [index, slides]);


	const goTo = (i) => setIndex(((i % slides.length) + slides.length) % slides.length);
	const next = () => goTo(index + 1);
	const prev = () => goTo(index - 1);

	return (
		<div className="slider-main-div" ref={containerRef} aria-roledescription="carousel">
			<div className="slider-main-div-slides" role="group">
				{slides.map((s, i) => (
					<article
						key={s.id || i}
						className={`slider-main-slide ${i === index ? "slider-main-slide-active" : ""}`}
						aria-hidden={i !== index}
					>
						<div
							className="slider-main-slide-bg"
							style={{ backgroundImage: `url(${s.image})` }}
							aria-hidden
						/>
						<div className="slider-main-slide-overlay" aria-hidden />

						<div className="slider-main-slide-content">
							{s.badge && <div className="slider-main-slide-badge">{s.badge}</div>}
							<h2 className="slider-main-slide-title">{s.title}</h2>
							<p className="slider-main-slide-subtitle">{s.subtitle}</p>
							{s.link && (
								<a className="slider-main-slide-link" href={s.link} aria-label={`Open ${s.title}`}>
									بررسی بیشتر
								</a>
							)}
						</div>
					</article>
				))}
			</div>

			<button className="slider-main-slide-arrow slider-main-slide-arrow-prev" onClick={prev} aria-label="Previous slide">
				<MdArrowBackIos />
			</button>
			<button className="slider-main-slide-arrow slider-main-slide-arrow-next" onClick={next} aria-label="Next slide">
				<MdArrowForwardIos />
			</button>

			<div className="slider-main-slide-dots" role="tablist" aria-label="Slide dots">
				{slides.map((s, i) => (
					<button
						key={`dot-${i}`}
						className={`slider-main-slide-dot ${i === index ? "slider-main-slide-dot-active" : ""}`}
						onClick={() => goTo(i)}
						aria-label={`Go to slide ${i + 1}`}
						aria-selected={i === index}
						role="tab"
					/>
				))}
			</div>
		</div>
	);
}
