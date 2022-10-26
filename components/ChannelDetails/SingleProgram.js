import React from 'react'
import moment from 'moment/moment'

const SingleProgram = (props) => {
  let converted_time = moment(props.programTime, 'HH:mm:ss').format('hh:mm a')
  return (
    <div className="single__program">
      <div className="flex_container">
          <div className="time">
            {converted_time}
          </div>
          <div className="program_details">
              <p className="title">{props.programName}</p>
              <p className="category">{props.programType}</p>
              <p className="desc">{props.programDesc}</p>
          </div>
      </div>
    </div>
  )
}

export default SingleProgram