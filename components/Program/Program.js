import React from "react";
import styles from "./Program.module.scss";
import TimerIcon from "../../images/icons/TimerIcon.svg";
import Image from "next/image";

const Program = (props) => {
  let getProgramInfo = (param) => {
    try {
      var axios = require("axios");

      var config = {
        method: "get",
        url:
          "https://api.themoviedb.org/3/search/multi?api_key=a3a3d2e5ab0932a88d7f2c9490a79673&query=" +
          param +
          "&page=1&include_adult=false&region=CL",
        headers: {},
      };

      axios(config)
        .then(function (response) {
          let result = response.data.results[0];
          let img_link;

          if (result.poster_path == null) {
            img_link = result.backdrop_path;
          } else {
            img_link = result.poster_path;
          }

          if (img_link == undefined) {
            img_link = null;
          } else {
            img_link = "https://image.tmdb.org/t/p/w780" + img_link;
          }
          console.log(img_link);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch {}
  };

  var timeIcon;

  if (props.hasIcon == true) {
    timeIcon = <Image src={TimerIcon} alt="Timer icon"></Image>;
  } else {
    timeIcon = "";
  }

  return (
    <div className={`program ${styles.program} ${props.className}`}>
      <p
        className={`programName ${styles.programName}`}
        onClick={() => {
          getProgramInfo(props.programName);
        }}
      >
        {props.programName}
      </p>
      <div className={`time_holder ${styles.time_holder}`}>
        {timeIcon}
        <div className={`time ${styles.time}`}>{props.time}</div>
      </div>
    </div>
  );
};

export default Program;
