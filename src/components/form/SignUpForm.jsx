import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// icons & styles
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import "./signup-form.styles.css";
//component
import FormInput from "./FormInput";
//form validations
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//form methods
import { postData, schema } from "./formMethods";



export default function SignUpForm() {
  const navigate = useNavigate();

  //integrating schema with the react-form-hook using resolvers
  const {register,handleSubmit,formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  
  //reset the api error if the user starts re-typing
  const [apiPasswordError, setApiPasswordError] = useState(null);
  const handlePasswordInput = () => {
    setApiPasswordError(null);
  };

  //handle submit
  const onSubmit = (data) => {
    //preparing the data
    const strigifiedData = JSON.stringify({
      username: data.username,
      email: data.email,
      password: data.password,
      password_confirmation: data.confirmPassword,
    });

    postData(
      "https://goldblv.com/api/hiring/tasks/register",
      strigifiedData
    ).then((data) => {
      //if there are errors
      data.errors
        ? setApiPasswordError(data.errors.password)
        : loginSuccessfult(data);
    });
  };

  const loginSuccessfult = (data) => {
    localStorage.setItem("email", JSON.stringify(data.email));
    navigate("/succeed");
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        icon={<AiOutlineUser />}
        placeHolder="Username"
        type="text"
        errorMessage={errors.username?.message}
        register={register("username")}
      />

      <FormInput
        icon={<AiOutlineMail />}
        placeHolder="Email"
        type="text"
        errorMessage={errors.email?.message}
        register={register("email")}
      />

      <FormInput
        icon={<AiOutlineLock />}
        placeHolder="Password"
        type="password"
        errorMessage={errors.password?.message || apiPasswordError}
        register={register("password")}
        handlePasswordInput={handlePasswordInput}
      />
      <FormInput
        icon={<AiOutlineLock />}
        placeHolder="Confirm Password"
        type="password"
        errorMessage={errors.confirmPassword?.message}
        register={register("confirmPassword")}
      />
      <button type="submit" id="primary-button">
        Create Account
      </button>
    </form>
  );
}
