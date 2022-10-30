import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Image from "next/image";
import ProgramImg from "../images/card_placeholder.svg";
import ClientOnly from "./ClientOnly";
import Loader from "../global-components/Loader";
const customStyles = {
  content: {
    padding: "10px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "519px",
  },
};

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#__next");

function CustomModal(props) {
  const {
    isModalOpen,
    handleClose,
    img,
    program_id,
    logoLink,
    isTomorrow,
    progressPercent,
    tomorrowList,
  } = props;
  console.log(
    "program_id",
    program_id,
    logoLink,
    isTomorrow,
    progressPercent,
    tomorrowList
  );
  let the_img = (
    <Image
      src={ProgramImg}
      alt="Program image"
      layout="responsive"
      objectFit="cover"
    />
  );

  const [dynamic_image, setDynamic] = useState(the_img);
  const [channelDetails, setChannelDetails] = useState(null);
  useEffect(() => {
    if (img != null) {
      setDynamic(
        <Image
          src={img}
          alt="Program image"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="unset"
        />
      );
    }
  }, [img]);
  useEffect(() => {
    try {
      var axios = require("axios");
      var data = {
        program_id: program_id,
      };

      var config = {
        method: "POST",
        url: "https://prod.api.tv.cl/details/get_program_details",
        headers: {
          "x-api-key": "FmRZKGcKF75NsEn4Dwshf8kMHoaZIxXK4Aj07LHO",
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log("response", response);
          setChannelDetails(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch {}
  }, [program_id]);
  return (
    <ClientOnly>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleClose}
        style={customStyles}
      >
        <div>{dynamic_image}</div>
        {channelDetails == null ? (
          <Loader />
        ) : (
          <>
            <div className="logo">
              <Image
                src={props.logoLink}
                alt="channel logo"
                width={50}
                height={50}
                objectFit="contain"
              />
              <h2>
                {channelDetails?.channel_name} {channelDetails?.program_title}
              </h2>
            </div>
            <h3>{channelDetails?.program_type}</h3>
            <h4>
              {isTomorrow ? "Tomorrow" : "Today"} {channelDetails?.program_time}
            </h4>
            <h2>About program</h2>
            <p style={{ maxWidth: "500px" }}>{channelDetails?.program_desc}</p>
          </>
        )}
      </Modal>
    </ClientOnly>
  );
}

export default CustomModal;
