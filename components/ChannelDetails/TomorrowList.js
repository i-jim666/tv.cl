import React, { useEffect, useState } from 'react'
import SingleProgram from './SingleProgram';
import Loader from '../../global-components/Loader';
import { useRouter } from 'next/router';
import moment from 'moment/moment';


const TomorrowList = (props) => {

  const [tomorrowList, setTomorrowList] = useState(<Loader />);

  var channel_name = props.channelSlug;

  
  useEffect( ()=>{
    var prog_arr = [];

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if(channel_name){
      let name_arr = channel_name.split('-');

      for (let i = 0; i < name_arr.length; i++) {
        name_arr[i] = capitalizeFirstLetter(name_arr[i])  
      }
      channel_name = name_arr.join(' ');

      if(channel_name == 'A E'){
        channel_name = channel_name = 'A&E'
      }
      if(channel_name == 'Tvn'){
        channel_name = 'TVN'
      }
      if(channel_name == 'Hbo'){
        channel_name = 'HBO'
      }
    }

    try{
      
      var axios = require('axios');
      var data = JSON.stringify({
        "publish_date": "tomorrow",
        "channel_name": channel_name
      });
  
      var config = {
        method: "post",
        url: "https://prod.api.tv.cl/programs/get-specific-channel-programs",
        headers: {
          "x-api-key": "odL9OThpGhapypWcIqGRma1gMjTAFeNa53HKBh6g",
          "Content-Type": "application/json",
        },
        data: data,
      };
  
      axios(config)
      .then(function (response) {
        
        let list = response.data.data.program_list
        list.map(elem => {
          prog_arr.push(<SingleProgram
            id = {elem.program_id}
            programName = {elem.program_title}
            programType = {elem.program_type}
            programDesc = {elem.program_desc}
            programTime = {elem.program_time}
          />)
        })
        
        setTomorrowList(prog_arr)

      })
      .catch(function (error) {
        console.log(error);
      });
  
    }

    catch{

    }

} , [])

return (
<>  
    {tomorrowList}
</>
)}

export default TomorrowList