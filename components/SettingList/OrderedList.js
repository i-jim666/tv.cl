import React, { useEffect, useRef, useState } from "react";
import OrderChannel from "./OrderChannel";
import "./SettingChannelList.scss";
import Loader from "../../global-components/Loader";
import Logos from "../../global-components/AllLogos.js";
import { nanoid } from "nanoid";
const OrderedList = () => {
  function convertToFit(Text) {
    return Text.toLowerCase()
      .replace(/ /g, "_")
      .replace(/[^\w-]+/g, "");
  }

  const [renderer, setRenderer] = useState(null);

  useEffect(() => {
    try {
      var axios = require("axios");
      var data = {
        publish_date: "today",
      };

      var config = {
        method: "POST",
        url: "https://prod.api.tv.cl/program/get_all_programs",
        headers: {
          "x-api-key": "0jVCwT3KSf1YpiUwzpJr15GHFdSF0he83fSUDq7f",
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          let items = response.data.data;
          let sel_arr = [];

          items.map((elem, index) => {
            console.log(elem);

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

            sel_arr.push({
              key: `${index}sel`,
              index: index,
              logoLink: Logos[converted_name],
              channelName: elem.channel_name,
              programCount: elem.program_list.length,
            });
          });
          setRenderer(sel_arr);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch {}
  }, []);
  console.log("parent renderer", renderer);
  useEffect(() => {
    console.log("dsfsdfsd");
  }, [renderer]);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
  const handleSort = () => {
    let _renderer = [...renderer];

    const draggedItemContent = _renderer.splice(dragItem.current, 1)[0];
    _renderer.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    console.log("_renderer", _renderer);
    setRenderer(_renderer);
  };
  return (
    <div className="selection__list">
      {!renderer ? (
        <Loader />
      ) : (
        <>
          {renderer.map((item, index) => {
            return (
              <div
                key={nanoid()}
                draggable
                onDragStart={(e) => (dragItem.current = index)}
                onDragEnter={(e) => (dragOverItem.current = index)}
                onDragEnd={handleSort}
                onDragOver={(e) => e.preventDefault()}
              >
                <OrderChannel
                  key={nanoid()}
                  logoLink={item.logoLink}
                  channelName={item.channelName}
                  programCount={item.programCount}
                />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default OrderedList;
