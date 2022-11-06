import React, { useEffect, useState } from "react";
import SingleProgram from "./SingleProgram";
import Loader from "../../global-components/Loader";
import { useRouter } from "next/router";
import moment from "moment/moment";
import { nanoid } from "nanoid";
import momemtTimeZone from "moment-timezone";
let chilleCurrentTime = momemtTimeZone()
  .tz("America/Santiago")
  .format("HH:mm:00");
const TodayList = (props) => {
  const [todayList, setTodayList] = useState(null);
  const [filterList, setFilterList] = useState([]);
  const { search } = props;
  var channel_name = props.channelSlug;

  useEffect(() => {
    var prog_arr = [];

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if (channel_name) {
      let name_arr = channel_name.split("-");

      for (let i = 0; i < name_arr.length; i++) {
        name_arr[i] = capitalizeFirstLetter(name_arr[i]);
      }
      channel_name = name_arr.join(" ");

      if (channel_name == "A E") {
        channel_name = "A&E";
      }
      if (channel_name == "Tvn") {
        channel_name = "TVN";
      }
      if (channel_name == "Hbo") {
        channel_name = "HBO";
      }
      if(channel_name == 'Axn'){
        channel_name = 'AXN'
      }
      if(channel_name == 'Fox Sports 3'){
        channel_name = 'FOX Sports 3'
      }
      if(channel_name == 'Hbo 2'){
        channel_name = 'HBO 2'
      }
      if(channel_name == 'Cnn Chile'){
        channel_name = 'CNN Chile'
      }
      if(channel_name == '13c'){
        channel_name = '13C'
      }
      if(channel_name == 'Tnt'){
        channel_name = 'TNT'
      }
      if(channel_name == 'Universal Tv'){
        channel_name = 'Universal TV'
      }
      if(channel_name == 'Fx'){
        channel_name = 'FX'
      }
      if(channel_name == 'Fox Sports Básico'){
        channel_name = 'FOX Sports Básico'
      }
      if(channel_name == 'Tyc Sports'){
        channel_name = 'TyC Sports'
      }
      if(channel_name == 'Ucv Tv'){
        channel_name = 'UCV TV'
      }

    }

    try {
      var axios = require("axios");
      var data = JSON.stringify({
        publish_date: "today",
        channel_name: channel_name,
      });

      var config = {
        method: "post",
        url: "https://prod.api.tv.cl/programs/get-specific-channel-programs",
        headers: {
          "x-api-key": "odL9OThpGhapypWcIqGRma1gMjTAFeNa53HKBh6g",
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          let list = response.data.data.program_list;

          for (let i = 0; i < list.length; i++) {
            let format = "HH:mm:00";

            let time = moment(chilleCurrentTime, format),
              beforeTime = moment(list[i]?.program_time, format),
              afterTime = moment(list[i + 1]?.program_time, format);

            if (!afterTime.isValid()) {
              afterTime = moment(list[i]?.program_time, format).add(
                31,
                "minutes"
              );
            }
            let duration = moment.duration(afterTime.diff(beforeTime));
            let currentTimeDuration = moment.duration(time.diff(beforeTime));
            let minutes = parseInt(duration.asMinutes());
            let currentMinutes = parseInt(currentTimeDuration.asMinutes());
            let progressPercent = Math.floor((currentMinutes / minutes) * 100);
            if (time.isBetween(beforeTime, afterTime)) {
              prog_arr.push({
                id: list[i].program_id,
                programName: list[i].program_title,
                programType: list[i].program_type,
                programDesc: list[i].program_desc,
                programTime: list[i].program_time,
                tomorrowList: props.tomorrowList,
                progressPercent: progressPercent,
              });
            } else {
              if (time.isSame(beforeTime)) {
                prog_arr.push({
                  id: list[i].program_id,
                  programName: list[i].program_title,
                  programType: list[i].program_type,
                  programDesc: list[i].program_desc,
                  programTime: list[i].program_time,
                  tomorrowList: props.tomorrowList,
                  progressPercent: progressPercent,
                });
              } else if (beforeTime.isAfter(time)) {
                prog_arr.push({
                  id: list[i].program_id,
                  programName: list[i].program_title,
                  programType: list[i].program_type,
                  programDesc: list[i].program_desc,
                  programTime: list[i].program_time,
                  tomorrowList: props.tomorrowList,
                  progressPercent: progressPercent,
                });
              }
            }
          }

          setTodayList(prog_arr);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch {}
  }, [channel_name]);
  useEffect(() => {
    var filteredList = (todayList || []).filter((program) => {
      return program.programName
        .toLowerCase()
        .includes(search.trim().toLowerCase());
    });

    setFilterList(filteredList);
  }, [search, todayList]);

  return (
    <>
      {todayList == null ? (
        <Loader />
      ) : (
        <>
          {search.length != 0 ? (
            <>
              {(filterList || []).map((item) => {
                return (
                  <SingleProgram
                    key={nanoid()}
                    id={item.id}
                    programName={item.programName}
                    programType={item.programType}
                    programDesc={item.programDesc}
                    programTime={item.programTime}
                    tomorrowList={item.tomorrowList}
                    progressPercent={item.progressPercent}
                  />
                );
              })}
            </>
          ) : (
            <>
              {todayList.map((item, index) => {
                return (
                  <SingleProgram
                    key={nanoid()}
                    id={item.id}
                    programName={item.programName}
                    programType={item.programType}
                    programDesc={item.programDesc}
                    programTime={item.programTime}
                    tomorrowList={item.tomorrowList}
                    progressPercent={item.progressPercent}
                  />
                );
              })}
            </>
          )}
        </>
      )}
    </>
  );
};

export default TodayList;
