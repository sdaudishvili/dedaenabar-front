import axios from 'axios';
import { baseApiUrl } from '@/api/host';

const axiosRemote = axios.create({
  baseURL: baseApiUrl
});

export { axiosRemote };
