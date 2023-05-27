<<<<<<< HEAD
import axios from "axios";

=======

import axios from "axios";
>>>>>>> 6030675 (add post to the main page)

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
<<<<<<< HEAD
=======
  console.log(response.data, 'res')
>>>>>>> 6030675 (add post to the main page)
  return response.data;
};

export default getPosts;

