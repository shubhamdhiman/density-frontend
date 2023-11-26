import React from 'react'
import { TradeTogetherContainer } from '../../styled/TradeTogetherStyle'
import { TradeMoreContainer, TradeMoreHeading, TradeMoreInner, TradeMoreSpan, TradeMoreBoxContainer } from '../../styled/TradeMoreStyle'
import { MainSubHeading } from '../../styled/MainPageStyle'
import TogetherNumbersAchived from './helperComponents/TogetherNumbersAchived'
function TradeTogether() {
  return (
    <TradeTogetherContainer>
        <TradeMoreContainer>
                <TradeMoreInner>
                    <TradeMoreHeading width="1050px" color="white">Trade Together.<TradeMoreSpan> Thrive Together.</TradeMoreSpan></TradeMoreHeading>
                    <MainSubHeading width="650px">Join the fun-filled community on our platform.</MainSubHeading>
                </TradeMoreInner>
    </TradeMoreContainer>
    <TogetherNumbersAchived />

    </TradeTogetherContainer>
  )
}

export default TradeTogether
