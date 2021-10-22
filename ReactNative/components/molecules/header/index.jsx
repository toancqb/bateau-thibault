import React from "react";
import {Image} from 'react-native';
import navbarBg from '../../../assets/images/navbarbg.png';

function LogoTitle() {
    return (
      <Image
        style={{ width: 240, height: 50 }}
        source={navbarBg}
      />
    );
  }


export default LogoTitle