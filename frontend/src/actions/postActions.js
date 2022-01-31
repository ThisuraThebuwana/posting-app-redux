import { FETCH_POSTS, NEW_POST, DELETE_POST, DISLIKE_POST, LIKE_POST } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
        axios.get('http://localhost:9000/posts').then(res => dispatch({
        type: FETCH_POSTS,
        payload: res.data.reverse()
    }));
}

export const createPost = (postData) => dispatch => {
    axios.post('http://localhost:9000/posts', postData).then(res => dispatch({
        type: NEW_POST,
        payload: res.data
    }));
}

export const deletePost = (id) => dispatch => {
    axios.delete(`http://localhost:9000/posts/${id}`).then(() => dispatch({
        type: DELETE_POST,
        payload: id
    }));
}

export const likePost = (id, likes) => dispatch => {
    axios.patch(`http://localhost:9000/posts/increment-likes/${id}`, {likes}).then(res => dispatch({
        type: LIKE_POST,
        payload: res.data
    }));
}

export const dislikePost = (id, dislikes) => dispatch => {
    axios.patch(`http://localhost:9000/posts/increment-dislikes/${id}`, {dislikes}).then(res => dispatch({
        type: DISLIKE_POST,
        payload: res.data
    }));
}