import React from 'react'
import MobileSection from './MobileSection'
import { MainPageStyle, MainInnerContainer,MainHeading,MainHeadingSpan, MainSubHeading } from '../../styled/MainPageStyle'
function MainPage() {
  return (
    <MainPageStyle>
        <MainInnerContainer>
            <MainHeading>It's time to trade, the <MainHeadingSpan>future.</MainHeadingSpan></MainHeading>
            <MainSubHeading>Trade BTC, ETH Futures with 125x leverage and earn rewards.</MainSubHeading>
        </MainInnerContainer>
        <MobileSection />
    </MainPageStyle>
  )
}

export default MainPage
