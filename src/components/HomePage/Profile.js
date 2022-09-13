import React from "react";
import "../../styles/main.scss";
import { Link } from "react-router-dom";

const Profile = (props) => {
  console.log(props);
  return (
    <div className="profile">
      <div className="profile-left">
        <div className="profile-top">
          <div className="my-image">
            <img src="/images/iam.jpg" alt="my image" />
          </div>
          <h3>Asadbek</h3>
          <p>Frontend Developer</p>
        </div>

        <div className="menus-all">
          <div className="menus">
            <Link to="/about">
              <p
                className={`${
                  props.history.location.pathname === "/about" ? "active" : ""
                }`}
              >
                About
              </p>
            </Link>
          </div>
          <div className="menus">
            {/* <Link to="/skills"> */}
            {/* {" "} */}
            <p>My Skills</p>
            {/* </Link> */}
          </div>
          <div className="menus">
            <p>Work</p>
          </div>
          <div className="menus">
            <p>Blog</p>
          </div>
          <div className="menus">
            <p>Contact</p>
          </div>
        </div>

        <div className="contact-me d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center">
            <a href="https://t.me/asad_book">
              <span className="icon icon-telegram"></span>
            </a>
            <a href="https://www.linkedin.com/in/asad_book07" target="_blank">
              {" "}
              <span className="icon icon-linkedin mx-3"></span>
            </a>
            <a href="https://www.instagram.com/asad_book07/">
              <span className="icon icon-instagram"></span>
            </a>
            <a href="https://www.facebook.com/asad_book07/">
              <span className="icon icon-facebook"></span>
            </a>
          </div>
        </div>
      </div>

      <div className="profile-right">{props.children}</div>
    </div>
  );
};

export default Profile;
