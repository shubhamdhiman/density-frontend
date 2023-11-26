import React from 'react'
import EasyMoneyMainIcon from '../../assets/icons/helper/EasyMoneyMainIcon.png'
import EasyMoneyLeft from '../../assets/icons/helper/EasyMoneyLeft.png'
import EasyMoneyCenter from '../../assets/icons/helper/EasyMoneyCenter.png'
import EasyMoneyRight from '../../assets/icons/helper/EasyMoneyRight.png'
import { NavButton } from '../../styled/NavigationStyle'
import { StartSmallContainer } from '../../styled/DontTakeStyle'
import { StartSmallBoxes, StartSmallBox, StartSmallBoxH, StartSmallBoxSH, StartSmallBoxDesc } from '../../styled/EasyMoneyStyle'
import { TradeMoreContainer, TradeMoreHeading, TradeMoreInner, TradeMoreSpan, TradeMoreBoxContainer } from '../../styled/TradeMoreStyle'
import { MainSubHeading } from '../../styled/MainPageStyle'
import { EasyMoneyContainer } from '../../styled/EasyMoneyStyle'
function EasyMoney() {
    return (
        <EasyMoneyContainer>
            <img src={EasyMoneyMainIcon} alt="image" />
            <TradeMoreContainer>
                <TradeMoreInner>
                    <TradeMoreHeading width="900px" color="white"><TradeMoreSpan>Earn Money.</TradeMoreSpan> The Easy Way.</TradeMoreHeading>
                    <MainSubHeading width="650px">No Complexity of Trading Fee, generate volume and win</MainSubHeading>
                </TradeMoreInner>
            </TradeMoreContainer>
            <StartSmallContainer>
                <StartSmallBoxes>
                    <StartSmallBox>
                        <img src={EasyMoneyLeft} alt='image' />

                        <StartSmallBoxH>Share your your</StartSmallBoxH>
                        <StartSmallBoxH>referral link</StartSmallBoxH>

                    </StartSmallBox>
                    <StartSmallBox>
                        <img src={EasyMoneyCenter} alt='image' />

                        <StartSmallBoxH>Invite Friends to</StartSmallBoxH>
                        <StartSmallBoxH>Trade on Density</StartSmallBoxH>

                    </StartSmallBox>
                    <StartSmallBox>
                        <img src={EasyMoneyRight} alt='image' />

                        <StartSmallBoxH>Trade</StartSmallBoxH>
                        <StartSmallBoxH>And Earn</StartSmallBoxH>

                    </StartSmallBox>
                </StartSmallBoxes>
            </StartSmallContainer>
            <NavButton>Start Earning Now</NavButton>

        </EasyMoneyContainer>
    )
}

export default EasyMoney
