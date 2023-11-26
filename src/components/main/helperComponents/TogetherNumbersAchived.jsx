import React from 'react'
import divider from '../../../assets/icons/helper/divider.png'
import { NumbersAchievedS, NumbersAchievedInner, NumbersAchievedbox, NumbersAchievedhead, NumbersAchievedsubhead } from '../../../styled/TogetherNumbersAchivedStyle'
import { NavButton } from '../../../styled/NavigationStyle'
function TogetherNumbersAchived() {
  return (
    <NumbersAchievedS>
      <NumbersAchievedInner >
            <NumbersAchievedbox>
                <NumbersAchievedhead>10,000+</NumbersAchievedhead>
                <NumbersAchievedsubhead >Traders</NumbersAchievedsubhead>
            </NumbersAchievedbox>
            <img style={{margin:'0'}} src={divider} alt="divider" />
            <NumbersAchievedbox>
                <NumbersAchievedhead >100Mn</NumbersAchievedhead>
                <NumbersAchievedsubhead>Daily Volume Traced</NumbersAchievedsubhead>
            </NumbersAchievedbox>
            <img style={{margin:'0'}} src={divider} alt="divider" />
            <NumbersAchievedbox>
                <NumbersAchievedhead >Daily</NumbersAchievedhead>
                <NumbersAchievedsubhead>Trade Analysis</NumbersAchievedsubhead>
            </NumbersAchievedbox>
            <img style={{margin:'0'}} src={divider} alt="divider" />
            <NumbersAchievedbox>
                <NumbersAchievedhead >Live</NumbersAchievedhead>
                <NumbersAchievedsubhead>Signals</NumbersAchievedsubhead>
            </NumbersAchievedbox>
      </NumbersAchievedInner>
      <NavButton>Join Community</NavButton>
    </NumbersAchievedS>
  )
}

export default TogetherNumbersAchived
