import React from 'react'
import { DontTakeContainer, StartSmallContainer } from '../../styled/DontTakeStyle'
import {  TradeMoreHeading, TradeMoreInner } from '../../styled/TradeMoreStyle'
import { StartSmallBoxes, StartSmallBox, StartSmallBoxH, StartSmallBoxSH, StartSmallBoxDesc } from '../../styled/DontTakeStyle'
import { MainSubHeading } from '../../styled/MainPageStyle'
import FounderLeft from '../../assets/icons/founders/FounderLeft.png'
import FounderCenter from '../../assets/icons/founders/FounderCenter.png'
import FounderRight from '../../assets/icons/founders/FounderRight.png'
function DontTake() {
    return (
        <DontTakeContainer>
            <TradeMoreInner>
                <TradeMoreHeading width="900px" color="black" >Don’t take our word for it.</TradeMoreHeading>
                <MainSubHeading width="650px" color="black">Hear it from our expert community of traders who have made insane amounts in a short amount of time</MainSubHeading>
            </TradeMoreInner>
            <StartSmallContainer>
                <StartSmallBoxes>
                    <StartSmallBox>
                        <img style={{marginBottom:"0rem",position:'absolute', bottom:'0', right:'0', height:'200px'}} src={FounderLeft} alt='image' />
                        <StartSmallBoxDesc>As someone who's always looking for the next big thing to try out Density's crypto futures trading platform. And I have to say, it definitely lived up to my exprectations.</StartSmallBoxDesc>
                        <StartSmallBoxH>Prakash</StartSmallBoxH>
                        <StartSmallBoxH>Jamatia.</StartSmallBoxH>
                        <StartSmallBoxSH>Founder, TradeShala</StartSmallBoxSH>
                    </StartSmallBox>
                    <StartSmallBox>
                        <img style={{marginBottom:"0rem",position:'absolute', bottom:'0', right:'0', height:'200px'}} src={FounderCenter} alt='image' />
                        <StartSmallBoxDesc>I'm not a seasoned trader, but this website has made it easy for me to get started with crypto futures trading. Their KYC was very fast and the educational resources were really helpful.</StartSmallBoxDesc>
                        <StartSmallBoxH>Sambhavi</StartSmallBoxH>
                        <StartSmallBoxH>Nayak.</StartSmallBoxH>
                        <StartSmallBoxSH>Commodity Trader</StartSmallBoxSH>
                    </StartSmallBox>
                    <StartSmallBox>
                        <img style={{marginBottom:"0rem",position:'absolute', bottom:'0', right:'0', height:'200px'}} src={FounderRight} alt='image' />
                        <StartSmallBoxDesc>I've been using this platform for a few months now and it's been a great experience. I was delighted to see all the major crypto coins listed on Density Exchange.</StartSmallBoxDesc>
                        <StartSmallBoxH>Arjun</StartSmallBoxH>
                        <StartSmallBoxH>Naik.</StartSmallBoxH>
                        <StartSmallBoxSH>Equity Trader</StartSmallBoxSH>
                    </StartSmallBox>
                </StartSmallBoxes>
            </StartSmallContainer>
        </DontTakeContainer>
    )
}

export default DontTake
