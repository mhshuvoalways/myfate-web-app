import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import setAuthToken from "../utils/setAuthToken";
import { Provider } from "react-redux";
import store from "../store";

const token = localStorage.getItem("token");
if (token) {
  setAuthToken(token);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
