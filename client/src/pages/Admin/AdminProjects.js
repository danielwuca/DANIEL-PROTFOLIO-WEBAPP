import { Form, Modal, Input, message } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";

function AdminProjects() {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  const [showAddEditModel, setShowAddEditModel] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
      const tempTechnologies = values?.technologies?.split(",") || [];
      values.technologies = tempTechnologies;
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-project", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-project", values);
      }

      dispatch(HideLoading());
      if (response.data.success) {
        messageApi.success(response.data.message);
        setShowAddEditModel(false);
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        messageApi.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      messageApi.error(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-project", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        messageApi.success(response.data.message);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
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
      <div className="flex justify-end">
        <button
          className="bg-primary text-white px-5 py-2"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModel(true);
          }}
        >
          Add Project
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5 sm:grid-cols-1">
        {projects.map((project) => (
          <div className="shadow border p-5 border-gray-400 flex flex-col gap-5">
            <h1 className="text-primary text-xl font-semibold">
              {project.title}
            </h1>
            <hr />
            <img src={project.image} alt="" className="h-60 w-80" />
            <h1 className="text-gray-500">Role: {project.title}</h1>
            <h1 className="text-gray-500">{project.description}</h1>
            <div className="flex gap-2 mt-5 justify-end">
              <button
                className="bg-red-500 text-white px-5 py-2 rounded-md"
                onClick={() => {
                  onDelete(project);
                }}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white px-5 py-2 rounded-md"
                onClick={() => {
                  setSelectedItemForEdit(project);
                  setShowAddEditModel(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          visible={showAddEditModel}
          title={selectedItemForEdit ? "Edit Project" : "Add Project"}
          footer={null}
          onCancel={() => {
            setShowAddEditModel(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={
              {
                ...selectedItemForEdit,
                technologies: selectedItemForEdit?.technologies?.join(" ,"),
              } || {}
            }
          >
            <Form.Item name="title" label="Title">
              <Input placeholder="Title" />
            </Form.Item>
            <Form.Item name="image" label="Image URL">
              <Input placeholder="Image" />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <TextArea placeholder="Description" />
            </Form.Item>
            <Form.Item name="link" label="Link">
              <Input placeholder="Link" />
            </Form.Item>
            <Form.Item name="technologies" label="Technologies">
              <Input placeholder="Technologies" />
            </Form.Item>
            <div className="flex justify-end">
              <button
                className="border-primary text-primary px-5 py-2"
                onClick={() => {
                  setShowAddEditModel(false);
                  setSelectedItemForEdit(null);
                }}
              >
                Cancel
              </button>
              <button className="bg-primary text-white px-5 py-2">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminProjects;
