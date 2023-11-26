import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import { TradeMoreHeading, TradeMoreInner, TradeMoreSpan } from '../../styled/TradeMoreStyle'
import {TradeMoreContainer, StartSmallContainer, StartSmallBoxes, StartSmallBox, StartSmallBoxH, StartSmallBoxSH, TradeTogetherContainer } from '../../styled/MeetVisionaryStyles'
import VisionaryLeft from '../../assets/icons/visionary/VisionaryLeft.png'
import VisionaryCenter from '../../assets/icons/visionary/VisionaryCenter.png'
import VisionaryRight from '../../assets/icons/visionary/VisionaryRIght.png'
function MeetVisionary() {
  return (
    <TradeTogetherContainer>
            <TradeMoreContainer>
                    <TradeMoreInner>
                        <TradeMoreHeading color="white">Meet the<TradeMoreSpan> Visionaries</TradeMoreSpan></TradeMoreHeading>
                        <TradeMoreHeading color="white">behind the density</TradeMoreHeading>  
                    </TradeMoreInner>
        </TradeMoreContainer>
        <StartSmallContainer>
                <StartSmallBoxes>
                    <StartSmallBox>
                        <img style={{marginBottom:"0rem",position:'absolute', bottom:'0', right:'0', height:'200px'}} src={VisionaryLeft} alt='image' />
                        
                        <StartSmallBoxH>Aakash Neeraj</StartSmallBoxH>
                        <StartSmallBoxH>Mittal</StartSmallBoxH>
                        <StartSmallBoxSH>CEO, Density</StartSmallBoxSH>
                        <FaLinkedin size={30} style={{ margin: '20px', color:'white' }} />
                    </StartSmallBox>
                    <StartSmallBox>
                        <img style={{marginBottom:"0rem",position:'absolute', bottom:'0', right:'0', height:'200px'}} src={VisionaryCenter} alt='image' />
                       
                        <StartSmallBoxH>Bhupendra</StartSmallBoxH>
                        <StartSmallBoxH>Bule</StartSmallBoxH>
                        <StartSmallBoxSH>CTO, Density</StartSmallBoxSH>
                        <FaLinkedin size={30} style={{ margin: '20px', color:'white' }} />
                    </StartSmallBox>
                    <StartSmallBox>
                        <img style={{marginBottom:"0rem",position:'absolute', bottom:'0', right:'0', height:'200px'}} src={VisionaryRight} alt='image' />
                       
                        <StartSmallBoxH>Deepak</StartSmallBoxH>
                        <StartSmallBoxH>Vasman</StartSmallBoxH>
                        <StartSmallBoxSH>CBO, Density</StartSmallBoxSH>
                        <FaLinkedin size={30} style={{ margin: '20px', color:'white' }} />
                    </StartSmallBox>
                </StartSmallBoxes>
            </StartSmallContainer>

    </TradeTogetherContainer>
  )
}

export default MeetVisionary
