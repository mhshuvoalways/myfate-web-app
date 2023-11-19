import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginCompo from "../../components/Auth/Login";
import Notify from "../../components/Notify";
import Loading from "../../components/Loading";

const Login = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
      <Notify />
      <Loading />
      <LoginCompo />
    </GoogleOAuthProvider>
  );
};

export default Login;
