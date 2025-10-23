import { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

export const Header = ({ data, classFixer = "" }) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);

	if (!data) {
		data = {
			menu_one: [
				{ name: "سایپا", url: "/" },
				{ name: "سایپا یدک", url: "/" },
				{ name: "محصولات", url: "/" },
			],
			menu_two: [
				{ name: "سامانه فروش خودرو", url: "/" },
				{ name: "پیش فروش", url: "/" },
				{ name: "پشتیبانی", url: "/" },
			],
			mobileMenu: [
				{ name: "موبایل اپلیکیشن مشتریان", url: "/" },
				{ name: "موبایل اپلیکیشن اطلس کارکنان سایپا", url: "/" },
			],
		};
	}

	return (
		<div className={`header-div ${classFixer}`}>
			<div className="main-header-div">
				<img className="main-header-logo" src={Logo} alt="saipa logo" />

				<div className="desktop-menu">
					<menu className="main-header-menu">
						{data.menu_one.map((item, index) => (
							<li key={index}>
								<a className="main-header-menu-item" href={item.url}>
									{item.name}
								</a>
							</li>
						))}
					</menu>
					<menu className="main-header-menu">
						{data.menu_two.map((item, index) => (
							<li key={index}>
								<a className="main-header-menu-item" href={item.url}>
									{item.name}
								</a>
							</li>
						))}
					</menu>
				</div>

				<button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <FiX size={28} color="white" /> : <FiMenu size={28} color="white" />}
				</button>
			</div>

			<div className={`mobile-menu ${isOpen ? "open" : ""}`}>
				<menu className="main-header-menu-mobile">

					{data.menu_one.map((item, index) => (
						<li key={index}>
							<a className="main-header-menu-item-mobile" href={item.url}>{item.name}</a>
						</li>
					))}

					{data.menu_two.map((item, index) => (
						<li key={index}>
							<a className="main-header-menu-item-mobile" href={item.url}>{item.name}</a>
						</li>
					))}

					{data.mobileMenu.map((item, index) => (
						<li key={index}>
							<a className="main-header-menu-item-mobile" href={item.url}>{item.name}</a>
						</li>
					))}
				</menu>


				<FiX className="menu-close" size={32} color="white" onClick={() => setIsOpen(!isOpen)} />
			</div>
		</div>
	);
};
