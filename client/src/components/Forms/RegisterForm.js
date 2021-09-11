import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../../context/UserContext";
import apiServer from "./../../service/apiServer";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setAuth, setEmail, setUserId } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  
  const onSubmit = async ({ name, email, password }) => {
    try {
      const res = await apiServer.post("/register", { name, email, password });

      localStorage.setItem("email", res.data.email);
      localStorage.setItem("userId", res.data.id);
      localStorage.setItem("token", res.data.token);
      setErrorMessage("");
      setAuth(res.data.token);
      setUserId(res.data.id);
      setEmail(res.data.email);
    } catch (err) {
      console.log(err.status);
      setErrorMessage("Something went wrong");
    }
  };

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label htmlFor="email">Full Name</label>
      <input
        {...register('name', { required: true })}
        name="name"
        type="name"
        placeholder="Full Name"
        ></input>
        {errors.name && errors.name.type === "required" && <span>This is required</span>}
    </div>
    <div>
      <label htmlFor="email">Email Address</label>
      <input
        {...register('email', { required: true })}
        name="email"
        type="email"
        placeholder="Email address"
        ></input>
        {errors.email && errors.email.type === "required" && <span>This is required</span>}
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        placeholder="password"
        ></input>
    </div>
    <button type="submit">Register</button>
  </form>
  );
};

export default RegisterForm;