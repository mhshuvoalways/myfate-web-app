import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_CLIENT_PANEL_BACKEND_URL,
});

export default instance;
