import React, { useEffect, useState } from "react";
import Channel from "../Channel/Channel";
import Loader from "../../global-components/Loader";
import Logos from "../../global-components/AllLogos.js";
import ClientOnly from "../ClientOnly";

const TomorrowList = (props) => {
  const { search } = props;
  function convertToFit(Text) {
    return Text.toLowerCase()
      .replace(/ /g, "_")
      .replace(/[^\w-]+/g, "");
  }

  const [tomorrowList, setTomorrowList] = useState(null);
  const [channelList, setChannelList] = useState(null);
  const [filterList, setFilterList] = useState([]);
  useEffect(() => {
    try {
      var axios = require("axios");
      var data = {
        publish_date: "tomorrow",
      };

      var config = {
        // method: "POST",
        url: "https://prod.api.tv.cl/tomorrow_programs",
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
          let i = 0;
          items.map((elem, index) => {
            let updatedProgramList = [];
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

            items_arr.push({
              key: `${index}tomorrow`,
              swapIndex: index,
              logoLink: Logos[converted_name],
              channelName: elem.channel_name,
              channelLink: `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/channel-details?channel=${elem.channel_name}`,
              programList: elem.program_list,
              tomorrowList: true,
            });
          });
          setTomorrowList(items_arr);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch {}
  }, []);
  useEffect(() => {
    if (tomorrowList != null) {
      const item = JSON.parse(window.localStorage.getItem("channelList"));
      setChannelList(item);
    }
  }, [tomorrowList]);
  useEffect(() => {
    const filteredList = (tomorrowList || []).filter((channel) =>
      channel.channelName.toLowerCase().includes(search.toLowerCase())
    );
    setFilterList(filteredList);
  }, [search, tomorrowList]);
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
                    key={item.key}
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
                  return <></>;
                } else {
                  isChannelExist = tomorrowList.find(
                    (channel) => channel.channelName == item.channelName
                  );
                }
                if (!isChannelExist) {
                  return <></>;
                }
                return (
                  <Channel
                    key={isChannelExist.key}
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

export default TomorrowList;
