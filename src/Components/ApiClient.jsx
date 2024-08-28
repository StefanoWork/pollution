import axios from "axios";

export function getApiData(url) {
  return axios.get(url).then((res) => res.data);
}
