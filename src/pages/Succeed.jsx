import React from "react";
import PageTemplate from '../components/page-template/PageTemplate'
import succeedPhoto from '../assets/images/succeed.svg'

export default function Succeed() {
  const userEmail = JSON.parse(localStorage.getItem('email'))
  return (
    <PageTemplate
      imgSrc={succeedPhoto}
      headLine="Successfully logged in"
      subHead= {userEmail}
    />
  );
}
