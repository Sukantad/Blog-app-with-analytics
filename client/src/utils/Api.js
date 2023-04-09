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

export async function getuserAnalytics(){
  const res = await axios.get(`${baseurl}/analytics/users/top-active`);
  return res.data;

}

export async function getPostAnalytics(){
  const res = await axios.get(`${baseurl}/analytics/posts/top-liked`);
  return res.data;
}

export async function GetUserList(){
  const res = await axios.get(`${baseurl}/analytics/users`);
  return res.data;

}
export async function GetPostList(){
  const res = await axios.get(`${baseurl}/analytics/posts`);
  return res.data;

}

export async function UserUpdate(id,data){
  const res = await axios.put(`${baseurl}/users/${id}`,data);
  return res.data;

}

export async function SingleUserDelete(id){
  const res = await axios.delete(`${baseurl}/users/${id}`);
  return res.data;

}

export async function PostUpdate(id,data){
  const res = await axios.put(`${baseurl}/posts/${id}`,data);
  return res.data;

}
export async function SinglePostDelete(id){
  const res = await axios.delete(`${baseurl}/posts/${id}`);
  return res.data;

}

export async function addLike(id){
  const res = await axios.put(`${baseurl}/posts/${id}/like`);
  return res.data;

}
export async function disLike(id){
  const res = await axios.put(`${baseurl}/posts/${id}/unlike`);
  return res.data;

}