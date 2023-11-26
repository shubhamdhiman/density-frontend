import React from 'react'
// import helperIcon1 from '../../assets/icons/helper/helperIcon1.png'
// import helperIcon2 from '../../assets/icons/helper/helperIcon2.png'
// import helperIcon3 from '../../assets/icons/helper/helperIcon3.png'
import { PhoneScreenS, PhoneScreenInner, PhoneScreenContent, PhoneScreenText } from '../../styled/PhoneScreenStyle'
function PhoneScreenFeatureDesc({ bottom, helper, text }) {
  // console.log(helper)
  return (
    <PhoneScreenS>
      <PhoneScreenInner bottom={bottom} >
        <svg xmlns="http://www.w3.org/2000/svg" width="287" height="573" viewBox="0 0 287 573" fill="none">
          <g filter="url(#filter0_f_1_112)">
            <path d="M245.171 6.69824H41.3869C22.1163 6.69824 6.49438 22.318 6.49438 41.586V531.811C6.49438 551.079 22.1163 566.698 41.3869 566.698H245.171C264.441 566.698 280.063 551.079 280.063 531.811V41.586C280.063 22.318 264.441 6.69824 245.171 6.69824Z" fill="black" />
            <path d="M245.171 6.69824H41.3869C22.1163 6.69824 6.49438 22.318 6.49438 41.586V531.811C6.49438 551.079 22.1163 566.698 41.3869 566.698H245.171C264.441 566.698 280.063 551.079 280.063 531.811V41.586C280.063 22.318 264.441 6.69824 245.171 6.69824Z" stroke="url(#paint0_linear_1_112)" stroke-width="1.11669" stroke-miterlimit="10" />
          </g>
          <defs>
            <filter id="filter0_f_1_112" x="0.352584" y="0.556685" width="285.852" height="572.284" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="2.79173" result="effect1_foregroundBlur_1_112" />
            </filter>
            <linearGradient id="paint0_linear_1_112" x1="222.091" y1="-16.2346" x2="523.251" y2="430.953" gradientUnits="userSpaceOnUse">
              <stop stop-color="#28B6A2" />
              <stop offset="1" stop-color="#E2FF6F" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </PhoneScreenInner>
      <PhoneScreenContent>

        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <img  src={helper} alt='Image' />
        <PhoneScreenText>{text}</PhoneScreenText>
        </div>
      </PhoneScreenContent>
    </PhoneScreenS>

  )
}

export default PhoneScreenFeatureDesc
