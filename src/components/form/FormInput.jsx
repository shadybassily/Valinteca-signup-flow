import React from "react";
import ErrorMessage from "../error/ErrorMessage";

export default function FormInput({
  icon,
  placeHolder,
  type,
  register,
  errorMessage,
  handlePasswordInput,
}) {
  return (
    <div>
      <div className={`input-container ${errorMessage && "error-border"}`}>
        <span className="icon-holder">{icon}</span>
        <input
          type={type}
          placeholder={placeHolder}
          {...register}
          onInput={handlePasswordInput}
        />
      </div>
      <ErrorMessage message={errorMessage} />
    </div>
  );
}
