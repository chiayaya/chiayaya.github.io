
import axios from 'axios';

export const getBrands = async () => {
  // const version = 1;
  // const memberId = 1;
  // const response = await axios.get(`/api/v${version}/affiliate/members/${memberId}/orders`);
  const response = await axios.get('/api/orders');
  const data = response.data;
  console.log(data);
  return data;
};