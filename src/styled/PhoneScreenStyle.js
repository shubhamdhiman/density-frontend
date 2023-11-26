import styled from "styled-components";

export const PhoneScreenS = styled.div`
    background-color:black;
    position:relative;
`
export const PhoneScreenInner = styled.div`
    background-color:black;
    display: flex;
    justify-content: center;
    padding-top: 60px;
    padding-bottom: ${(props)=>(props.bottom?props.bottom:"")}
`
export const PhoneScreenContent = styled.div`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%)
// display:flex;
// flex-direction:column;
// align-items:center;
`
export const PhoneScreenText = styled.p`
color:white;
font-size:30px;
width:190px;
font-weight:400;
margin:0;
text-align:center;
`
