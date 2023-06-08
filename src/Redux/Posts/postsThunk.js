import { setPosts } from "./postsSlice";


export const postsThunk = (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(r => r.ok ? r.json() :alert('Error'))
    .then(d => dispatch(setPosts(d)))
    .catch(e => alert(`${e}`))
}