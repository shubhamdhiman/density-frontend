import React from 'react'
import company1 from '../../../assets/icons/companies/company1.png'
import company2 from '../../../assets/icons/companies/company2.png'
import company3 from '../../../assets/icons/companies/company3.png'
import company4 from '../../../assets/icons/companies/company4.png'
import company5 from '../../../assets/icons/companies/company5.png'
import company6 from '../../../assets/icons/companies/company6.png'
import company7 from '../../../assets/icons/companies/company7.png'
import { CompaniesSectionCont, CompaniesSectionDiv } from '../../../styled/CompaniesSectionStyle'
function CompaniesSection() {
  return (
    <CompaniesSectionCont >
      <CompaniesSectionDiv >
        <img src={company1} alt='image' />
      </CompaniesSectionDiv>
      <CompaniesSectionDiv >
        <img src={company2} alt='image' />
      </CompaniesSectionDiv>
      <CompaniesSectionDiv >
        <img src={company3} alt='image' />
      </CompaniesSectionDiv>
      <CompaniesSectionDiv >
        <img src={company4} alt='image' />
      </CompaniesSectionDiv>
      <CompaniesSectionDiv >
        <img src={company5} alt='image' />
      </CompaniesSectionDiv>
      <CompaniesSectionDiv >
        <img src={company6} alt='image' />
      </CompaniesSectionDiv>
      <CompaniesSectionDiv >
        <img src={company7} alt='image' />
      </CompaniesSectionDiv>
    </CompaniesSectionCont>
  )
}

export default CompaniesSection
