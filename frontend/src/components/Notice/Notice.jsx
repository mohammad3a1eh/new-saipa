import "./Notice.css";

import { useState } from "react";
import { FiX } from "react-icons/fi";

function toPersianDigits(num) {
	if (num === null || num === undefined) return "";
	return num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

export const Notice = ({ data, classFixer = "" }) => {
	if (!data) {
		data = {
			notice_title: "اطلاعیه ها",
			notices: [
				{
					text: "مشتریان محترم توجه فرمایند؛ زمان تحویل خودروهای ثبت‌نامی طبق قرارداد از طریق سایت رسمی سایپا اطلاع‌رسانی خواهد شد.",
					fulltext: "بدین‌وسیله به اطلاع کلیه مشتریان محترم می‌رساند، برنامه‌ زمان‌بندی تحویل خودروهای ثبت‌نامی مطابق قرارداد منعقده بوده و صرفاً از طریق سامانه رسمی اینترنتی گروه خودروسازی سایپا منتشر خواهد شد. خواهشمند است جهت اطلاع از آخرین وضعیت تحویل خودرو، تنها به سایت رسمی مراجعه فرمایید و از تماس با واحدهای غیرمرتبط خودداری نمایید.",
					date: "1404/07/01",
					link: "https://saipa.iranecar.com"
				},
				{
					text: "به اطلاع می‌رساند؛ انجام خدمات پس از فروش صرفاً در نمایندگی‌های مجاز سایپا امکان‌پذیر می‌باشد.",
					fulltext: "مشتریان گرامی توجه داشته باشند که کلیه خدمات دوره‌ای، تعمیرات تخصصی و استفاده از قطعات یدکی اصلی فقط در نمایندگی‌های مجاز سایپا ارائه می‌گردد. استفاده از مراکز غیرمجاز می‌تواند موجب ابطال گارانتی خودرو شده و مشکلات فنی برای شما ایجاد نماید. جهت مشاهده لیست نمایندگی‌های فعال، به وبسایت سایپا یدک مراجعه کنید.",
					date: "1404/06/25",
					link: "https://saipayadak.com"
				},
				{
					text: "ضرورت دارد جهت استفاده از خدمات گارانتی، مشتریان در دوره‌های منظم سرویس اولیه خودرو شرکت نمایند.",
					fulltext: "به منظور حفظ کیفیت و کارایی خودرو و همچنین استمرار پوشش گارانتی، لازم است کلیه مشتریان در بازه‌های زمانی مشخص، نسبت به انجام سرویس‌های اولیه و دوره‌ای در نمایندگی‌های مجاز اقدام نمایند. عدم انجام سرویس‌ها در موعد مقرر، منجر به خروج خودرو از شرایط گارانتی خواهد شد.",
					date: "1404/06/15",
					link: ""
				},
				{
					text: "به منظور پیشگیری از سوء‌استفاده‌های احتمالی، لطفاً درگاه‌های اینترنتی غیرمجاز را شناسایی کرده و تنها از وبسایت رسمی سایپا خرید نمایید.",
					fulltext: "با توجه به مشاهده برخی سایت‌ها و صفحات غیررسمی که اقدام به فروش یا ثبت‌نام خودرو به نام سایپا می‌نمایند، بدین‌وسیله هشدار داده می‌شود که گروه خودروسازی سایپا هیچ‌گونه مسئولیتی در قبال این موارد نخواهد داشت. لذا خواهشمند است تنها از وبسایت رسمی سایپا جهت ثبت‌نام و خرید استفاده نمایید و در صورت مشاهده هرگونه تخلف، موضوع را به مرکز تماس سایپا اطلاع دهید.",
					date: "",
					link: "https://www.saipacorp.com"
				}
			]
		};
	}

	return (
		<div className="notice-wrapper">
			<h3 className="notice-wrapper-text">{data.notice_title}</h3>
			<div className={`notice-div ${classFixer}`}>
				{data.notices.map((item, index) => (
					<NoticeCard data={item} key={index} />
				))}
			</div>
		</div>
	);
}



export const NoticeCard = ({ data, classFixer = "" }) => {
	const [open, setOpen] = useState(false);

	if (!data) {
		data = {
			text: "ضرورت دارد جهت استفاده از خدمات گارانتی، مشتریان در دوره‌های منظم سرویس اولیه خودرو شرکت نمایند.",
			fulltext: "تست",
			date: "1404/12/14",
			link: "/",
		};
	}

	const handleClose = () => setOpen(false);

	return (
		<>
			<div
				className={`notice-card-div ${classFixer}`}
				onClick={() => setOpen(true)}
			>

				<p className="notice-card-text">{data.text}</p>
				<div className="notice-card-badge">{toPersianDigits(data.date)}</div>

			</div>

			{open && (
				<div
					className="notice-card-modal-backdrop"
					onClick={handleClose}
				>
					<div
						className="notice-card-modal-card"
						onClick={(e) => e.stopPropagation()}
					>
						<button className="notice-card-modal-close-btn" onClick={handleClose}>
							<FiX size={20} />
						</button>
						<div className="notice-card-modal-content">
							<div className="notice-card-modal-badge">{data.date}</div>
							<p className="notice-card-modal-text">{data.fulltext}</p>
							{data.link && (
								<a
									href={data.link}
									target="_blank"
									rel="noopener noreferrer"
									className="notice-card-modal-link"
								>
									مشاهده بیشتر
								</a>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
};
