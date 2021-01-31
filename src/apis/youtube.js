import axios from "axios";

const KEY = "AIzaSyClkdrfSdq4Fg3UvxwPvOvmtRlS1YEmJTQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY,
    type: "video",
  },
});
