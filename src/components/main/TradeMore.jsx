import React from 'react'
import { TradeMoreContainer, TradeMoreHeading, TradeMoreInner, TradeMoreSpan, TradeMoreBoxContainer } from '../../styled/TradeMoreStyle'
import { MainSubHeading } from '../../styled/MainPageStyle'
import TradeMoreHelperBox from './helperComponents/TradeMoreHelperBox'
import TradeMoreIconLeft from '../../assets/icons/helper/TradeMoreIconLeft.png'
import logoBlack from '../../assets/icons/logoBlack.png'
import TradeMoreIconRight from '../../assets/icons/helper/TradeMoreIconRight.png'
function TradeMore() {
    return (
        <>
            <TradeMoreContainer>
                <TradeMoreInner>
                    <TradeMoreHeading width="800px" color="white">Trade More.<TradeMoreSpan> Pay Less.</TradeMoreSpan></TradeMoreHeading>
                    <MainSubHeading>Our low Fees Supercharge Your Profits</MainSubHeading>
                </TradeMoreInner>
            </TradeMoreContainer>
            <TradeMoreBoxContainer>
                <TradeMoreHelperBox image={TradeMoreIconLeft}  makeVal={0.025} takeVal={0.07}/>
                <TradeMoreHelperBox image={logoBlack} text="black" background={true} makeVal={0.02} takeVal={0.04}/>
                <TradeMoreHelperBox image={TradeMoreIconRight} makeVal={0.02} takeVal={0.05}/>
            </TradeMoreBoxContainer>
        </>
    )
}

export default TradeMore
