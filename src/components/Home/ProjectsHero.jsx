import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import projectImageUrl1 from "../../assets/Home/Project/Project_bg.jpg";
import projectImageUrl2 from "../../assets/Home/Project/Project_bg.jpg";
import projectImageUrl3 from "../../assets/Home/Project/Project_bg.jpg";

// --- Config ---
const CAROUSEL_INTERVAL_MS = 5000;

// --- Project Data (Static Outside Component for Performance) ---
const PROJECTS_DATA = [
  {
    id: 1,
    imageUrl: projectImageUrl1,
    titleKey1: "projectTitle.line1_1",
    titleKey2: "projectTitle.line2_1",
    descriptionKey: "projectDescription_1",
    locationKey: "projectLocation_1",
    statusKey: "projectStatus_1",
  },
  {
    id: 2,
    imageUrl: projectImageUrl2,
    titleKey1: "projectTitle.line1_2",
    titleKey2: "projectTitle.line2_2",
    descriptionKey: "projectDescription_2",
    locationKey: "projectLocation_2",
    statusKey: "projectStatus_2",
  },
  {
    id: 3,
    imageUrl: projectImageUrl3,
    titleKey1: "projectTitle.line1_3",
    titleKey2: "projectTitle.line2_3",
    descriptionKey: "projectDescription_3",
    locationKey: "projectLocation_3",
    statusKey: "projectStatus_3",
  },
];

// --- Fade Wrapper Component ---
const FadeItem = ({ active, children }) => (
  <div
    className={`absolute inset-0 transition-opacity duration-1000 ${
      active ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  >
    {children}
  </div>
);

const ProjectsHero = () => {
  const { t } = useTranslation("projects");
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
    }, CAROUSEL_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      className="relative w-full max-h-screen flex items-center text-white overflow-hidden py-20 sm:py-28 lg:py-30 px-4 sm:px-8 lg:px-16"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {PROJECTS_DATA.map((project, index) => (
          <FadeItem key={project.id} active={index === activeIndex}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${project.imageUrl}')` }}
            />
          </FadeItem>
        ))}

        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-screen py-20 sm:py-28 lg:py-30 max-w-7xl mx-auto ">
        {/* Section Title */}
        <h2 className="text-center text-3xl sm:text-5xl font-[PoppinsRegular] mt-0 md:-mt-10 opacity-90 ">
          {t("sectionTitle")}
        </h2>

        {/* Content Carousel */}
        <div className="relative h-screen md:max-h-screen my-10  lg:my-6">
          {PROJECTS_DATA.map((project, index) => (
            <FadeItem key={`content-${project.id}`} active={index === activeIndex}>
              <div className="text-left ">
                {/* Status */}
                <span className="inline-block px-4 py-2 text-xs sm:text-sm bg-[#253672] rounded-full mb-6 font-[PoppinsRegular]">
                  {t(project.statusKey)}
                </span>

                {/* Title */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-[PoppinsSbold] leading-[1.15] mb-6 tracking-tight">
                  {t(project.titleKey1)} <br />
                  {t(project.titleKey2)}
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-[PoppinsRegular] mb-6">
                  {t(project.descriptionKey)}
                </p>
              </div>

              {/* Location Badge */}
              <div className="flex justify-start sm:justify-end ">
                <div className="inline-flex items-center bg-[#D9D9D9] space-x-3 px-5 py-3 rounded-full shadow-lg">
                  <div className="bg-[#253672] p-2 rounded-full">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-lg font-[PoppinsRegular] text-[#253672]">
                    {t(project.locationKey)}
                  </span>
                </div>
              </div>
            </FadeItem>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {PROJECTS_DATA.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to project ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsHero;
