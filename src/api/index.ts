import axios from "axios";

export const api = axios.create({
  baseURL: "bibli-leal-server-production.up.railway.app",
});
