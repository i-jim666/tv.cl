import React from 'react'

const GenericContent = (props) => {
  return (
    <div className="generic__content">
        <div className="container">
            <h2>{props.title}</h2>
            <p>
                {props.description}
            </p>
        </div>
    </div>
  )
}

export default GenericContent