import React from 'react'
import logo from '../../assets/icons/logo.png'
import GetStartedIcon from '../../assets/icons/helper/GetStartIcon.png'
import { GetStartedContainer, GetStartedHeader, GetStartedButton } from '../../styled/GetStartedStyles'
function GetStarted() {
  return (
    <GetStartedContainer>
      <GetStartedHeader>Get Started Now</GetStartedHeader>
      <div style={{position:'relative',zIndex:'1'}}>
      <svg style={{
        width: '400px',
        marginTop: '-90px',
        height: '900px',
        flexShrink: '0',

        fill: '#000',

        strokeWidth: '1.392px',
        stroke: '#28B6A2',
      }} xmlns="http://www.w3.org/2000/svg" width="559" height="1125" viewBox="0 0 559 1125" fill="none">
        <g filter="url(#filter0_f_1_2083)">
          <path d="M481.371 7.86133H77.6297C39.4504 7.86133 8.5 38.7954 8.5 76.9545V1047.82C8.5 1085.98 39.4504 1116.91 77.6297 1116.91H481.371C519.55 1116.91 550.5 1085.98 550.5 1047.82V76.9545C550.5 38.7954 519.55 7.86133 481.371 7.86133Z" fill="black" />
          <path d="M481.371 7.86133H77.6297C39.4504 7.86133 8.5 38.7954 8.5 76.9545V1047.82C8.5 1085.98 39.4504 1116.91 77.6297 1116.91H481.371C519.55 1116.91 550.5 1085.98 550.5 1047.82V76.9545C550.5 38.7954 519.55 7.86133 481.371 7.86133Z" stroke="url(#paint0_linear_1_2083)" stroke-width="1.39153" stroke-miterlimit="10" />
        </g>
        <defs>
          <filter id="filter0_f_1_2083" x="0.846589" y="0.207886" width="557.307" height="1124.36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="3.47882" result="effect1_foregroundBlur_1_2083" />
          </filter>
          <linearGradient id="paint0_linear_1_2083" x1="435.645" y1="-37.5558" x2="1031.99" y2="848.29" gradientUnits="userSpaceOnUse">
            <stop stop-color="#28B6A2" />
            <stop offset="1" stop-color="#E2FF6F" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      </div>
      <img style={{position:'absolute',zIndex:'201',marginTop:'150px'}} src={logo} alt="logo" />
      <img style={{position:'absolute',zIndex:'200', marginTop:'350px'}} src={GetStartedIcon} alt="getStart" />
      <GetStartedButton>Start Trading!</GetStartedButton>
    </GetStartedContainer>
  )
}

export default GetStarted
