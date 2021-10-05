import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import AuthContext from "../../context/AuthContext";
import apiServer from "./../../service/apiServer";
import TextField from '@material-ui/core/TextField';
import "./../../css/Register.css";


const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setAuth, setEmail, setUserId, setUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  
  const onSubmit = async ({ name, email, password }) => {
    try {
      const res = await apiServer.post("/register", { name, email, password });

      localStorage.setItem("email", res.data.email);
      localStorage.setItem("userId", res.data.id);
      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
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
  <form className="register" onSubmit={handleSubmit(onSubmit)}>
    <div>
      <TextField
        {...register('name', { required: true })}
        label="First Name"
        variant="filled"
        name="name"
        type="name"
        />
        {errors.name && errors.name.type === "required" && <span>This is required</span>}
    </div>
    <div>
      <TextField
        {...register('email', { required: true })}
        name="email"
        type="email"
        label="Email address"
        variant="filled"
        />
        {errors.email && errors.email.type === "required" && <span>This is required</span>}
    </div>
    <div>
      <TextField
        name="password"
        type="password"
        label="Password"
        variant="filled"
        />
    </div>
    <button className="button" type="submit">Register</button>
  </form>
  );
};

export default RegisterForm;