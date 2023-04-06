import React from 'react';
import './Button.css';
import { Outlet, Link } from "react-router-dom";
const Button = (props) => {
    const {children}=props
    return (
        <> 
        <button  to='/contact' className='Button'> {children}</button>  
        </>
    );
};

export default Button;