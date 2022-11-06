import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import ProgramImg from "../../images/card_placeholder_new.svg";
import Image from "next/image";


const SingleProgram = (props) => {
  const { progressPercent } = props;

  let converted_time = moment(props.programTime, "HH:mm").format("HH:mm");

  let processed_desc = props.programDesc;
  processed_desc = processed_desc.replace(/(.{400})..+/, "$1…");

  if (processed_desc == "Not Available") {
    processed_desc = "No disponible";
  }

  let the_img = "";

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

  useEffect(() => {

    var img_link;

    if (window.screen.width < 600) {
      processed_desc = processed_desc.replace(/(.{145})..+/, "$1…");
    }
    else{

      try {
        var axios = require("axios");
        var config = {
          method: "get",
          url:
            "https://api.themoviedb.org/3/search/multi?api_key=a3a3d2e5ab0932a88d7f2c9490a79673&query=" +
            props.programName +
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
      
    }

  }, []);

  let progress_bar = "";
  if (props.tomorrowList == false) {
    progress_bar = (
      <div className={`progress`}>
        <div style={{ width: `${progressPercent}%` }}></div>
      </div>
    );
  }

  return (
    <div className="single__program">
      <div className="flex_container">
        
        {(window.screen.width > 600) && dynamic_image}

        <div className="program_details">
          <div className="title">
            <div className="single_program_name">{props.programName}</div>
          </div>
          {/* <p className="category">{props.programType}</p> */}
          <p className="category">{converted_time}</p>
          {progress_bar}
          <p className="desc">{processed_desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProgram;
