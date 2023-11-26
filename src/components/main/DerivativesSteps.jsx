import React from 'react'
import { DerivativesContainer,GeneralHead } from '../../styled/DerivativeStepsStyles'
import { TradeMoreContainer, TradeMoreHeading, TradeMoreInner, TradeMoreSpan } from '../../styled/TradeMoreStyle'
function DerivativesSteps() {
  return (
    <>
    <DerivativesContainer>
            <TradeMoreContainer>
                <TradeMoreInner>
                    <TradeMoreHeading width="850px" color="white">Derivatives made simple in <TradeMoreSpan>3 Easy</TradeMoreSpan>Steps</TradeMoreHeading>
                </TradeMoreInner>
            </TradeMoreContainer>
            <div style={{color:'white',textAlign:'center',fontSize:'2rem'}}>Images with boxes</div>

            <GeneralHead>Backed by the Best.</GeneralHead>
            

    </DerivativesContainer>
    </>
  )
}

export default DerivativesSteps
