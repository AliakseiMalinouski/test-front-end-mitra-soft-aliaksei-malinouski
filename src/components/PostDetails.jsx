import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postsThunk } from "../Redux/Posts/postsThunk";
import { updatePost } from "../Redux/Posts/currentPostDetailsSlice";
import { Progress } from "./Progress";

export const PostDetails = memo(() => {

    let params = useParams();
    let dispatch = useDispatch();

    let postId = params.postid;

    const posts = useSelector(state => state.posts.posts);
    const currentPost = useSelector(state => state.currentPostDetails.currentPost);

    useEffect(() => {
        if(!posts.length) dispatch(postsThunk);
    }, [dispatch, posts]);

    useEffect(() => {
        if(currentPost === undefined || currentPost === {} || currentPost === null || currentPost.postId !== postId) {
            let currentPost = posts && posts.find(elem => elem.postId === parseInt(postId));
            dispatch(updatePost(currentPost));
        }
    }, [posts, currentPost, postId, dispatch]);


    return (
        <div>
            {!currentPost ? <Progress/> : currentPost.title}
        </div>
    )
})