import React, { memo, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postsThunk } from "../Redux/Posts/postsThunk";
import { Post } from "./Post";
import classes from './Home.module.css';

export const Home = memo(() => {

    let dispatch = useDispatch();

    const posts = useSelector(state => state.posts.posts);

    useEffect(() => {
        if(!posts.length) {
            dispatch(postsThunk);
        }
    }, [dispatch, posts]);

    let postsMemo = useMemo(() => posts && posts.map(({id, name, email, body}) => <Post 
    key={id}
    name={name}
    email={email}
    body={body}
    />), [posts]);

    return (
        <div className={classes.Posts}>
            {postsMemo}
        </div>
    )
})