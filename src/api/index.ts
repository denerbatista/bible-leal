import axios from "axios";

export const api = axios.create({
  baseURL: "https://bibli-leal-server-production.up.railway.app/",
});
