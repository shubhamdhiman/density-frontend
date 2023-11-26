import styled from "styled-components";

export const TradeMoreHelperBoxS = styled.div`
    width:350px;
    height:438px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    background:${(props)=>(props.background?'linear-gradient(180deg, #D4F938 23.09%, #32D875 108.69%)':'#141414')};
    // background:linear-gradient(180deg, #D4F938 23.09%, #32D875 108.69%);
    margin:10rem 20px;
    box-shadow:${(props)=>(props.background?'0px 0px 16px 0px rgba(168, 239, 156, 0.80)':'')}
`
export const TradeMoreHelperBoxText = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const TradeMoreHelperBoxTextH = styled.p`
color: ${(props)=>(props.text?"black":"white")};

font-size: 44px;
font-style: normal;
font-weight: 700;
line-height: 50.625px; /* 158.203% */
letter-spacing: -1.687px;
margin:0;
`
export const TradeMoreHelperBoxTextSH = styled.p`
color: ${(props)=>(props.text?"black":"white")};

font-size: 25px;
font-style: normal;
font-weight: 300;
line-height: normal;
// letter-spacing: -1.687px;
`