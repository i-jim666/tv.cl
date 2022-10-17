import React from 'react'
import logoLink from '../../images/cnn.png';
import Image from 'next/image';

const SelectChannel = () => {
  return (
    <div className="select__channel">
        <div className="flex_container">
            <div className="left_col">
                <div className="inner_flex">
                    <Image src={logoLink} alt="channel logo" />
                    <div className="name_count">
                        <p className="channel__name">FOX TV</p>
                        <div className="count">4</div>
                    </div>
                </div>
            </div>
            <div className="right_col">
                <label for="check__fox-tv">
                    <input type="checkbox" id="check__fox-tv" channelName="Fox TV" />
                </label>
            </div>
        </div>
    </div>
  )
}

export default SelectChannel