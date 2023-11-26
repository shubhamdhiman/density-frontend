import React from 'react'
import celeb1 from '../../../assets/icons/celebs/celeb1.png'
import celeb2 from '../../../assets/icons/celebs/celeb2.png'
import celeb3 from '../../../assets/icons/celebs/celeb3.png'
import celeb4 from '../../../assets/icons/celebs/celeb4.png'
import celeb5 from '../../../assets/icons/celebs/celeb5.png'
import celeb6 from '../../../assets/icons/celebs/celeb6.png'
import celeb7 from '../../../assets/icons/celebs/celeb7.png'
import celeb8 from '../../../assets/icons/celebs/celeb8.png'
import { CompaniesSectionCont, CompaniesSectionDiv } from '../../../styled/CompaniesSectionStyle'
function CelebSection() {
  return (
    <CompaniesSectionCont >
    <CompaniesSectionDiv >
      <img style={{margin:'0'}} src={celeb1} alt='image' />
      <p style={{margin:'0',marginTop:'10px',color:'white'}}>Utsav Somani</p>
    </CompaniesSectionDiv>
    <CompaniesSectionDiv >
      <img style={{margin:'0'}} src={celeb2} alt='image' />
      <p style={{margin:'0',marginTop:'10px',color:'white'}}>Aditya Nagarsheth</p>
      <p style={{margin:'0',color:'gray',fontSize:'10px'}}>Perpetual Value Partners</p>
    </CompaniesSectionDiv>
    <CompaniesSectionDiv >
      <img style={{margin:'0'}} src={celeb3} alt='image' />
      <p style={{margin:'0',marginTop:'10px',color:'white'}}>Gokul Rajaram</p>
    </CompaniesSectionDiv>
    <CompaniesSectionDiv >
      <img style={{margin:'0'}} src={celeb4} alt='image' />
      <p style={{margin:'0',marginTop:'10px',color:'white'}}>Sajid Rehman</p>
      <p style={{margin:'0',color:'gray',fontSize:'10px'}}>My Aisa VC</p>
    </CompaniesSectionDiv>
    <CompaniesSectionDiv >
      <img style={{margin:'0'}} src={celeb5} alt='image' />
      <p style={{margin:'0',marginTop:'10px',color:'white'}}>Arjun Sethi</p>
      <p style={{margin:'0',color:'gray',fontSize:'10px'}}>Tribe Capital</p>
    </CompaniesSectionDiv>
    <CompaniesSectionDiv >
      <img style={{margin:'0'}} src={celeb6} alt='image' />
      <p style={{margin:'0',marginTop:'10px',color:'white'}}>Kunal Shah</p>
    </CompaniesSectionDiv>
    <CompaniesSectionDiv >
      <img style={{margin:'0'}} src={celeb7} alt='image' />
      <p style={{margin:'0',marginTop:'10px',color:'white'}}>Sandeep Nailawal</p>
      <p style={{margin:'0',color:'gray',fontSize:'10px'}}>Polygon Labs</p>
    </CompaniesSectionDiv>
    <CompaniesSectionDiv >
      <img style={{margin:'0'}} src={celeb8} alt='image' />
      <p style={{margin:'0',marginTop:'10px',color:'white'}}>Karn Vivek Nagpal</p>
    </CompaniesSectionDiv>
  </CompaniesSectionCont>
  )
}

export default CelebSection
