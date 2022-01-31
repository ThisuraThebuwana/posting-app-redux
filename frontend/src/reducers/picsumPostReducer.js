import { FETCH_PICSUM_POST } from '../actions/types';

const initialState = {
    items: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PICSUM_POST:
            return {
                ...state,
                items: action.payload
            }
        default: return state;
    }
}