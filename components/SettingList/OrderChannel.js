import React from 'react'
import DragIcon from '../../images/icons/DragHandle.svg';
import Image from 'next/image';

const OrderChannel = (props) => {
    return (
      <div className="order__channel">
          <div className="flex_container">
              <div className="left_col">
                  <div className="inner_flex">
                      <Image src={props.logoLink} width={48} height={48} objectFit="contain" alt="channel logo" />
                      <div className="name_count">
                          <p className="channel__name">{props.channelName}</p>
                          <div className="count">{props.programCount}</div>
                      </div>
                  </div>
              </div>
              <div className="right_col">
                  <Image src={DragIcon} alt="Drag icon" />
              </div>
          </div>
      </div>
    )
  }
  export default OrderChannel



