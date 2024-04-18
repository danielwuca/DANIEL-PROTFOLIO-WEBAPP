import React, { useEffect } from "react";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
import AdminExperiences from "./AdminExperiences";
import AdminProjects from "./AdminProjects";
import AdminCourses from "./AdminCourses";
import AdminContact from "./AdminContact";

function Admin() {
  const { portfolioData } = useSelector((state) => state.root);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-zwu622-login";
    }
  }, []);

  const items = [
    {
      key: "1",
      label: "Intro",
      children: <AdminIntro />,
    },
    {
      key: "2",
      label: "About",
      children: <AdminAbout />,
    },
    {
      key: "3",
      label: "Experiences",
      children: <AdminExperiences />,
    },
    {
      key: "4",
      label: "Projects",
      children: <AdminProjects />,
    },
    {
      key: "5",
      label: "Courses",
      children: <AdminCourses />,
    },
    {
      key: "6",
      label: "Contact",
      children: <AdminContact />,
    },
  ];
  return (
    <div>
      <div className="p-5 bg-primary flex justify-between">
        <div>
          <h2 className="text-secondary text-5xl font-semibold">
            Daniel Tech Admin Portal
          </h2>
        </div>
        <h1
          className="underline text-white text-xl cursor-pointer"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-zwu622-login";
          }}
        >
          Logout
        </h1>
      </div>

      {portfolioData && (
        <div className="px-5 pb-10">
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      )}
    </div>
  );
}

export default Admin;
