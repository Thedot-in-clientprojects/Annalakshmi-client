import React from 'react';
import PhonePicture from '../assets/phone.png';
import WebPicture from '../assets/web.png';
import useMediaQuery from '@mui/material/useMediaQuery';


function Coming() {

    const matches = useMediaQuery('(min-width:600px)');

  return (
    <div>
            <img width={'100%'} height={'100%'} src={matches ? WebPicture :  PhonePicture}/>
    </div>
  )
}

export default Coming