import React from "react";
import { useState } from "react";
import axios from "axios";
import{ToastContainer , toast} from 'react-toastify'

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  //  handel input

  const handelInput = (e) => {
    const { name, value } = e.target;
    setLoginData((pre) => ({ ...pre, [name]: value }));
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);

    const getVerifyUser = async () => {
      const response = await axios.post(
        "http://localhost:8800/api/login",
        loginData,
      );

      console.log(response.data)
      if(response.data.success) {
        toast.success(response.data.message)
        
      }else{
        toast.error('invalid details')
      }

    };

    getVerifyUser();
  };
  return (
    <div className="flex  justify-center items-center">
      <form
        onSubmit={handelFormSubmit}
        className="flex flex-col mt-40 border p-5 rounded-xl"
      >
        <h1 className="text-bold m-2">Please login</h1>
        <label htmlFor="email">Email </label>
        <input
          onChange={handelInput}
          placeholder="Enter your Email"
          className="p-2 m-2 w-[350px] border rounded"
          name="email"
          required
        ></input>
        <label htmlFor="password">Password </label>
        <input
          onChange={handelInput}
          placeholder="Enter Your Password"
          className="p-2 m-2 w-[350px] border rounded"
          name="password"
          required
        ></input>
        <input
          type="submit"
          value={"login"}
          className="p-2 m-2 bg-blue-600 rounded-sm  text-white"
        ></input>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Login;
