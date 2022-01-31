import axios from 'axios';
import { FETCH_CONTACTS } from './types';

export const fetchContacts = () => dispatch => {
    axios.get('http://localhost:9000/contacts').then(res => dispatch({
        type: FETCH_CONTACTS,
        payload: res.data
    }));
}
