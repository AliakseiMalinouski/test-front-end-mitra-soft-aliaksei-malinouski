import React from "react";
import { memo } from "react";
import styles from './Logo.module.css';

export const Logo = memo(({src, alt}) => {
    return (
        <img src={src} alt={alt} className={styles.Logo}/>
    )
})