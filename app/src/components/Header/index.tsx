import { ModeToggle } from "../mode-toggle";
import { Button } from "@/components/ui/button";
import * as style from "./styles.css";
import { signOut } from "@/services/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthState } from "@/store/types";

const Header = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const auth = useSelector((state: { auth: AuthState }) => state.auth.isSignIn);
	
  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/");
  };

	const handleSignIn = () => {
		navigate("/signin");
	}

	return (
		<div className={style.header}>
			<h1>TODO APP</h1>
			<ModeToggle />
			{auth ? 
			<Button onClick={handleSignOut}>サインアウト</Button>
			: 
			<Button onClick={handleSignIn}>サインイン</Button> 
			}

		</div>
	);
};

export default Header;
