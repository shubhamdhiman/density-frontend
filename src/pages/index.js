import * as React from "react"
import Seo from "../components/seo"
import Navigation from "../components/main/Navigation"
import MainPage from "../components/main/MainPage"
import NumbersAchieved from "../components/main/helperComponents/NumbersAchieved"
import PhoneScreenFeatureDesc from "../components/main/PhoneScreenFeatureDesc"
import TradeMore from "../components/main/TradeMore"
import ExploreMarkets from "../components/main/ExploreMarkets"
import UnlockFrontier from "../components/main/UnlockFrontier"
import NumbersAchievedUnlockFrontier from "../components/main/helperComponents/NumbersAchievedUnlockFrontier"
import StartSmall from "../components/main/StartSmall"
import DerivativesSteps from "../components/main/DerivativesSteps"
import DontTake from "../components/main/DontTake"
import EasyMoney from "../components/main/EasyMoney"
import TradeTogether from "../components/main/TradeTogether"
import MeetVisionary from "../components/main/MeetVisionary"
import GetStarted from "../components/main/GetStarted"
import Footer from "../components/main/Footer"
import helperIcon1 from '../assets/icons/helper/helperIcon1.png'
import helperIcon2 from '../assets/icons/helper/helperIcon2.png'
import helperIcon3 from '../assets/icons/helper/helperIcon3.png'
const IndexPage = () => {
  return (
    <>
      <Navigation />
      <MainPage />
      <NumbersAchieved />
      <PhoneScreenFeatureDesc bottom="60px" helper={helperIcon1} text="One App. Endless Possibilities"/>
      <PhoneScreenFeatureDesc bottom="60px" helper={helperIcon2} text="Future of Derivative Trading."/>
      <PhoneScreenFeatureDesc bottom="220px" helper={helperIcon3} text="Is now here, for you,"/>
      <TradeMore />
      <ExploreMarkets />
      <UnlockFrontier />
      {/* <NumbersAchievedUnlockFrontier /> */}
      <StartSmall />
      <DerivativesSteps />
      <DontTake />
      <EasyMoney />
      <TradeTogether />
      <MeetVisionary />
      <GetStarted />
      <Footer />
    </>
  )
}


export const Head = () => <Seo title="Density" />

export default IndexPage
