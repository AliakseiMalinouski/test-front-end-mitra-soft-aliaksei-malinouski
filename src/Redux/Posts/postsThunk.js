import { setPosts } from "./postsSlice";
import { generateRandomTitleForPost } from "../../helpers/generateRandomString";

export const postsThunk = async(dispatch) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const comments = await response.json();

      const sortedObjects = comments.reduce((acc, obj) => {
        const { postId, ...rest } = obj;
  
        if (acc.hasOwnProperty(postId)) {
          if (Array.isArray(acc[postId].data)) {
            acc[postId].data.push(rest);
          } else {
            acc[postId].data = [rest];
          }
        } else {
          acc[postId] = { postId, title: `Title post number ${postId}` , data: [rest] };
        }
        return acc;
      }, {});
      setTimeout(() => {
        dispatch(setPosts(Object.values(sortedObjects)));
      }, 1000);
    } 
    catch (error) {
      console.log(error)
      return [];
    }
  }