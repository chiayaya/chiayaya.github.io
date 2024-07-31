
import axios from 'axios';

export const getBrands = async () => {
  // const version = 1;
  // const brandId = 1;
  // const memberId = 1;
  // const response = await axios.get(`/api/$v{version}/affiliate/brands/${brandId}?memberId=${memberId}`);
  const response = await axios.get('/api/brand-details');
  const data = response.data;
  console.log(data);
  return data;
};