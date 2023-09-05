import axios from "axios";

export const api = axios.create({
  baseURL: "http://bibli-leal-server-production.up.railway.app",
});
