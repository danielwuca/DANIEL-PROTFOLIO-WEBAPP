import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  return (
    <div>
      <SectionTitle title="Experience" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#154d524d] w-1/2 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#154d524d] py-3"
                    : "text-gray-300"
                }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-2xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-gray-300">
            Python Automation: Developed Python scripts for seamless data
            integration between NetBox and vSphere, enhancing system
            interoperability and efficiency. MPDS CAD QA Testing: Leveraged
            Eggplant senseTalk for automated testing in CAD MPDS, significantly
            improving system performance and reliability. Data Integration and
            Management: Automated the extraction, cleaning, and transformation
            of virtualization and device configuration data from NetBox using
            Pandas. Utilized Matplotlib and Seaborn for generating insightful
            visualizations, facilitating data-driven decision-making. Project
            Management: Actively participated in the New Generation 911 /
            Telephony project, collaborating with business analysts to ensure
            timely delivery through effective project management techniques and
            stakeholder coordination. Administration Hiring: Provided assistance
            in the recruitment and hiring process for administrative positions,
            contributing to the efficient operation of the organization.
            Front-end Development: Assisted in the design and operation of mCAD
            web applications using JavaScript/TypeScript, enhancing user
            interface and experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
