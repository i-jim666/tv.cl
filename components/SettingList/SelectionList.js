import React, {useEffect, useState} from 'react'
import SelectChannel from './SelectChannel'
import './SettingChannelList.scss'
import Loader from '../../global-components/Loader';
import Logos from '../../global-components/AllLogos.js'


const SelectionList = () => {

  function convertToFit(Text) {
    return Text.toLowerCase()
                .replace(/ /g, '_')
                .replace(/[^\w-]+/g, '');
    }

  const [renderer, setRenderer] = useState(<Loader />)

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
          let sel_arr = [];
          let i = 0;
          items.map(elem => {

            // console.log(elem)

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

            sel_arr.push(
              <SelectChannel 
                key = {i+'sel'}
                logoLink = {Logos[converted_name]}
                channelName = {elem.channel_name}
                programCount = {elem.program_list.length}
              />
            );
            i++;
          })
          setRenderer(sel_arr);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    catch{

    }
    
  } , [])

  return (
    <div className="selection__list">

        {renderer}

    </div>
  )
}

export default SelectionList
