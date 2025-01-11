import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthState } from "@/store/types";

const Home = () => {
	const navigate = useNavigate();
  const auth = useSelector((state: { auth: AuthState }) => state.auth.isSignIn);

	// サインインしていない場合はサインインページにリダイレクト
  useEffect(() => {
    if (!auth) {
      navigate("/signin");
    }
  }, [auth, navigate]);
	

  return (
		<>
			Hello!
		</>
  );
};

export default Home;
