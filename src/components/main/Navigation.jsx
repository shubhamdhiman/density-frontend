import React from 'react'
import { NavigationStyle, NavUl, NavInner, NavLi, NavButton } from '../../styled/NavigationStyle'
import logoColor from '../../assets/icons/logoColor.png'
function Navigation() {
    return (
        <NavigationStyle>
            <img src={logoColor} alt="density" />
            <NavInner>
                <NavUl>
                    <NavLi>Career</NavLi>
                    <NavLi>Blogs</NavLi>
                    <NavLi>LeaderBoard</NavLi>
                    <NavLi>Fees</NavLi>
                </NavUl>
                <NavButton>Trade Now</NavButton>
            </NavInner>
        </NavigationStyle>
    )
}

export default Navigation
