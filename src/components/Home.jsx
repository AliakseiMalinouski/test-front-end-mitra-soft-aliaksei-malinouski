import React, { memo, useCallback, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postsThunk } from "../Redux/Posts/postsThunk";
import { Post } from "./Post";
import classes from './Home.module.css';
import { Title } from "./Title";
import {Progress} from './Progress';
import { Search } from "./Search";
import { postsEvents } from "../events";
import { useState } from "react";
import { NotFound } from "./NotFound";
import { useNavigate } from "react-router-dom";

export const Home = memo(() => {

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const posts = useSelector(state => state.posts.posts);

    const [search, setSearch] = useState('');

    useEffect(() => {
        if(!posts.length) {
            dispatch(postsThunk);
        }
    }, [dispatch, posts]);

    const goToPostDetails = useCallback((postId) => {
        const uri = '/details/' + postId;
        navigate(uri);
    }, [navigate]);

    useEffect(() => {
        postsEvents.addListener('searchingPost', searchingPostHome);
        postsEvents.addListener('goToPostDetails', goToPostDetails);
        return () => {
            postsEvents.removeListener('searchingPost', searchingPostHome);
            postsEvents.removeListener('goToPostDetails', goToPostDetails);
        }
    }, [goToPostDetails]);

    const searchingPostHome = (value) => setSearch(value);

    let postsMemo = useMemo(() => posts && 
    posts.filter(elem => elem.title.toLowerCase().includes(search.toLowerCase())).map(({postId, title, data}) => <Post 
    key={postId}
    postId={postId}
    data={data}
    title={title}
    />), [posts, search]);

    return (
        <div>
            <Title text='All posts' tag='h2'/>
            <Search/>
            <div className={classes.Posts} style={{
                justifyContent: postsMemo.length < 5 ? 'flex-start' : 'space-evenly'
            }}>
                {!postsMemo.length && !search ?  <Progress/> : null}
                {postsMemo.length !== 0 ? postsMemo : null}
                {!postsMemo.length && search.length ? <NotFound/> : postsMemo}
            </div>
        </div>
    )
})