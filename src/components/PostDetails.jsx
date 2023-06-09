import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postsThunk } from "../Redux/Posts/postsThunk";
import { updatePost } from "../Redux/Posts/currentPostDetailsSlice";
import { Progress } from "./Progress";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import classes from './PostDetails.module.css';
import Button from "react-bootstrap/esm/Button";
import { applicationAnimationConfig } from "../framer motion/variants";
import { useNavigate } from "react-router-dom";

export const PostDetails = memo(() => {

    let params = useParams();
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let postId = params.postid;

    const posts = useSelector(state => state.posts.posts);
    const currentPost = useSelector(state => state.currentPostDetails.currentPost);

    const [commentsState, setCommentsState] = useState(false);

    useEffect(() => {
        if(!posts.length) dispatch(postsThunk);
    }, [dispatch, posts]);

    useEffect(() => {
        if(currentPost === undefined || currentPost === {} || currentPost === null || currentPost.postId !== postId) {
            let currentPost = posts && posts.find(elem => elem.postId === parseInt(postId));
            dispatch(updatePost(currentPost));
        }
    }, [posts, currentPost, postId, dispatch]);

    const goToDetailsUser = (user) => {
        const uri = '/details/commentdetails/' + postId + user;
        navigate(uri);
    }

    return (
        <div className={classes.PostDetails}>
            {!currentPost ? <Progress/> : <div>
                <h3>{currentPost.title}</h3>
                <h5 onClick={() => {
                    setCommentsState(prev => !prev)
                }}>{!commentsState ? <Button variant="primary">
                    Show comments to this post
                </Button> : 'Comments of post(tap to close):'}</h5>
                <AnimatePresence>
                {
                    commentsState && <ul>
                    {
                        currentPost.data && currentPost.data.map((elem, index) => <motion.li key={elem.id} custom={index}
                        variants={applicationAnimationConfig.comments}
                        initial={'hidden'}
                        animate={'visible'}
                        >
                            <img style={{cursor: 'pointer'}} src='https://i.ibb.co/xMSwWnx/man.png' alt="Avatar" onClick={() => goToDetailsUser(elem.email)}/>
                            <div>
                                <span>Author's name: {elem.name}</span>
                                <span>Author's email: {elem.email}</span>
                            </div>
                        </motion.li>)
                    }
                    <h4>Click on User's avatar to check his/her comment</h4>   
                </ul> 
                }</AnimatePresence>
            </div>}
        </div>
    )
})