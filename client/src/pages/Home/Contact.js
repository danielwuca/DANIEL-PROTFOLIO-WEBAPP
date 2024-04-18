import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;

  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col">
          <p className="text-tertiary text-xl">{"{"}</p>
          {Object.keys(contact).map(
            (key) =>
              key !== "_id" && (
                <p className="ml-5">
                  <span className="text-tertiary text-xl">{key} : </span>
                  <span className="text-tertiary text-xl">{contact[key]}</span>
                </p>
              )
          )}
          <p className="text-tertiary text-xl">{"}"}</p>
        </div>

        <div className="h-[400px] w-4/5 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/0509cf05-e4ac-4263-9a0b-6cb18ca07853/lHbSTIDdfb.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
