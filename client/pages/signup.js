import { GoogleOAuthProvider } from "@react-oauth/google";
import SignupComponent from "@/components/Auth/SignUp";

const Signup = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.CLIENT_ID}>
      <SignupComponent />
    </GoogleOAuthProvider>
  );
};

export default Signup;
