import { ModeToggle } from "../mode-toggle";
import * as style from "./styles.css";

const Header = () => {
	return (
		<div className={style.header}>
			<h1>TODO APP</h1>
			<ModeToggle />
		</div>
	);
};

export default Header;
