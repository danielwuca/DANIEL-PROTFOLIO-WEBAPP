import React from "react";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

function AdminAbout() {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      const tempSkills = values.skills.split(",");
      values.skills = tempSkills;
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: portfolioData.about._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        messageApi.success(response.data.message);
      } else {
        messageApi.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      messageApi.error(error.message);
    }
  };
  return (
    <div>
      {contextHolder}
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          ...portfolioData.about,
          skills: portfolioData.about.skills.join(", "),
        }}
      >
        <Form.Item name="lottiURL" label="Lottie URL">
          <Input placeholder="Lottie URL" />
        </Form.Item>
        <Form.Item name="description1" label="Description1">
          <TextArea placeholder="Description1" />
        </Form.Item>
        <Form.Item name="description2" label="Description2">
          <TextArea placeholder="Description2" />
        </Form.Item>
        <Form.Item name="skills" label="Skills">
          <Input placeholder="Skills" />
        </Form.Item>
        <div className="flex justify-end w-full" label="SAVE">
          <button className="px-10 py-2 bg-primary text-white" type="submit">
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminAbout;
