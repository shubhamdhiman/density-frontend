import React from 'react'
import divider from '../../../assets/icons/helper/divider.png'
import { NumbersAchievedS, NumbersAchievedInner, NumbersAchievedbox, NumbersAchievedhead, NumbersAchievedsubhead } from '../../../styled/NumbersAchievedUnlockFrontierS'
function NumbersAchievedUnlockFrontier() {
  return (
    <NumbersAchievedS>
      <NumbersAchievedInner >
            <NumbersAchievedbox>
                <NumbersAchievedhead>Same</NumbersAchievedhead>
                <NumbersAchievedhead>Strategies</NumbersAchievedhead>
                {/* <NumbersAchievedsubhead >Conversion Fee</NumbersAchievedsubhead> */}
            </NumbersAchievedbox>
            <img style={{margin:'0'}} src={divider} alt="divider" />
            <NumbersAchievedbox>
                <NumbersAchievedhead >Same</NumbersAchievedhead>
                <NumbersAchievedhead >Indicators</NumbersAchievedhead>
                {/* <NumbersAchievedsubhead>LifeTime Volume Traded</NumbersAchievedsubhead> */}
            </NumbersAchievedbox><img style={{margin:'0'}} src={divider} alt="divider" />
            <NumbersAchievedbox>
                <NumbersAchievedhead >Better</NumbersAchievedhead>
                <NumbersAchievedhead >Leverage</NumbersAchievedhead>
                {/* <NumbersAchievedsubhead>Total Tradable Pairs</NumbersAchievedsubhead> */}
            </NumbersAchievedbox>
            <img src={divider} style={{margin:'0'}} alt="divider" />
            <NumbersAchievedbox>
                <NumbersAchievedhead >24x7</NumbersAchievedhead>
                <NumbersAchievedhead >Trading</NumbersAchievedhead>
                {/* <NumbersAchievedsubhead>Traders</NumbersAchievedsubhead> */}
            </NumbersAchievedbox>
      </NumbersAchievedInner>
    </NumbersAchievedS>
  )
}

export default NumbersAchievedUnlockFrontier
