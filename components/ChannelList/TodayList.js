import React, { useEffect, useState } from "react";
import Channel from "../Channel/Channel";
import Loader from "../../global-components/Loader";
import Logos from "../../global-components/AllLogos.js";
import moment from "moment";
import ClientOnly from "../ClientOnly";
import { nanoid } from "nanoid";

const TodayList = (props) => {
  const { chilleCurrentTime, search } = props;
  function convertToFit(Text) {
    return Text.toLowerCase()
      .replace(/ /g, "_")
      .replace(/[^\w-]+/g, "");
  }
  const [todayList, setTodayList] = useState(null);
  const [channelList, setChannelList] = useState(null);
  const [filterList, setFilterList] = useState([]);

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  useEffect(() => {
    try {
      var axios = require("axios");
      var data = {
        publish_date: "today",
      };

      var config = {
        // method: "POST",
        url: "https://api.tv.cl/today_programs",
        // headers: {
        //   "x-api-key": "0jVCwT3KSf1YpiUwzpJr15GHFdSF0he83fSUDq7f",
        //   "Content-Type": "application/json",
        // },
        // data: data,
      };

      axios(config)
        .then(function (response) {
          let items = response.data;
          let items_arr = [];
          items.map((elem, index) => {
            let updatedProgramList = [];
            if (elem.program_list.length > 0) {
              let converted_name = convertToFit(elem.channel_name);

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
              if (converted_name == "ae") {
                converted_name = "a_e";
              }

              for (let i = 0; i < elem.program_list.length; i++) {
                let format = "HH:mm:00";

                let time = moment(chilleCurrentTime, format),
                  beforeTime = moment(
                    elem.program_list[i]?.program_time,
                    format
                  ),
                  afterTime = moment(
                    elem.program_list[i + 1]?.program_time,
                    format
                  );

                if (!afterTime.isValid()) {
                  afterTime = moment(
                    elem.program_list[i]?.program_time,
                    format
                  ).add(31, "minutes");
                }

                let duration = moment.duration(afterTime.diff(beforeTime));
                let currentTimeDuration = moment.duration(
                  time.diff(beforeTime)
                );
                let minutes = parseInt(duration.asMinutes());
                let currentMinutes = parseInt(currentTimeDuration.asMinutes());
                let progressPercent = Math.floor(
                  (currentMinutes / minutes) * 100
                );

                if (time.isBetween(beforeTime, afterTime)) {
                  updatedProgramList.push({
                    ...elem.program_list[i],
                    progressPercent: progressPercent,
                  });
                } else {
                  if (time.isSame(beforeTime)) {
                    updatedProgramList.push({
                      ...elem.program_list[i],
                      progressPercent: progressPercent,
                    });
                  } else if (beforeTime.isAfter(time)) {
                    updatedProgramList.push({
                      ...elem.program_list[i],
                      progressPercent: progressPercent,
                    });
                  }
                }
              }

              // if (updatedProgramList.length > 0) {
              let channel_slug = slugify(elem.channel_name);

              if (channel_slug == "a&e") {
                channel_slug = "a-e";
              }
              if (channel_slug == "discovery-home-&-health") {
                channel_slug = "discovery-home-and-health";
              }

              items_arr.push({
                key: `${index}today`,
                swapIndex: index,
                logoLink: Logos[converted_name],
                channelName: elem.channel_name,
                channelLink: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/programacion/${channel_slug}`,
                programList: updatedProgramList,
                tomorrowList: false,
                checked: true,
              });
              // }
            }
          });
          const priorityList = [];
          const withoutPriorityList = items_arr.filter(
            (item) =>
              item.channelName !== "Mega" &&
              item.channelName !== "TVN" &&
              item.channelName !== "Canal 13" &&
              item.channelName !== "La Red" &&
              item.channelName !== "Chilevisi??n" &&
              item.channelName !== "CNN Chile" &&
              item.channelName !== "TV+" &&
              item.channelName !== "Telecanal"
          );
          const Chilevisi??n = items_arr.find(
            (item) => item.channelName === "Chilevisi??n"
          );
          const Mega = items_arr.find((item) => item.channelName === "Mega");
          const TVN = items_arr.find((item) => item.channelName === "TVN");
          const Canal_13 = items_arr.find(
            (item) => item.channelName === "Canal 13"
          );
          const La_Red = items_arr.find(
            (item) => item.channelName === "La Red"
          );
          const TV_plus = items_arr.find((item) => item.channelName === "TV+");
          const CNN_Chile = items_arr.find(
            (item) => item.channelName === "CNN Chile"
          );
          const Telecanal = items_arr.find(
            (item) => item.channelName === "Telecanal"
          );
          if (Chilevisi??n) {
            priorityList.push(Chilevisi??n);
          }
          if (Mega) {
            priorityList.push(Mega);
          }
          if (TVN) {
            priorityList.push(TVN);
          }
          if (Canal_13) {
            priorityList.push(Canal_13);
          }
          if (La_Red) {
            priorityList.push(La_Red);
          }
          if (TV_plus) {
            priorityList.push(TV_plus);
          }
          if (CNN_Chile) {
            priorityList.push(CNN_Chile);
          }
          if (Telecanal) {
            priorityList.push(Telecanal);
          }

          setTodayList([...priorityList, ...withoutPriorityList]);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch {}
  }, [chilleCurrentTime]);

  useEffect(() => {
    if (todayList != null) {
      const item = JSON.parse(window.localStorage.getItem("channelList"));
      setChannelList(item);
      if (!item) {
        window.localStorage.setItem("channelList", JSON.stringify(todayList));
        setChannelList(todayList);
      }
    }
  }, [todayList]);

  useEffect(() => {
    var filteredList = (todayList || []).filter((channel) => {
      const findProgram = channel.programList.find((program) =>
        program.program_title
          .toLowerCase()
          .includes(search.trim().toLowerCase())
      );

      if (findProgram) {
        return channel;
      }
      return channel.channelName
        .toLowerCase()
        .includes(search.trim().toLowerCase());
    });

    setFilterList(filteredList);
  }, [search, todayList]);
  return (
    <ClientOnly>
      {channelList == null ? (
        <Loader />
      ) : (
        <>
          {search.length != 0 ? (
            <>
              {(filterList || []).map((item) => {
                return (
                  <Channel
                    key={nanoid()}
                    logoLink={item.logoLink}
                    channelName={item.channelName}
                    channelLink={item.channelLink}
                    programList={item.programList}
                    tomorrowList={item.tomorrowList}
                  />
                );
              })}
            </>
          ) : (
            <>
              {channelList.map((item, index) => {
                let isChannelExist;
                if (channelList?.[index].checked == false) {
                  return <React.Fragment key={nanoid()}></React.Fragment>;
                } else {
                  isChannelExist = todayList.find(
                    (channel) => channel.channelName == item.channelName
                  );
                }
                if (!isChannelExist) {
                  return <React.Fragment key={nanoid()}></React.Fragment>;
                }
                if (isChannelExist?.programList?.length <= 0) {
                  return <React.Fragment key={nanoid()}></React.Fragment>;
                }
                return (
                  <Channel
                    key={nanoid()}
                    logoLink={isChannelExist.logoLink}
                    channelName={isChannelExist.channelName}
                    channelLink={isChannelExist.channelLink}
                    programList={isChannelExist.programList}
                    tomorrowList={isChannelExist.tomorrowList}
                  />
                );
              })}
            </>
          )}
        </>
      )}
    </ClientOnly>
  );
};

export default TodayList;
