import React from 'react'
import logoLink from '../../images/cnn.png';
import DragIcon from '../../images/icons/DragHandle.svg';
import Image from 'next/image';

const OrderChannel = () => {
  return (
    <div className="order__channel">
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
                <Image src={DragIcon} alt="Drag icon" />
            </div>
        </div>
    </div>
  )
}

export default OrderChannel