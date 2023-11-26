import styled from "styled-components";

export const NumbersAchievedS = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    background-color:black;
    padding-bottom:4rem;
`

export const NumbersAchievedInner = styled.div`
    width:80%;
    height:170px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border: 1.5px solid rgba(50, 216, 117, 0.96);
background: rgba(0, 0, 0, 0.05);
// box-shadow: 0px 0px 10px 0px rgba(235, 255, 37, 0.20);
box-shadow:0px 0px 16px 0px rgba(168, 239, 156, 0.80);
backdrop-filter: blur(26.25px);
`
export const NumbersAchievedbox = styled.div`
    width:22%;
    height:100%;
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 4px;
flex: 1 0 0;

`
export const NumbersAchievedhead = styled.p`
color: #EBFF25;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin:0;

`
export const NumbersAchievedsubhead = styled.p`
color: #A9A9A9;

font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 26px; 
margin:0;

`