import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/Home/About/About_bg.jpg";
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher";

const AboutUs = () => {
    const { t } = useTranslation("about_page");

    // Single shared color variable
    const primaryBlue = "#253672";

    const coreValues = t("coreValues", { returnObjects: true });
    const expertiseRoles = t("expertise", { returnObjects: true });
    const labels = t("page.labels", { returnObjects: true });

    return (
        <div
            className="min-h-screen w-full relative bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(191,191,191,0.9)), url(${backgroundImage})`,
            }}
        >
            {/* HEADER */}
            <div className="absolute top-0 left-0 right-0 z-20 p-4 sm:p-6 flex flex-wrap justify-between items-center gap-3">
                <div className="flex items-center gap-3">
                    <Link
                        to="/"
                        className="p-3 rounded-full transition-all text-white"
                        style={{ backgroundColor: primaryBlue }}
                    >
                        <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>

                    <span className="text-sm sm:text-lg font-[PoppinsRegular] opacity-80"
                        style={{ color: primaryBlue }}>
                        {t("page.indicator")}
                    </span>
                </div>

                <div className="mt-2 md:mt-0 ">
                    <LanguageSwitcher />
                </div>

            </div>

            {/* MAIN CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-21">
                <div className="text-center py-14 sm:py-20">
                    <p className="text-base sm:text-lg tracking-wide opacity-80"
                        style={{ color: primaryBlue }}>
                        {t("page.tagline")}
                    </p>

                    <h1
                        className="font-[PoppinsSbold] leading-tight mb-6"
                        style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", color: primaryBlue }}
                    >
                        {t("page.mainTitle")}
                    </h1>

                    <p className="text-sm sm:text-lg max-w-4xl mx-auto opacity-85 leading-relaxed"
                        style={{ color: primaryBlue }}>
                        {t("page.introParagraph")}
                    </p>
                </div>

                <hr className="w-2/3 mx-auto border-black/20 mb-20" />

                <h2
                    className="text-center font-[PoppinsSbold] mb-14"
                    style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: primaryBlue }}
                >
                    {t("page.midTitle")}
                </h2>

                {/* CORE VALUES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
                    {coreValues.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl shadow-lg text-center border border-white/20 hover:scale-105 transition-transform"
                            style={{ backgroundColor: primaryBlue }}
                        >
                            <h3 className="text-xl sm:text-2xl mb-2 text-white">{item.title}</h3>
                            <p className="text-xs sm:text-sm opacity-90 text-white">{item.description}</p>
                        </div>
                    ))}
                </div>

                <hr className="w-2/3 mx-auto border-black/20 mb-20" />

                <h2
                    className="text-center mb-14 font-[PoppinsSbold]"
                    style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: primaryBlue }}
                >
                    {t("page.careerTitle")}
                </h2>

                {/* EXPERTISE SECTIONS */}
                {expertiseRoles.map((section, index) => (
                    <div key={index} className="pb-12">
                        <h3
                            className="text-xl sm:text-3xl mb-6 border-l-4 pl-4 font-[PoppinsRegular]"
                            style={{ borderColor: primaryBlue, color: primaryBlue }}
                        >
                            {index + 1}. {section.category}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {section.roles.map((role, rIndex) => (
                                <div
                                    key={rIndex}
                                    className="p-6 rounded-2xl shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                                    style={{ backgroundColor: primaryBlue }}
                                >
                                    <h4 className="text-lg sm:text-xl font-[PoppinsSbold] mb-3 text-white">{role.title}</h4>

                                    <p className="text-xs sm:text-sm mb-2 text-gray-100">
                                        <strong>{labels.role}</strong> {role.role}
                                    </p>

                                    <p className="text-xs sm:text-sm border-t border-white/70 pt-2 mb-2 text-gray-100">
                                        <strong>{labels.workAreas}</strong>
                                    </p>

                                    <ul className="list-disc ml-4 space-y-1 text-xs sm:text-sm opacity-85 text-gray-100">
                                        {role.work.map((w, wIndex) => (
                                            <li key={wIndex}>{w}</li>
                                        ))}
                                    </ul>

                                    {role.qualification !== "N/A" && (
                                        <p className="text-[10px] sm:text-xs mt-4 italic opacity-70 text-white">
                                            <strong>{labels.qualification}</strong> {role.qualification}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
