import { GoogleOAuthProvider } from "@react-oauth/google";
import SignupComponent from "@/components/Auth/SignUp";

const Signup = () => {
  return (
    <GoogleOAuthProvider clientId="228609618632-h20glb9q3975ejlptkketud2t67oa8tv.apps.googleusercontent.com">
      <SignupComponent />
    </GoogleOAuthProvider>
  );
};

export default Signup;
