import React, { useEffect, useState } from "react";
import { memo } from "react";
import { NavLink, useParams } from "react-router-dom";
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
        const getEmail = () => {
            let hashUrl = commentName;
            let hashUrlSplited = hashUrl.split('');
            let postId = [];
            let email = [];
            for(let n = 0; n < hashUrlSplited.length; n++) {
                let char = hashUrlSplited[n];
                if([1,2,3,4,5,6,7,8,9].includes(parseInt(char))) {
                    postId.push(char);
                }
                else {
                    email.push(char);
                }
            }
            return {
                postId: parseInt(postId.join('')),
                email: email.join('')
            };
        }
        let infoAboutComment = getEmail();
        const findNeededComment = () => {
            let post = posts[infoAboutComment.postId - 1];
            let data = post && post.data;
            function childFunc () {
                for(let i = 0; i < data.length; i++) {
                    let element = data[i];
                    if(element.email === infoAboutComment.email) {
                        return element;
                    }
                }
            }
            return data && childFunc();
        }
        let result = findNeededComment();
        console.log(result)
        setCurrentComment(result);
    }, [posts, commentName]);

    return (
        <div className={classes.CommentDetails}>
            {!currentComment && <Progress/>}
            {currentComment && <>
            <h3> <img src="https://i.ibb.co/xMSwWnx/man.png" alt="Avatar"/> <span>Author: {currentComment.email}</span></h3>
            <h6>Name of comment: {currentComment.name}</h6>
            <p>{currentComment.body}</p>
            </>}
            {currentComment && <NavLink to='/'>Go to Home</NavLink>}
        </div>
    )
})