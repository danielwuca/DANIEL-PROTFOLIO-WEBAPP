import { message } from "antd";
import axios from "axios";
import React from "react";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const login = async (e) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        "/api/portfolio/admin-zwu622-login",
        user
      );
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        localStorage.setItem("token", JSON.stringify(response.data));
        window.location.href = "/admin";
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };
  return (
    // <div className="flex justify-center items-center h-screen">
    //   <div className="w-96 flex gap-5 p-5 shadow border border-gray-500 flex-col">
    //     <h1 className="text-2xl">Daniel - Admin Login</h1>
    //     <hr />
    //     <input
    //       type="text"
    //       value={user.username}
    //       onChange={(e) => setUser({ ...user, username: e.target.value })}
    //     />
    //     <input
    //       type="text"
    //       value={user.password}
    //       onChange={(e) => setUser({ ...user, password: e.target.value })}
    //     />
    //     <button className="bg-primary text-white p-2">Login</button>
    //   </div>
    // </div>

    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 rounded-lg shadow-lg p-8 bg-white">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Daniel - Admin Login
        </h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="password" // Changed type to 'password' for security
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            onClick={login}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
