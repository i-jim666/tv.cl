import React from 'react'
import styles from '../styles/components/Program.module.scss'
import TimerIcon from '../images/icons/TimerIcon.svg'
import Image from 'next/image'

const Program = (props) => {
  return (
    <div className={`program ${styles.program}`}>
        <p className={`programName ${styles.programName}`}>
            {props.programName}
        </p>
        <div className={`time_holder ${styles.time_holder}`}>
            <Image src={TimerIcon} alt="Timer icon"></Image>
            <div className={`time ${styles.time}`}>{props.time}</div>
        </div>
    </div>
  )
}

export default Program