import React from 'react'
import StartSmallLeft from '../../assets/icons/startsmall/StartSmallLeft.png'
import StartSmallRight from '../../assets/icons/startsmall/StartSmallRight.png'
import { TradeMoreHeading, TradeMoreInner } from '../../styled/TradeMoreStyle'
import { MainSubHeading } from '../../styled/MainPageStyle'
import { StartSmallContainer,StartSmallInnerContainer, StartSmallBoxes, StartSmallBox, StartSmallBoxH, StartSmallBoxSH } from '../../styled/StartSmallStyle'
function StartSmall() {
  return (
    <StartSmallContainer>
      <StartSmallInnerContainer>
        <TradeMoreInner>
                    <TradeMoreHeading color="black">Start Small. Earn Big.</TradeMoreHeading>
                    <MainSubHeading width="650px" color="black">Deposity a minimum of 1000 and get a Deposit bonus + dedicagted relationship manager</MainSubHeading>
                </TradeMoreInner>
        <StartSmallBoxes>
            <StartSmallBox>
                <img src={StartSmallLeft} alt='image' />
                <StartSmallBoxH>Deposit</StartSmallBoxH>
                <StartSmallBoxH>Bonus.</StartSmallBoxH>
                <StartSmallBoxSH>Our asset's liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book.</StartSmallBoxSH>
            </StartSmallBox>
            <StartSmallBox>
                <img src={StartSmallRight} alt='image' />
                <StartSmallBoxH>Dedicated</StartSmallBoxH>
                <StartSmallBoxH>Relationship Manager.</StartSmallBoxH>
                <StartSmallBoxSH>Our asset's liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book.</StartSmallBoxSH>
            </StartSmallBox>
        </StartSmallBoxes>
      </StartSmallInnerContainer>
    </StartSmallContainer>
  )
}

export default StartSmall
