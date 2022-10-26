import React from 'react'
import styles from './Channel.module.scss'
import RightCaret from '../../images/icons/RightCaret'
import Image from 'next/image'
import ProgramImg from '../../images/card_placeholder.svg'
import Program from '../Program/Program'
import Link from 'next/link'
import moment from 'moment/moment'

const Channel = (props) => {

  var first_program = props.programList.shift();
  var rest_of_the_program = props.programList;
  var prog_list = [];

  var first_program_time = moment(first_program.program_time, 'hh:mm:ss').format('HH:mm')

  for(let i=0; i<4; i++){

    let modified_time = moment(rest_of_the_program[i].program_time, 'hh:mm:ss').format('HH:mm')

    prog_list.push(
        <Program
            key = {rest_of_the_program[i].program_id} 
            programName = {rest_of_the_program[i].program_title}
            time = {modified_time}
            hasIcon = "false"
        />
    )
  }
  var progress_bar = '';
  if(props.tomorrowList == false){
    // progress_bar = <div className={`progress ${styles.progress}`}>
    //                     <div></div>
    //                 </div>
  }

  return (
    <div className={`channel ${styles.channel}`}>
        <Link href={props.channelLink}>
            <div className={`box__header ${styles.box__header}`}>
                <div className="logo">
                    <Image src={props.logoLink} alt="channel logo" width={48} height={48} objectFit="contain" />
                </div>
                <p className="channel_name">
                    {props.channelName}
                </p>
                <RightCaret />
            </div>
        </Link>

        <div className={`content ${styles.content}`}>

            <Link href={props.channelLink}>
                <div className={`box__header ${styles.box__header}`}>
                    <div className="logo">
                        <Image src={props.logoLink} alt="channel logo" width={48} height={48} objectFit="contain"></Image>
                    </div>
                    <p className="channel_name">
                        {props.channelName}
                    </p>
                    <RightCaret />
                </div>
            </Link>

            <Image src={ProgramImg} alt="Program image"></Image>
            

            <Program
                key = {first_program.program_id}
                programName = {first_program.program_title}
                time = {first_program_time}
                hasIcon = {(props.tomorrowList == true)? false : true}
            />

            {progress_bar}

            {prog_list}            

        </div>

    </div>
  )
}

export default Channel