import React, { useEffect, useState } from "react";
import styles from "./Program.module.scss";
import TimerIcon from "../../images/icons/TimerIcon.svg";
import Image from "next/image";
import CustomModal from "../CustomModal";

const Program = (props) => {
  const { progressPercent } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [img, setImg] = useState(null);
  var progress_bar = "";
  if (props.tomorrowList == false) {
    progress_bar = (
      <div className={`progress ${styles.progress}`}>
        <div style={{ width: `${progressPercent}%` }}></div>
      </div>
    );
  }
  useEffect(() => {
    if (window.screen.width < 600) {
      progress_bar = "";
    }
  }, []);

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
          let img_link = null;

          if (result?.poster_path == null) {
            img_link = result?.backdrop_path;
          } else {
            img_link = result?.poster_path;
          }

          if (img_link == undefined) {
            img_link = null;
          } else {
            img_link = "https://image.tmdb.org/t/p/w780" + img_link;
          }
          setImg(img_link);
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
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={`program ${styles.program} ${props.className}`}>
      <div className={`time_holder ${styles.time_holder}`}>
        {timeIcon}
        <div className={`time ${styles.time}`}>{props.time}</div>
      </div>
      <div
        className={`programName ${styles.programName}`}
        onClick={() => {
          getProgramInfo(props.programName);
          setIsModalOpen(true);
        }}
      >
        {props.programName}
        {progress_bar}
      </div>
      {isModalOpen && (
        <CustomModal
          isModalOpen={isModalOpen}
          handleClose={handleClose}
          img={img}
          program_id={props.program_id}
          logoLink={props.logoLink}
          isTomorrow={props.isTomorrow}
          progressPercent={progressPercent}
          tomorrowList={props.tomorrowList}
        />
      )}
    </div>
  );
};

export default Program;
