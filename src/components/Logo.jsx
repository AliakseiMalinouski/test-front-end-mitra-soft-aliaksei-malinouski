import React from "react";
import { memo } from "react";
import styles from './Logo.module.css';
import { useNavigate } from "react-router-dom";

export const Logo = memo(({src, alt}) => {

    let navigate = useNavigate();

    return (
        <img src={src} alt={alt} className={styles.Logo} onClick={() => navigate('/')}/>
    )
})