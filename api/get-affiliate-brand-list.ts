
import axios from 'axios';
import { useRuntimeConfig } from '#app';

export const getBrands = async () => {
  // const version = 1;
  // const response = await axios.get(`/api/v${version}/affiliate/brands`);

  // Mocked getBrands function
  // const getBrands = () => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve({
  //         returnCode: "0000",
  //         message: "Successful",
  //         data: [
  //           {
  //             Id: 1,
  //             Name: "Klook",
  //             Logo: "",
  //             CommissionValue: 4.5,
  //             CommissionType: 1,
  //           },
  //           {
  //             Id: 2,
  //             Name: "Expedia",
  //             Logo: "",
  //             CommissionValue: 3.0,
  //             CommissionType: 1,
  //           },
  //         ],
  //       });
  //     }, 1000);
  //   });
  // };


  const api_url = useRuntimeConfig().public.apiBase;
  console.log('api:', api_url);
  const response = await axios.get(`${api_url}/api/brands`);
  const data = response.data;
  console.log(data);
  return data;
};

