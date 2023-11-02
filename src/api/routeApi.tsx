import axios from 'axios';
import { DataApiRoute } from '../App';

export const getAllRoute = async () => {
   return await axios.get(`./react-test1/test-json/testApi.json`)
      .then(res => res.data as DataApiRoute[])
}