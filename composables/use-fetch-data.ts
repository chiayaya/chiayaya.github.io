export const useFetchData = async (url: string) => {
    try {
      const response: any = await $fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };