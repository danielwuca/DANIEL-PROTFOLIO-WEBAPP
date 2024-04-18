import React from "react";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

function AdminContact() {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-contact", {
        ...values,
        _id: portfolioData.contact._id,
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
        initialValues={portfolioData.contact}
      >
        <Form.Item name="name" label="Name">
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <TextArea placeholder="Gender" />
        </Form.Item>
        <Form.Item name="mobile" label="Mobile">
          <Input placeholder="Mobile" />
        </Form.Item>
        <Form.Item name="country" label="Country">
          <Input placeholder="Country" />
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

export default AdminContact;
