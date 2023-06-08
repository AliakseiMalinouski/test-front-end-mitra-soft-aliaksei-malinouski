import { memo } from "react";
import React from "react";
import classes from './HamburgerButton.module.css';
import { postsEvents } from "../events";

export const HamburgetButton = memo(({src, alt}) => {

    const openMenu = () => {
        postsEvents.emit('openMenu');
    }

    return (
        <img src={src} alt={alt} className={classes.HamburgerButton}
        onClick={openMenu}
        />
    )
})