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
            <img className={classes.Clear} src="https://i.ibb.co/d00c6LW/cross.png" alt="Clear search"
            onClick={() => {
                postsEvents.emit('clearSearch')
            }}
            />
        </div>
    )
})