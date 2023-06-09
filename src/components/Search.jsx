import React from "react";
import { memo } from "react";
import { postsEvents } from "../events";
import classes from './Search.module.css';

export const Search = memo(() => {
    return (
        <div className={classes.Search}>
            <input type="text" placeholder="Search by title or number" maxLength={50} onChange={(eo) => {
                postsEvents.emit('searchingPost', eo.target.value);
            }}/>
        </div>
    )
})