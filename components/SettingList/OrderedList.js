import React from 'react'
import OrderChannel from './OrderChannel'
import './SettingChannelList.scss'

const OrderedList = () => {
  return (
    <div className="selection__list">
        <OrderChannel />
        <OrderChannel />
        <OrderChannel />
        <OrderChannel />
        <OrderChannel />
        <OrderChannel />
        <OrderChannel />
        <OrderChannel />
        <OrderChannel />
        <OrderChannel />
    </div>
  )
}

export default OrderedList