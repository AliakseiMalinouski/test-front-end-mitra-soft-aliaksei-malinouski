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
import { useNavigate, useParams } from "react-router-dom";
import { setPagination } from "../Redux/Pagination/paginationSlice";
import { createPaginationHash } from "../helpers/createPaginationHash";

export const PagPost = () => {

    let params = useParams();
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let page = params.page;

    const posts = useSelector(state => state.posts.posts);
    const pagination = useSelector(state => state.pagination.pagination);

    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState([]);

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
        let pagination = posts && createPaginationHash(posts);
        dispatch(setPagination(pagination));
    }, [posts, dispatch]);

    useEffect(() => {
        postsEvents.addListener('searchingPost', searchingPostHome);
        postsEvents.addListener('goToPostDetails', goToPostDetails);
        return () => {
            postsEvents.removeListener('searchingPost', searchingPostHome);
            postsEvents.removeListener('goToPostDetails', goToPostDetails);
        }
    }, [goToPostDetails]);

    useEffect(() => {
        const connectPagination = () => {
            let neededPage = [];
            for(let pageKey in pagination) {
                console.log(page)
                if(page === undefined) {
                    neededPage.push(pagination['page1']);
                }
                else if(page === pageKey) {
                    neededPage.push(pagination[pageKey]);
                }
            }
            return neededPage[0];
        }
        setCurrentPage(connectPagination())
    }, [pagination, page]);

    const searchingPostHome = (value) => setSearch(value);

    let postsMemo = useMemo(() => currentPage && 
    currentPage.filter(elem => elem.title.toLowerCase().includes(search.toLowerCase())).map(({postId, title, data}) => <Post 
    key={postId}
    postId={postId}
    data={data}
    title={title}
    />), [currentPage, search]);


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
}