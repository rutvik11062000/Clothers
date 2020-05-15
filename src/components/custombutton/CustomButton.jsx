import './CustomButtonStyles.scss'

import React from 'react'

export const CustomButton = ({children ,isGoogleSignIn,...otherProps}) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps }>
            {children}
        </button>
    )
}
