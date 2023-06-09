import React from "react";
import { memo } from "react";
import { postsEvents } from "../events";
import classes from './Search.module.css';

export const Search = memo(() => {
    return (
        <input className={classes.Search} type="text" maxLength={50} onChange={(eo) => {
            postsEvents.emit('searchingPost', eo.target.value);
        }}/>
    )
})