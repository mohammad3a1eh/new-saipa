import "./Footer.css";

import Logo from "../../assets/logo/logo.png";
import { SiTelegram } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export const Footer = ({data, classFixer=""}) => {
	if (!data) {
		data = {
			menu_one: [
				{name: "سایپا", url: "/"},
				{name: "سایپا یدک", url: "/"},
				{name: "محصولات", url: "/"},
			],
			menu_brands: [
				{name: "پارس خودرو", url: "/"},
				{name: "زامیاد", url: "/"},
				{name: "سایپا دیزل", url: "/"},
				{name: "مگاموتور", url: "/"},
				{name: "سایپا یدک", url: "/"},
				{name: "سایپا سیتروئن", url: "/"},
			],
			menu_importent_links: [
				{name: "درباره سایپا", url: "/"},
				{name: "خدمات پس از فروش", url: "/"},
				{name: "نمایندگی‌ها و عاملیت‌ها", url: "/"},
				{name: "استخدام و همکاری", url: "/"},
			],
			menu_notifications: [
				{name: "خريد و مزايده الكترونيكي", url: "/"},
				{name: "ساير اطلاعيه ها", url: "/"},
				{name: "فراخوان", url: "/"},
			],
			menu_apps: [
				{name: "موبایل اپلیکیشن مشتریان", url: "/"},
				{name: "موبایل اپلیکیشن اطلس کارکنان سایپا", url: "/"},
			],
			social_links: [
				{name: "تلگرام", url: "/", logo:<SiTelegram/>},
				{name: "اینستاگرام", url: "/", logo:<AiFillInstagram/>},
				{name: "یوتیوب", url: "/", logo:<FaYoutube/>},
				{name: "لینکدین", url: "/", logo:<FaLinkedin/>},
				{name: "جیمیل", url: "/", logo:<SiGmail/>},
			]
		}
	}

	return (
		<div className={`footer-div ${classFixer}`}>
			<div className="main-footer-div">
				<img className="main-footer-logo" src={Logo} alt="saipa logo" />

				<menu className="main-footer-menu">
					{data.menu_one.map((item, index) => (
						<li key={index}>
							<a className="main-footer-menu-item" href={item.url}>{item.name}</a>
						</li>
					))}
				</menu>
			</div>

			<div className="main-footer-div main-footer-div-rtl">
				<menu className="main-footer-menu-stand">

					<h3 className="main-footer-menu-title">
						برند ها
					</h3>

					{data.menu_brands.map((item, index) => (
						<li key={index}>
							<a className="main-footer-menu-item-stand" href={item.url}>{item.name}</a>
						</li>
					))}
				</menu>

				<menu className="main-footer-menu-stand">

					<h3 className="main-footer-menu-title">
						لینک های مهم
					</h3>

					{data.menu_importent_links.map((item, index) => (
						<li key={index}>
							<a className="main-footer-menu-item-stand" href={item.url}>{item.name}</a>
						</li>
					))}
				</menu>


				<menu className="main-footer-menu-stand">

					<h3 className="main-footer-menu-title">
						اطلاعيه ها
					</h3>

					{data.menu_notifications.map((item, index) => (
						<li key={index}>
							<a className="main-footer-menu-item-stand" href={item.url}>{item.name}</a>
						</li>
					))}
				</menu>

				<menu className="main-footer-menu-stand">

					<h3 className="main-footer-menu-title">
						دانلود ها
					</h3>

					{data.menu_apps.map((item, index) => (
						<li key={index}>
							<a className="main-footer-menu-item-stand" href={item.url}>{item.name}</a>
						</li>
					))}
				</menu>
			</div>

			<div className="main-footer-div">
				<p className="main-footer-copyright">تمامي حقوق مادي ومعنوي سايت متعلق به گروه خودروسازي سايپا مي باشد. © 1404</p>

				<div className="main-footer-social">
					{data.social_links.map((item, index) => (
						<div className="tooltip" key={index}>
							<a key={index} className="main-footer-menu-item-icon" href={item.url} title={item.name}>{item.logo}</a>
							<div className="tooltip-text">{item.name}</div>
						</div>

					))}
				</div>
			</div>
		</div>
	)
}