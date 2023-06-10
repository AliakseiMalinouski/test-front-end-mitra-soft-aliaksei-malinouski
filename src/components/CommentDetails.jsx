import React, { useEffect, useState } from "react";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postsThunk } from "../Redux/Posts/postsThunk";
import { Progress } from "./Progress";
import classes from './CommentDetails.module.css'

export const CommentDetails = memo(() => {

    let params = useParams();
    let dispatch = useDispatch();

    let commentName = params.comment;

    const [currentComment, setCurrentComment] = useState({});

    const posts = useSelector(state => state.posts.posts);

    useEffect(() => {
        if(!posts.length) dispatch(postsThunk);
    }, [posts, dispatch]);

    useEffect(() => {
        const findNeededComment = () => {
            for(let i = 0; i < posts.length; i++) {
                let element = posts[i];
                if(element.data) {
                    let neededComment = element.data.find(comment => comment.name === commentName);
                    return neededComment;
                }
            }
        }
        let result = findNeededComment();
        setCurrentComment(result);
    }, [posts, commentName]);

    return (
        <div className={classes.CommentDetails}>
            {!currentComment && <Progress/>}
            {currentComment && <>
            <h3> <img src="https://i.ibb.co/xMSwWnx/man.png" alt="Avatar"/> <span>Author: {currentComment.email}</span></h3>
            <h6>Name of comment: </h6>
            <p>{currentComment.body}</p>
            </>}
        </div>
    )
})