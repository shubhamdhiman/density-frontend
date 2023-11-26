import styled from "styled-components";

export const TradeMoreContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:black;
`
export const TradeMoreHeading = styled.p`
color: ${(props)=>(props.color==="white"?"white":"black")};
text-align: center;
font-size: 72px;
font-style: normal;
font-weight: 700;
line-height: 76.882px; /* 106.78% */
letter-spacing: -2.097px;
min-width:${(props)=>(props.width?props.width:"")};
margin:0;
`
export const TradeMoreInner = styled.div`

    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
`
export const TradeMoreSpan = styled.span`
color:  #EBFF25;
font-size: 72px;
font-style: normal;
font-weight: 700;
line-height: 76.882px;
letter-spacing: -2.097px;
`
export const TradeMoreBoxContainer = styled.span`
width:100%;
background-color:black;
display:flex;
justify-content:center;
`
