import React, { useEffect, useState } from "react";
import styles from "./Channel.module.scss";
import RightCaret from "../../images/icons/RightCaret";
import Image from "next/image";
import ProgramImg from "../../images/card_placeholder.svg";
import Program from "../Program/Program";
import Link from "next/link";
import moment from "moment/moment";
import { nanoid } from "nanoid";

const Channel = (props) => {
  var the_img = "";

  const [limit, setLimit] = useState(10);
  the_img = (
    <Image
      src={ProgramImg}
      alt="Program image"
      width={307}
      height={155}
      objectFit="cover"
      // objectPosition="top"
    />
  );

  const [dynamic_image, setDynamic] = useState(the_img);

  var getProgramInfo = (param) => {
    var img_link;

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

          img_link = result?.poster_path;

          if (img_link != null) {
            img_link = "https://image.tmdb.org/t/p/w500" + img_link;
            setDynamic(
              <Image
                src={img_link}
                alt="Program image"
                width={307}
                height={155}
                objectFit="cover"
                // objectPosition="top"
              />
            );
          } else {
            setDynamic(
              <Image
                src={ProgramImg}
                alt="Program image"
                width={307}
                height={155}
                objectFit="cover"
                // objectPosition="top"
              />
            );
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch {}
  };

  var first_program = props.programList[0];
  var rest_of_the_program = props.programList;
  var prog_list = [];

  var first_program_time = moment(first_program?.program_time, "HH:mm").format(
    "HH:mm"
  );

  if (limit > rest_of_the_program.length) {
    setLimit(rest_of_the_program.length);
  }
  useEffect(() => {
    if (window.screen.width < 600) {
      setLimit(3);
    }
  }, []);

  for (let i = 1; i < limit; i++) {
    let modified_time = moment(
      rest_of_the_program[i]?.program_time,
      "HH:mm"
    ).format("HH:mm");

    prog_list.push(
      <Program
        key={nanoid()}
        program_id={rest_of_the_program[i]?.program_id}
        programName={rest_of_the_program[i]?.program_title}
        time={modified_time}
        logoLink={props.logoLink}
        hasIcon="false"
        isTomorrow={props.tomorrowList}
      />
    );
  }

  useEffect(() => {
    getProgramInfo(first_program?.program_title);
  }, []);

  return (
    <div className={`channel ${styles.channel}`}>
      <Link href={props.channelLink}>
        <div className={`box__header ${styles.box__header}`}>
          <div className="logo">
            <Image
              src={props.logoLink}
              alt="channel logo"
              width={48}
              height={48}
              objectFit="contain"
            />
          </div>
          <p className="channel_name">{props.channelName}</p>
          <RightCaret />
        </div>
      </Link>

      <div className={`content ${styles.content}`}>
        {dynamic_image}

        <Program
          key={nanoid()}
          program_id={first_program?.program_id}
          programName={first_program?.program_title}
          progressPercent={first_program?.progressPercent}
          logoLink={props.logoLink}
          time={first_program_time}
          // hasIcon = {(props.tomorrowList == true)? false : true}
          hasIcon={false}
          tomorrowList={props.tomorrowList == true ? true : false}
          isTomorrow={props.tomorrowList}
          className={
            props.tomorrowList == true
              ? "first_program_tomorrow"
              : "first_program"
          }
        />

        {prog_list}
      </div>
    </div>
  );
};

export default Channel;
