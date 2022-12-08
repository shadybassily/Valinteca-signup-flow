import React from "react";

export default function FormInput({icon, placeHolder, type, register}) {
  return (
    <div className="input-container">
      <span className="icon-holder">
        {icon}
      </span>
      <input type={type} placeholder={placeHolder} {...register}/>
    </div>
  );
}
