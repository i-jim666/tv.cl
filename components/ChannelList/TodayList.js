import React, { useEffect, useState } from 'react'
import Channel from '../Channel/Channel';
import Loader from '../../global-components/Loader';
import Logos from '../../global-components/AllLogos.js'


const TodayList = () => {

    function convertToFit(Text) {
        return Text.toLowerCase()
                    .replace(/ /g, '_')
                    .replace(/[^\w-]+/g, '');
        }

  const [todayList, setTodayList] = useState(<Loader />);
  
  useEffect( ()=>{
    try{
        var axios = require('axios');
        var data = {
          "publish_date": "today"
        };
        
        var config = {
          method: 'POST',
          url: 'https://prod.api.tv.cl/program/get_all_programs',
          headers: { 
            'x-api-key': '0jVCwT3KSf1YpiUwzpJr15GHFdSF0he83fSUDq7f', 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          let items = response.data.data;
          let items_arr = [];
          let i = 0;
          items.map(elem => {

            let converted_name = convertToFit(elem.channel_name)

            if(converted_name == 'cdf_bsico'){
                converted_name = 'cdf_basico'
            }
            if(converted_name == '24_horas'){
                converted_name = 'horas'
            }
            if(converted_name == 'de_pelcula'){
                converted_name = 'de_pelicula'
            }
            if(converted_name == 'chilevisin'){
                converted_name = 'chilevision'
            }
            if(converted_name == '13c'){
                converted_name = 'thirteen_c'
            }
            if(converted_name == 'fox_sports_bsico'){
                converted_name = 'fox_sports_basico'
            }
            if(converted_name == 'discovery_home__health'){
                converted_name = 'discovery_home_health'
            }

            items_arr.push(<Channel
                key = {i+'today'}
                logoLink = {Logos[converted_name]}
                channelName = {elem.channel_name}
                channelLink = {process.env.NEXT_PUBLIC_DOMAIN_NAME+'/channel-details?channel='+elem.channel_name}
                programList = {elem.program_list}
                tomorrowList ={false}
            />);
            i++;
          })
          setTodayList(items_arr);

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
        {todayList}
    </>
  )
}

export default TodayList