import React from 'react'
import { NavButton } from '../../../styled/MobileDesc'
import PhoneBackgroundSmall from '../../../assets/icons/phoneSection/PhoneBackgroundSmall.png'
import PhoneLeft from '../../../assets/icons/phoneSection/PhoneLeft.png'
import PhoneCenter from '../../../assets/icons/phoneSection/PhoneCenter2.png'
import PhoneRight from '../../../assets/icons/phoneSection/PhoneRight.png'
import EasyMoneyLeft from '../../../assets/icons/helper/EasyMoneyLeft.png'
import EasyMoneyCenter from '../../../assets/icons/helper/EasyMoneyCenter.png'
import EasyMoneyRight from '../../../assets/icons/helper/EasyMoneyRight.png'
function MobileDesc() {
  return (
    <div style={{padding:'8rem 0',width:'800px'}}>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div style={{position:'relative'}}>
            <img  src={PhoneBackgroundSmall} alt='img' />
            <img style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}} src={PhoneCenter} alt='img' />
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <img style={{width:'120px'}} src={EasyMoneyCenter} alt='img'/>
            <p style={{fontSize:'2rem',fontWeight:'bold',color:'white',margin:'0'}}>Create an Account</p>
            <p style={{fontSize:'1.2rem',color:'white',margin:'.5rem 0 0 0',fontWeight:'300'}}>Register & Complete your </p>
            <p style={{fontSize:'1.2rem',color:'white',marginBottom:'2rem',fontWeight:'300'}}>Verification in less than 2 minutes</p>
            <NavButton>Trade Now</NavButton>
        </div>

      </div>
      <div style={{display:'flex',justifyContent:'space-between',padding:'10rem 0'}}>
        <div style={{position:'relative'}}>
            <img  src={PhoneBackgroundSmall} alt='img' />
            <img style={{position:'absolute',top:'48%',left:'50%',transform:'translate(-50%,-50%)'}} src={PhoneLeft} alt='img' />
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <img style={{width:'120px'}} src={EasyMoneyLeft} alt='img'/>
            <p style={{fontSize:'2rem',fontWeight:'bold',color:'white',margin:'0'}}>Deposit Funds</p>
            <p style={{fontSize:'1.2rem',color:'white',margin:'.5rem 0 0 0',fontWeight:'300'}}>Add funds quickly using a variety  </p>
            <p style={{fontSize:'1.2rem',color:'white',marginBottom:'2rem',fontWeight:'300'}}>of payment methods</p>
            <NavButton>Trade Now</NavButton>
        </div>

      </div>
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div style={{position:'relative'}}>
            <img  src={PhoneBackgroundSmall} alt='img' />
            <img style={{position:'absolute',top:'48%',left:'50%',transform:'translate(-50%,-50%)'}} src={PhoneRight} alt='img' />
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <img style={{width:'120px'}} src={EasyMoneyRight} alt='img'/>
            <p style={{fontSize:'2rem',fontWeight:'bold',color:'white',margin:'0'}}>Become a Trader</p>
            <p style={{fontSize:'1.2rem',color:'white',margin:'.5rem 0 0 0',fontWeight:'300'}}>Choose Your Trading Pair & Trade</p>
            <p style={{fontSize:'1.2rem',color:'white',marginBottom:'2rem',fontWeight:'300'}}>Seamlessly</p>
            <NavButton>Trade Now</NavButton>
        </div>

      </div>
    </div>
  )
}

export default MobileDesc
