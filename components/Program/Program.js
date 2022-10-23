import React from 'react'
import styles from './Program.module.scss'
import TimerIcon from '../../images/icons/TimerIcon.svg'
import Image from 'next/image'

const Program = (props) => {
  var timeIcon;

  if(props.hasIcon == true){
    timeIcon = <Image src={TimerIcon} alt="Timer icon"></Image>
  }
  else{
    timeIcon = '';
  }

  return (
    <div className={`program ${styles.program}`}>
        <p className={`programName ${styles.programName}`}>
            {props.programName}
        </p>
        <div className={`time_holder ${styles.time_holder}`}>
            {timeIcon}
            <div className={`time ${styles.time}`}>{props.time}</div>
        </div>
    </div>
  )
}

export default Program