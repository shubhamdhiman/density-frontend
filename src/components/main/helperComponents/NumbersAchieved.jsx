import React from 'react'
import dividerClr from '../../../assets/icons/helper/dividerClr.png'
import { NumbersAchievedS, NumbersAchievedInner, NumbersAchievedbox, NumbersAchievedhead, NumbersAchievedsubhead } from '../../../styled/NumbersAchievedStyle'
function NumbersAchieved() {
  return (
    <NumbersAchievedS>
      <NumbersAchievedInner >
            <NumbersAchievedbox>
                <NumbersAchievedhead>00%</NumbersAchievedhead>
                <NumbersAchievedsubhead >Conversion Fee</NumbersAchievedsubhead>
            </NumbersAchievedbox>
            <img style={{margin:'0'}} src={dividerClr} alt="divider" />
            <NumbersAchievedbox>
                <NumbersAchievedhead >500 Mn+</NumbersAchievedhead>
                <NumbersAchievedsubhead>LifeTime Volume Traded</NumbersAchievedsubhead>
            </NumbersAchievedbox>
            <img style={{margin:'0'}} src={dividerClr} alt="divider" />
            <NumbersAchievedbox>
                <NumbersAchievedhead >250+</NumbersAchievedhead>
                <NumbersAchievedsubhead>Total Tradable Pairs</NumbersAchievedsubhead>
            </NumbersAchievedbox>
            <img style={{margin:'0'}} src={dividerClr} alt="divider" />
            <NumbersAchievedbox>
                <NumbersAchievedhead >15,000+</NumbersAchievedhead>
                <NumbersAchievedsubhead>Traders</NumbersAchievedsubhead>
            </NumbersAchievedbox>
      </NumbersAchievedInner>
    </NumbersAchievedS>
  )
}

export default NumbersAchieved
