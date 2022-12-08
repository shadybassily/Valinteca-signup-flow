import React, { useState } from "react";
import ErrorMessage from "../error/ErrorMessage";
import { AiOutlineEye } from "react-icons/ai";

export default function FormInput({
  icon,
  placeHolder,
  type,
  register,
  errorMessage,
  handlePasswordInput,
}) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <div className={`input-container ${errorMessage && "error-border"}`}>
        <span className="icon-holder">{icon}</span>
        <input
          type={isVisible ? "text" : type}
          placeholder={placeHolder}
          {...register}
          onInput={handlePasswordInput}
        />
        {type === "password" && (
          <span
            onMouseEnter={(e) => {
              setIsVisible(true);
            }}
            onMouseLeave={(e) => {
              setIsVisible(false);
            }}
          >
            <AiOutlineEye />
          </span>
        )}
      </div>
      <ErrorMessage message={errorMessage} />
    </div>
  );
}
