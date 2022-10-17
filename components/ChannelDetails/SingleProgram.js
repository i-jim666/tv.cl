import React from 'react'

const SingleProgram = () => {
  return (
    <div className="single__program">
      <div className="flex_container">
          <div className="time">
            {`10:05 am`}
          </div>
          <div className="program_details">
              <p className="title">{`CNN Newsroom With Pamela Brown`}</p>
              <p className="category">{`News, Documentery, Public, Affairs`}</p>
              <p className="desc">{`The knife against the throat of Amanda Ooms and Niklas Källner when they face Kajsa Grytt and Messiah Hallberg. Messiah wastes points and what is Zelenskyj's first name?`}</p>
          </div>
      </div>
    </div>
  )
}

export default SingleProgram