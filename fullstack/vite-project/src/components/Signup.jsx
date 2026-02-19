import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handelInput = (e) => {
    const { name, value } = e.target;
    setUserData((pre) => ({ ...pre, [name]: value }));
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();

    const userDataSend = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8800/api/signup",
          userData,
        );

        toast(response.data.message);

        if (response.data.success) {
          navigate("/login");
          setUserData({
            username: "",
            email: "",
            password: "",
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    userDataSend();

    console.log(userData);
  };

  return (
    <div className="flex  justify-center items-center">
      <form
        onSubmit={handelFormSubmit}
        className="flex flex-col mt-40 border p-5 rounded-xl"
      >
        <h1 className="text-bold m-2">Signup</h1>
        <label htmlFor="username">Name:</label>
        <input
          className="p-2 m-2 w-[350px] border rounded"
          placeholder="Enter Username"
          name="username"
          onChange={handelInput}
          required
        ></input>
        <label htmlFor="email">Email </label>
        <input
          placeholder="Enter your Email"
          className="p-2 m-2 w-[350px] border rounded"
          name="email"
          type="email"
          required
          onChange={handelInput}
        ></input>
        <label htmlFor="password">Password </label>
        <input
          placeholder="Enter Your Password"
          className="p-2 m-2 w-[350px] border rounded"
          name="password"
          type="password"
          required
          onChange={handelInput}
        ></input>
        <input
          type="submit"
          value={"signup"}
          className="p-2 m-2 bg-orange-600 rounded-sm  text-white"
        ></input>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Signup;
