import { setPosts } from "./postsSlice";


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
          acc[postId] = { postId, data: [rest] };
        }
  
        return acc;
      }, {});
      dispatch(setPosts(Object.values(sortedObjects)));
    } 
    catch (error) {
      console.log(error)
      return [];
    }
  }