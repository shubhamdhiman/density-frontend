import React from 'react'
import ExploreTradeGraph from '../../assets/icons/helper/ExploreTradeGraph.png'
import ExploreBottomImg from '../../assets/icons/helper/ExploreBottomImg.png'
import { NavButton } from '../../styled/NavigationStyle'
import { ExploreMarketsInnerS, ExploreMoreContainer, ExploreMarketImageCont } from '../../styled/ExploreMarkets'
import { MainSubHeading } from '../../styled/MainPageStyle'
import { TradeMoreHeading, TradeMoreInner, TradeMoreSpan } from '../../styled/TradeMoreStyle'
function ExploreMarkets() {
  return (
    <>

      <ExploreMoreContainer>
        <ExploreMarketsInnerS>
          <TradeMoreHeading width="800px" color="white">Explore the Markets</TradeMoreHeading>
          <TradeMoreHeading width="900px" color="white">
            like it is your<TradeMoreSpan> Playground.</TradeMoreSpan></TradeMoreHeading>
          <MainSubHeading>Search for your favorite coins and stay ahead of the market</MainSubHeading>
        </ExploreMarketsInnerS>
        <ExploreMarketImageCont>
          <img style={{margin:'0'}} src={ExploreTradeGraph} alt="image" />
          <img style={{marginTop:'-100px'}} src={ExploreBottomImg} alt="image" />
        </ExploreMarketImageCont>
        <NavButton>Explore Markets</NavButton>
      </ExploreMoreContainer>
    </>
  )
}

export default ExploreMarkets
