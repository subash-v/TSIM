import { API_URL_ROOT } from "./constant.js";
import axios from "axios";

export async function post(path, postData) {
  const url = `${API_URL_ROOT}/${path}`;
  return await axios.post(url, postData);
}
export async function get(url) {
  const url = `${API_URL_ROOT}/${url}`;
  return await axios.get(url);
}
