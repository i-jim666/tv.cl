import React, { useEffect, useState } from "react";
import "./ChannelDetails.scss";
import moment from "moment";
import TodayList from "./TodayList";
import TomorrowList from "./TomorrowList";
import Image from "next/image";
import { useRouter } from "next/router";
import "moment/locale/es";

import Loader from "../../global-components/Loader";
import Logos from "../../global-components/AllLogos.js";
import ClientOnly from "../ClientOnly";

moment.locale("es"); // change the global locale to Spanish

let today = moment().format("DD MMM").slice(0, -1);
let tomorrow = moment().add(1, "days").format("DD MMM").slice(0, -1);

var img_logo, channel_logo;

const ChannelDetails = (props) => {
  var channel_name = props.channelSlug;
  var channel_title = "";
  console.log(props);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (channel_name) {
    let name_arr = [];
    if (channel_name.includes("-")) {
      name_arr = channel_name.split("-");
    } else {
      name_arr.push(channel_name);
    }

    for (let i = 0; i < name_arr.length; i++) {
      name_arr[i] = capitalizeFirstLetter(name_arr[i]);
    }
    let channel_title = name_arr.join(" ");

    if (channel_title == "A E") {
      channel_title = "A&E";
    }
    if (channel_title == "Tvn") {
      channel_title = "TVN";
    }
    if (channel_title == "Hbo") {
      channel_title = "HBO";
    }
  }

  function convertToFit(Text) {
    return Text.toLowerCase()
      .replace(/-/g, "_")
      .replace(/[^\w-]+/g, "");
  }

  useEffect(() => {
    try {
      let converted_name = convertToFit(channel_name);

      if (converted_name == "cdf_bsico") {
        converted_name = "cdf_basico";
      }
      if (converted_name == "24_horas") {
        converted_name = "horas";
      }
      if (converted_name == "de_pelcula") {
        converted_name = "de_pelicula";
      }
      if (converted_name == "chilevisin") {
        converted_name = "chilevision";
      }
      if (converted_name == "13c") {
        converted_name = "thirteen_c";
      }
      if (converted_name == "fox_sports_bsico") {
        converted_name = "fox_sports_basico";
      }
      if (converted_name == "discovery_home__health") {
        converted_name = "discovery_home_health";
      }

      channel_logo = Logos[converted_name];

      setRenderlogo(<Image src={channel_logo} alt="Channel logo" />);
    } catch {}
  }, [channel_name]);

  const [todayState, setTodayState] = useState(true);
  const [tomorrowState, setTomorrowState] = useState(false);
  const [renderLogo, setRenderlogo] = useState();

  return (
    <ClientOnly>
      <div className="channel__wrapper channel__details_wrapper">
        <div className="container">
          <div className="title__filter">
            <div className={`flex_container`}>
              <h3 className={`title`}>
                <div className="logo">{renderLogo}</div>
                {channel_title} Programación
              </h3>
              <div className={`channel_filter filter`}>
                <div
                  onClick={() => {
                    setTodayState(true);
                    setTomorrowState(false);
                  }}
                  className={`today ${todayState ? "active" : ""}`}
                >
                  Hoy, {today}
                </div>
                <div
                  onClick={() => {
                    setTodayState(false);
                    setTomorrowState(true);
                  }}
                  className={`tomorrow ${tomorrowState ? "active" : ""}`}
                >
                  Mañana, {tomorrow}
                </div>
              </div>
            </div>
          </div>
          <div className={`programs`}>
            {todayState == true ? (
              <TodayList
                tomorrowList={false}
                channelSlug={props.channelSlug}
                search={props.search}
              />
            ) : (
              <TomorrowList
                tomorrowList={true}
                channelSlug={props.channelSlug}
                search={props.search}
              />
            )}
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default ChannelDetails;
