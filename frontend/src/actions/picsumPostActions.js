import axios from 'axios';
import { FETCH_PICSUM_POST } from './types';

export const fetchPicsumPosts = () => dispatch => {
    axios.get('http://localhost:9000/images').then(res => dispatch({
        type: FETCH_PICSUM_POST,
        payload: res.data
    }));
}
