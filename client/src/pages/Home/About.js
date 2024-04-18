import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function About() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { skills, lottiURL, description1, description2 } = about;
  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex w-full items-center sm:flex-col gap-8">
        <div className="h-[50vh] w-1/2 sm:w-full">
          {lottiURL.includes("lottie") ? (
            <dotlottie-player
              src={lottiURL}
              background="transparent"
              speed="1"
              autoplay
            ></dotlottie-player>
          ) : (
            <img src={lottiURL} alt="" className="h-full w-full object-cover" />
          )}
        </div>

        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-secondary">{description1 || ""}</p>
          <p className="text-secondary">{description2 || ""}</p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I have been working with recently:
        </h1>
        <div className="flex flex-wrap gap-6 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-8">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
