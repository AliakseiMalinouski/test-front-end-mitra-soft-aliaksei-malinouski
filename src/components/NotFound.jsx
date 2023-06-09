import React, { memo } from "react";
import styles from './NotFound.module.css';

export const NotFound = memo(() => {
    return <div className={styles.NotFound}>The post with this name was not found!</div>
})