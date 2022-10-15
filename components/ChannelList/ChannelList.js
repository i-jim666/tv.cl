import React from 'react'
import styles from './ChannelList.module.scss'
import moment from 'moment'
import Channel from '../Channel/Channel';
import logoLink from '../../images/cnn.png';

let today = moment().format('DD MMM');
let tomorrow = moment().add(1,'days').format('DD MMM');

const ChannelList = (props) => {
  return (
    <div className="channel__wrapper">
        <div className="container">
            <div className="title__filter">
                <div className={`container ${styles.flex_container}`}>
                    <h3 className={styles.title}>{props.title}</h3>
                    <div className={`channel_filter ${styles.filter}`}>
                        <div className={`today active`}>Today, {today}</div>
                        <div className={`tomorrow`}>Tommorrow, {tomorrow}</div>
                    </div>
                </div>
            </div>
            <div className={`channels ${styles.channels}`}>

                <Channel
                    logoLink = {logoLink}
                    channelName = 'CNN Chile'
                    channelLink = '#'
                />

                <Channel
                    logoLink = {logoLink}
                    channelName = 'CNN Chile'
                    channelLink = '#'
                />

                <Channel
                    logoLink = {logoLink}
                    channelName = 'CNN Chile'
                    channelLink = '#'
                />

                <Channel
                    logoLink = {logoLink}
                    channelName = 'CNN Chile'
                    channelLink = '#'
                />

                <Channel
                    logoLink = {logoLink}
                    channelName = 'CNN Chile'
                    channelLink = '#'
                />

                <Channel
                    logoLink = {logoLink}
                    channelName = 'CNN Chile'
                    channelLink = '#'
                />

                <Channel
                    logoLink = {logoLink}
                    channelName = 'CNN Chile'
                    channelLink = '#'
                />

                <Channel
                    logoLink = {logoLink}
                    channelName = 'CNN Chile'
                    channelLink = '#'
                />

                <Channel
                    logoLink = {logoLink}
                    channelName = 'CNN Chile'
                    channelLink = '#'
                />

            </div>
        </div>
    </div>
    
  )
}

export default ChannelList