import React from 'react'
import { TradeMoreHelperBoxS, TradeMoreHelperBoxText, TradeMoreHelperBoxTextH, TradeMoreHelperBoxTextSH } from '../../../styled/TradeMoreHelperBoxStyle'
function TradeMoreHelperBox({makeVal, takeVal, background, text, image}) {
    return (
        <TradeMoreHelperBoxS background={background}>
            <img src={image} alt="Brand" />
            <TradeMoreHelperBoxText>
                <TradeMoreHelperBoxTextH text={text}>{makeVal}</TradeMoreHelperBoxTextH>
                <TradeMoreHelperBoxTextSH text={text}>Maker Fees</TradeMoreHelperBoxTextSH>
            </TradeMoreHelperBoxText>
            <TradeMoreHelperBoxText>
                <TradeMoreHelperBoxTextH text={text}>{takeVal}</TradeMoreHelperBoxTextH>
                <TradeMoreHelperBoxTextSH text={text}>Taker Fees</TradeMoreHelperBoxTextSH>
            </TradeMoreHelperBoxText>
        </TradeMoreHelperBoxS>
    )
}

export default TradeMoreHelperBox
