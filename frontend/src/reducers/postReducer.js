import { FETCH_POSTS, NEW_POST, DELETE_POST, LIKE_POST, DISLIKE_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        case DELETE_POST:
            return {
                ...state,
                items: state.items.filter(post =>
                    post._id !== action.payload
                )
            }
        case LIKE_POST:
            return {
                ...state,
                item: action.payload,
                items: state.items.map(
                    (post) => post._id === action.payload._id ? {...post, likes: action.payload.likes}
                                            : post
                )
            }
        case DISLIKE_POST:
            return {
                ...state,
                item: action.payload,
                items: state.items.map(
                    (post) => post._id === action.payload._id ? {...post, dislikes: action.payload.dislikes}
                                            : post
                )
            }
        default: return state;
    }
}