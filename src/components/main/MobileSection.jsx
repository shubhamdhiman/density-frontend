

import React from 'react';
import { MobilePageS, MobilePageSingleCont, RadialGradientContainer } from '../../styled/MobilePageStyle';
import PhoneBackground from '../../assets/icons/phoneSection/PhoneBackground.png';
import PhoneBackgroundSmall from '../../assets/icons/phoneSection/PhoneBackgroundSmall.png';
import PhoneCenter from '../../assets/icons/phoneSection/PhoneCenter.png';
import PhoneLeft from '../../assets/icons/phoneSection/PhoneLeft.png';
import PhoneRight from '../../assets/icons/phoneSection/PhoneRight.png';

function MobileSection() {
  return (
    <MobilePageS>
      <RadialGradientContainer></RadialGradientContainer>
      {/* Left Phone */}
      <MobilePageSingleCont left="37%" zIndex={3}>
        <img src={PhoneBackgroundSmall} alt="Phone Background" />
        <img src={PhoneLeft} alt="Phone Center" style={{ position: 'absolute', top: '48%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      </MobilePageSingleCont>

      {/* Center Phone */}
      <MobilePageSingleCont center={true} zIndex={4}>
        <img src={PhoneBackground} alt="Phone Background" />
        <img src={PhoneCenter} alt="Phone Center" style={{ position: 'absolute', top: '48%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      </MobilePageSingleCont>

      {/* Right Phone */}
      <MobilePageSingleCont right="22%" zIndex={3}>
        <img src={PhoneBackgroundSmall} alt="Phone Background" />
        <img src={PhoneRight} alt="Phone Center" style={{ position: 'absolute', top: '48%', left: '50%', transform: 'translate(-50%, -50%)', }} />
      </MobilePageSingleCont>
    </MobilePageS>
  );
}

export default MobileSection;
