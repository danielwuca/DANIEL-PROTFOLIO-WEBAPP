import React from "react";
import Header from "../../components/Header";
import Intro from "./intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSide from "./LeftSide";
import { useSelector } from "react-redux";
import Chatbot from "./Chatbot";
import ContactForm from "../../components/ContactForm";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="min-h-screen w-full bg-primary px-40 bg-nasa bg-fixed bg-center bg-cover bg-no-repeat sm:px-5">
          <Intro />
          <About />
          <Experiences />
          <Projects />
          <Courses />
          <Contact />
          <Chatbot />
          <LeftSide />
          <h2 className="text-3xl text-orange-500">Contact Daniel:</h2>
          <ContactForm />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
