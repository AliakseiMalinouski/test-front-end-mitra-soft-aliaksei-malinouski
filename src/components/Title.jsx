import React, { memo } from "react";
import styles from './Title.module.css';

export const Title = memo(({tag, text}) => {

    let Tag = tag || 'h2';

    return (
        <div className={styles.Title}>
            <Tag>
                {text}
            </Tag>
        </div>
    )
})