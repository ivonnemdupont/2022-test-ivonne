import axios from "axios";

const loadData = async (url) => {
  try {

    //const baseURL= 'https://swapi.dev/api/'

    const response = await axios.get(url);
    const result = await response.data;

    //console.log(result)

    return result;
  } catch (error) {
    console.log(error);
  }
};

export default loadData;
