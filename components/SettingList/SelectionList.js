import React, { useEffect, useState } from "react";
import SelectChannel from "./SelectChannel";
import "./SettingChannelList.scss";
import Loader from "../../global-components/Loader";
import Logos from "../../global-components/AllLogos.js";

const SelectionList = () => {
  const [renderer, setRenderer] = useState(null);

  useEffect(() => {
    try {
      const items = JSON.parse(window.localStorage.getItem("channelList"));
      setRenderer(items);
    } catch {}
  }, []);
  console.log(renderer);
  const onCheckboxChange = (e, changeIndex) => {
    console.log(changeIndex, e.target.checked);
    const newItems = renderer.map((item, index) => {
      if (index === changeIndex) {
        return { ...item, checked: e.target.checked };
      }
      return item;
    });
    setRenderer(newItems);
    window.localStorage.setItem("channelList", JSON.stringify(newItems));
  };
  return (
    <div className="selection__list">
      {renderer == null ? (
        <Loader />
      ) : (
        <>
          {renderer.map((item, index) => {
            return (
              <SelectChannel
                key={item.key}
                index={index}
                logoLink={item.logoLink}
                channelName={item.channelName}
                programCount={item.programCount}
                checked={item.checked}
                onCheckboxChange={onCheckboxChange}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default SelectionList;
