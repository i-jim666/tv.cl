import React from 'react'
import styles from '../styles/components/Channel.module.scss'
import RightCaret from '../images/icons/RightCaret'
import Image from 'next/image'
import ProgramImg from '../images/program.png'
import Program from './Program'

const Channel = (props) => {
  return (
    <div className={`channel ${styles.channel}`}>
        <div className={`box__header ${styles.box__header}`}>
            <div className="logo">
                <Image src={props.logoLink} alt="channel logo"></Image>
            </div>
            <p className="channel_name">
                {props.channelName}
            </p>
            <RightCaret />
        </div>

        <div className={`content ${styles.content}`}>
            <Image src={ProgramImg} alt="Program image"></Image>
            
            <Program 
                programName = "CNN Newsroom With Pamela Brown"
                time = "1:30 PM-2:00 PM"
            />

            <div className={`progress ${styles.progress}`}>
                <div></div>
            </div>

            <Program 
                programName = "CNN Newsroom With Pamela Brown"
                time = "1:30 PM-2:00 PM"
            />

            <Program 
                programName = "CNN Newsroom With Pamela Brown"
                time = "1:30 PM-2:00 PM"
            />

            <Program 
                programName = "CNN Newsroom With Pamela Brown"
                time = "1:30 PM-2:00 PM"
            />

            <Program 
                programName = "CNN Newsroom With Pamela Brown"
                time = "1:30 PM-2:00 PM"
            />

        </div>

    </div>
  )
}

export default Channel