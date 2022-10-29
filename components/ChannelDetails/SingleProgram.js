import React from "react";
import moment from "moment/moment";

const SingleProgram = (props) => {
  let converted_time = moment(props.programTime, "HH:mm:ss").format("HH:mm");

  let processed_desc = props.programDesc;
  processed_desc = processed_desc.replace(/(.{400})..+/, "$1…");

  if (processed_desc == "Not Available") {
    processed_desc = "No disponible";
  }

  useEffect(() => {
    if (window.screen.width < 600) {
      processed_desc = processed_desc.replace(/(.{145})..+/, "$1…");
    }
  }, []);

  let progress_bar = "";
  if (props.tomorrowList == false) {
    progress_bar = (
      <div className={`progress`}>
        <div></div>
      </div>
    );
  }

  return (
    <div className="single__program">
      <div className="flex_container">
        <div className="program_details">
          <div className="title">
            <div className="single_program_name">{props.programName}</div>
          </div>
          {/* <p className="category">{props.programType}</p> */}
          <p className="category">{converted_time}</p>
          {progress_bar}
          <p className="desc">{processed_desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProgram;
