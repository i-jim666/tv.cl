import React from "react";
import Image from "next/image";

const SelectChannel = (props) => {
  const { onCheckboxChange, index } = props;
  return (
    <div className="select__channel">
      <div className="flex_container">
        <div className="left_col">
          <div className="inner_flex">
            <Image
              src={props.logoLink}
              width={48}
              height={48}
              objectFit="contain"
              alt="channel logo"
            />
            <div className="name_count">
              <p className="channel__name">{props.channelName}</p>
              <div className="count">{props.programCount}</div>
            </div>
          </div>
        </div>
        <div className="right_col">
          <label for="check__fox-tv">
            <input
              type="checkbox"
              channelName={props.channelName}
              checked={props.checked}
              onChange={(e) => onCheckboxChange(e, index)}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default SelectChannel;
