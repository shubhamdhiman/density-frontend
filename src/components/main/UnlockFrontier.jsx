import React from 'react'
import UnlockBTCImg from '../../assets/icons/helper/UnlockBTCImg.png'
import UnlockNiftyImg from '../../assets/icons/helper/UnlockNiftyImg.png'
import { TradeMoreContainer, TradeMoreHeading, TradeMoreInner, TradeMoreSpan, TradeMoreBoxContainer } from '../../styled/TradeMoreStyle'
import { MainSubHeading } from '../../styled/MainPageStyle'
import { UnlockFrontierS, UnlockFrontierImageSec } from '../../styled/UnlockFrontierStyle'
import NumbersAchievedUnlockFrontier from './helperComponents/NumbersAchievedUnlockFrontier'
function UnlockFrontier() {
  return (
    <UnlockFrontierS>
      <TradeMoreContainer>
        <TradeMoreInner>
          <TradeMoreHeading width="800px" color="white"><TradeMoreSpan>Unlock New</TradeMoreSpan> Frontiers.</TradeMoreHeading>
          <MainSubHeading width="650px">Are you a stock trader looking for new opportunities to make money? We got you covered!</MainSubHeading>
        </TradeMoreInner>
      </TradeMoreContainer>
      <NumbersAchievedUnlockFrontier />
      <UnlockFrontierImageSec>
        <img width={600} height={500} src={UnlockBTCImg} alt="image" />
        <img width={600} height={500} src={UnlockNiftyImg} alt="image" />
      </UnlockFrontierImageSec>
    </UnlockFrontierS>
  )
}

export default UnlockFrontier
