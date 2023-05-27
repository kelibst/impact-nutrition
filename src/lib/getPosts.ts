import axios from "axios";


const getPosts = async () => {
  let headersList = {
    "Accept": "*/*",
  }

  let reqOptions = {
    url: "http://localhost:3000/api/blog",
    method: "GET",
    headers: headersList,
  }

  let response = await axios.request(reqOptions);

  console.log(response.data, 'res')
  return response.data;
};

export default getPosts;

