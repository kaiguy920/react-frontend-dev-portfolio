import React, { Component } from "react";
import { Icon } from "@iconify/react";
import javaScriptIcon from "@iconify/icons-logos/javascript";
import reactIcon from "@iconify/icons-logos/react";
import pythonIcon from "@iconify/icons-logos/python";


class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12" style={{ borderTop: "10px solid black", borderBottom: "10px solid black" }}>
          <h1 className="section-title" style={{ fontFamily: "Permanent Marker", fontSize: 40, color: 'black' }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                {/* <div style={{ width: "250px", }}> */}
                <span style={{ cursor: "auto" }}>
                  <img
                    className="profPic"
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    className="profAva"
                    icon={javaScriptIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    className="profAva"
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    className="profAva"
                    icon={pythonIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <br />

                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div
                    aboutCard
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                      padding: "20px 40px",
                    }}
                  // className="card-body font-trebuchet text-justify ml-3 mr-3 aboutCard"
                  // style={{
                  //   height: "auto",
                  //   fontSize: "132%",
                  //   lineHeight: "200%",
                  //   padding: "80",
                  //   margin: "60"
                  // }}
                  >
                    <br />
                    <span className="wave">{hello} </span>
                    <br />
                    <br />
                    <span className="wave">{about}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default About;
