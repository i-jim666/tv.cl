import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Image from "next/image";
import ProgramImg from "../images/card_placeholder.svg";
import ClientOnly from "./ClientOnly";
import Loader from "../global-components/Loader";
const customStyles = {
  content: {
    padding: "0px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "519px",
    width: "90%",
    borderRadius: "15px",
    boxShadow: "0px 26px 39px 10px rgba(16, 28, 35, 0.35)"
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

  let click_outside = () => {
    document.querySelector('.ReactModal__Overlay').remove();
  }

  const [dynamic_image, setDynamic] = useState(the_img);
  const [channelDetails, setChannelDetails] = useState(null);
  useEffect(() => {
    if (img != null) {
      setDynamic(
        <Image
          src={img}
          alt="Program image"
          width="100%"
          height="196px"
          layout="responsive"
          objectFit="cover"
          objectPosition="top"
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
        <div className="dynamic_image_container">
          <svg onClick={click_outside} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_241_31215)">
              <circle cx="21" cy="18" r="12" fill="white"/>
            </g>
            <path d="M25 14L17 22M17 14L25 22" stroke="#282D34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
              <filter id="filter0_d_241_31215" x="0" y="0" width="42" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_241_31215"/>
                <feOffset dy="3"/>
                <feGaussianBlur stdDeviation="3"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.213125 0 0 0 0 0.231962 0 0 0 0 0.258333 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_241_31215"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_241_31215" result="shape"/>
              </filter>
            </defs>
          </svg>

          {dynamic_image}
        </div>
        {channelDetails == null ? (
          <Loader />
        ) : (
          <>
            <div className="modal__content">
              <div className="logo">
                <Image
                  src={props.logoLink}
                  alt="channel logo"
                  width={35}
                  height={35}
                  objectFit="contain"
                  objectPosition="top"
                />
                <div className="modal_channel_info">
                  <p className="title">
                    {channelDetails?.channel_name} {channelDetails?.program_title}
                  </p>
                  <p className="type">
                    {channelDetails?.program_type}
                  </p>
                  <p className="time">
                    {isTomorrow ? "Mañana" : "Hoy"} {channelDetails?.program_time}
                  </p>
                </div>
              </div>
              <h4>Acerca programación</h4>
              <p className="desc" style={{ maxWidth: "500px", maxHeight: "150px", overflowY: "auto" }}>{channelDetails?.program_desc}</p>
            </div>
          </>
        )}
      </Modal>
    </ClientOnly>
  );
}

export default CustomModal;
