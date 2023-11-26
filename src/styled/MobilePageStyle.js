import styled from "styled-components";

export const MobilePageS = styled.div`
    width:100%;
    padding:4rem 0;
    height:1000px;
    position:relative;
   
`
export const RadialGradientContainer = styled.div`
  width: 800px;
  height: 700px; /* Adjust the height as needed */
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  z-index:2;
  border-radius:50%;
  background: radial-gradient(circle, rgba(212, 249, 56, 0.7) 0%, rgba(50, 216, 117, 0.7) 100%);
  filter:blur(50px);
`;
export const MobilePageSingleCont = styled.div`
    position:absolute;
    top:50%;
    left:${(props)=>(props.left?props.left:props.center?'50%':"")};
    right:${(props)=>(props.right?props.right:"")};
    transform:translate(-50%,-50%);
    z-index:${(props)=>(props.zIndex?props.zIndex:"")}
`
