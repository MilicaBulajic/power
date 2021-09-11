import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../../context/UserContext";
import apiServer from "./../../service/apiServer";


const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [errorMessage, setErrorMessage] = useState("");
  const { setAuth, setEmail, setUserId } = useContext(UserContext);

  const onSubmit = async ({ email, password }) => {
    try {
      const res = await apiServer.post("/login", { email, password });

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
    <button type="submit">Login</button>
  </form>
  );
};

export default LoginForm;