import React from 'react'
import { NavigationStyle, NavUl, NavInner, NavLi, NavButton } from '../../styled/NavigationStyle'
import logoColor from '../../assets/icons/logoColor.png'
function Navigation() {
    return (
        <NavigationStyle>
            <div style={{width:'80%', display:'flex',justifyContent:'space-between'}}>
            <img style={{height:'30px'}} src={logoColor} alt="density" />
            <NavInner>
                <NavUl>
                    <NavLi>Career</NavLi>
                    <NavLi>Blogs</NavLi>
                    <NavLi>LeaderBoard</NavLi>
                    <NavLi>Fees</NavLi>
                </NavUl>
                <NavButton>Trade Now</NavButton>
            </NavInner>
            </div>
        </NavigationStyle>
    )
}

export default Navigation
