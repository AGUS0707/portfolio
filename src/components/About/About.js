import React from 'react';
import Profile from "../HomePage/Profile";

const About = (props) => {
    return (
        <Profile history={props.history}>


            <div className="position-relative d-flex">
                <div className=""></div>
                <div className="about">

                    <div className="html-content"></div>
                    <div className="body-content"></div>

                    <h1>My, Myself AX</h1>

                    <div className="text">
                        <p>
                            I’m a Front-End Developer located in Tashkent. I have a serious passion for UI effects, animations and
                            creating intuitive, dynamic user experiences.</p>
                        <p>
                            Well-organised person, problem solver, independent employee with high attention to detail. Fan of
                            Football, outdoor activities and English literature.
                        </p>
                        <p>Interested in the entire frontend spectrum and working on ambitious projects with
                            positive people.
                        </p>
                    </div>

                    <div className="html-content-b"></div>
                    <div className="body-content-b"></div>

                </div>
            </div>

        </Profile>
    );
};

export default About;