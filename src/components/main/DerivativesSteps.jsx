import React from 'react'
import { DerivativesContainer,GeneralHead } from '../../styled/DerivativeStepsStyles'
import { TradeMoreContainer, TradeMoreHeading, TradeMoreInner, TradeMoreSpan } from '../../styled/TradeMoreStyle'
import CompaniesSection from './helperComponents/CompaniesSection'
import CelebSection from './helperComponents/CelebSection'
import MobileDesc from './helperComponents/MobileDesc'
function DerivativesSteps() {
  return (
    <>
    <DerivativesContainer>
            <TradeMoreContainer>
                <TradeMoreInner>
                    <TradeMoreHeading width="850px" color="white">Derivatives made simple in <TradeMoreSpan>3 Easy</TradeMoreSpan>Steps</TradeMoreHeading>
                </TradeMoreInner>
            </TradeMoreContainer>
            
            <MobileDesc />
            <GeneralHead>Backed by the Best.</GeneralHead>
            <CompaniesSection />
            <CelebSection />

    </DerivativesContainer>
    </>
  )
}

export default DerivativesSteps
