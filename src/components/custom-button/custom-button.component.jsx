import React, { Children } from 'react'
import './custom-button.style.scss'

const CustomButton=({children,inverted,...otherProps})=>(

    <button className={`${inverted ? 'inverted' : ''}  ${otherProps.isGoogleSignIn?'gb':''} custom-button`} {...otherProps}>{children}

    </button>


)

export default CustomButton;


