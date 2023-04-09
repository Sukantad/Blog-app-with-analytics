import axios from "axios";

let baseurl = "http://localhost:4000";
export async function getAllPost() {
  const res = await axios.get(`${baseurl}/analytics/posts`);
  return res.data;
}

export async function createPost(data) {
  const res = await axios.post(`${baseurl}/posts`, data);
  return res.data;
}
