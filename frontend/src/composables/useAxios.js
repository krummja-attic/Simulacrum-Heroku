import { inject } from 'vue';

export const useAxios = () => {
  const axios = inject('axios');
  
  return () => {
    axios({
      method: 'get',
      url: 'http://localhost:5000/api',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
  }
}
