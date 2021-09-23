import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../../context/UserContext";
import apiServer from "./../../service/apiServer";
import TextField from '@material-ui/core/TextField';
import "./../../css/Login.css";

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
  <form className="login" onSubmit={handleSubmit(onSubmit)}>
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
    <button className="button" type="submit">Login</button>
  </form>
  );
};

export default LoginForm;