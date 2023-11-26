import styled from "styled-components";


export const MainPageStyle = styled.div`
    width:100%;
    // height:270px;
    background-color:black;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-between;
    padding-top:80px;
    padding-bottom:120px;
    display:flex;
    justify-content:center;
    `
    export const MainInnerContainer = styled.div`
    width:50%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
`
export const MainHeading = styled.p`
color: white;

text-align: center;
font-size: 96px;
font-style: normal;
font-weight: 700;
line-height: 100px; /* 104.167% */
letter-spacing: -4.19px;
min-width:830px;
`
export const MainHeadingSpan = styled.span`

// background: linear-gradient(97deg, rgba(212, 249, 56, 0.70) 47.68%, rgba(213, 250, 57, 0.70) 70.85%);
background: linear-gradient(86deg, #D4F938 23.09%, #32D875 108.69%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
// filter: blur(16px);
`
export const MainSubHeading = styled.span`


color: ${(props)=>(props.color?"black":"white")};
width: ${(props)=>(props.width?props.width:'')};
text-align: center;
font-size: 24px;
font-style: normal;
font-weight: 300;
line-height: normal;
text-transform: capitalize;
`
