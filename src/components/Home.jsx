import React, { memo, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postsThunk } from "../Redux/Posts/postsThunk";
import { Post } from "./Post";
import classes from './Home.module.css';
import { Title } from "./Title";
import {Progress} from './Progress';

export const Home = memo(() => {

    let dispatch = useDispatch();

    const posts = useSelector(state => state.posts.posts);

    useEffect(() => {
        if(!posts.length) {
            dispatch(postsThunk);
        }
    }, [dispatch, posts]);

    let postsMemo = useMemo(() => posts && posts.map(({postId, title, data}) => <Post 
    key={postId}
    postId={postId}
    data={data}
    title={title}
    />), [posts]);

    console.log(posts)

    return (
        <div>
            <Title text='All posts' tag='h2'/>
            <div className={classes.Posts}>
                {!postsMemo.length ? <Progress/> : postsMemo}
            </div>
        </div>
    )
})