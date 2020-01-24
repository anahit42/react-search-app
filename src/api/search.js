import axios from 'axios';

import { searchApi } from '../config';

export default axios.create({
    baseURL: searchApi.baseURL,
});