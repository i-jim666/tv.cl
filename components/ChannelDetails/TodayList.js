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

  const { query } = useRouter();
  var channel_name = query.channel;

  useEffect(() => {
    var prog_arr = [];

    try {
      var axios = require("axios");
      var data = JSON.stringify({
        publish_date: "today",
        channel_name: channel_name,
      });

      var config = {
        method: "post",
        url: "https://prod.api.tv.cl/channel/get_channel_programs",
        headers: {
          "x-api-key": "u79xCVKGH67EugNIro2rx6GuG5kyCIxF3QWE0SSI",
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

  return (
    <>
      {todayList == null ? (
        <Loader />
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
  );
};

export default TodayList;
