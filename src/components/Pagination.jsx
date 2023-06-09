import React, { memo } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postsThunk } from "../Redux/Posts/postsThunk";
import { createPaginationHash } from "../helpers/createPaginationHash";
import { setPagination } from "../Redux/Pagination/paginationSlice";
import { useNavigate } from "react-router-dom";

export const Pagination = memo(() => {

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const posts = useSelector(state => state.posts.posts);
    const pagination = useSelector(state => state.pagination.pagination);

    useEffect(() => {
        if(!posts.length) {
            dispatch(postsThunk);
        }
    }, [dispatch, posts]);

    useEffect(() => {
        let pagination = posts && createPaginationHash(posts);
        dispatch(setPagination(pagination));
    }, [posts, dispatch]);

    const generateUIPaganation = () => {
        let list = [];
        for(let key in pagination) {
            list.push(key);
        }
        return list;
    }

    return (
        <ul className="Pagination">
            {
                generateUIPaganation().map(elem => <li key={elem} onClick={() => {
                    navigate('/home/' + elem);
                }}>{elem}</li>)
            }
        </ul>
    )
})