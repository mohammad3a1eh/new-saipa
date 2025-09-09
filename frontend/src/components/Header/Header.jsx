import "./Header.css";

import Logo from "../../assets/logo/logo.png";

export const Header = ({data, classFixer=""}) => {
	if (!data) {
		data = {
			menu_one: [
				{name: "سایپا", url: "/"},
				{name: "سایپا یدک", url: "/"},
				{name: "محصولات", url: "/"},
			],
			menu_two: [
				{name: "سامانه فروش خودرو", url: "/"},
				{name: "پیش فروش", url: "/"},
				{name: "پشتیبانی", url: "/"},
			],
			mobileMenu: [
				{name: "Home", url: "/"},
				{name: "Home", url: "/"},
				{name: "Home", url: "/"},
			]
		}
	}

	return (
		<div className={`header-div ${classFixer}`}>
			<div className="main-header-div">
				<div className="main-header-right">
					<img className="main-header-logo" src={Logo} alt="saipa logo" />

					<menu className="main-header-menu">
						{data.menu_one.map((item, index) => (
							<li key={index}>
								<a className="main-header-menu-item" href={item.url}>{item.name}</a>
							</li>
						))}
					</menu>
				</div>

				<div className="main-header-left">
					<menu className="main-header-menu">
						{data.menu_two.map((item, index) => (
							<li key={index}>
								<a className="main-header-menu-item" href={item.url}>{item.name}</a>
							</li>
						))}
					</menu>
				</div>


			</div>
		</div>
	)
}