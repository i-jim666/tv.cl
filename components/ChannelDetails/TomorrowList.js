import React, { useEffect, useState } from 'react'
import SingleProgram from './SingleProgram';
import Loader from '../../global-components/Loader';
import { useRouter } from 'next/router';
import moment from 'moment/moment';


const TomorrowList = () => {

  const [tomorrowList, setTomorrowList] = useState(<Loader />);

  const { query } = useRouter();
  var channel_name = query.channel;

  
  useEffect( ()=>{
    var prog_arr = [];

    try{
      
      var axios = require('axios');
      var data = JSON.stringify({
        "publish_date": "tomorrow",
        "channel_name": channel_name
      });
  
      var config = {
        method: 'post',
        url: 'https://prod.api.tv.cl/channel/get_channel_programs',
        headers: { 
          'x-api-key': 'u79xCVKGH67EugNIro2rx6GuG5kyCIxF3QWE0SSI', 
          'Content-Type': 'application/json'
        },
        data : data
      };
  
      axios(config)
      .then(function (response) {
        
        let list = response.data.data.program_list
        list.map(elem => {
          prog_arr.push(<SingleProgram
            id = {elem.program_id}
            programName = {elem.program_title}
            programType = {`Test type`}
            programDesc = {`Test description`}
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