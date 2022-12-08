import React from "react";
import PageTemplate from "../components/page-template/PageTemplate";
import welcomePhoto from "../assets/images/welcome-page.svg";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      <PageTemplate
        imgSrc={welcomePhoto}
        headLine="Welcome"
        subHead="Welcome We're glad you're here! Sign up to start browing the website."
        button={
          <Link to="sign-up" id="primary-button">
            Get Started
          </Link>
        }
      />
    </>
  );
}
