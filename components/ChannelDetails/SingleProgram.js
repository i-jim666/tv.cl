import React from 'react'
import moment from 'moment/moment'

const SingleProgram = (props) => {
  let converted_time = moment(props.programTime, 'HH:mm:ss').format('HH:mm')
  return (
    <div className="single__program">
      <div className="flex_container">
          <div className="program_details">
              <p className="title">
                <div className="converted_time">
                  {converted_time}
                </div>
                <div className="single_program_name">
                  {props.programName}
                </div>
              </p>
              <p className="category">{props.programType}</p>
              <p className="desc">{props.programDesc}</p>
          </div>
      </div>
    </div>
  )
}

export default SingleProgram