import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { selectLoginStatus } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";
import { useSelector } from "react-redux";
export default function AppBar() {
  const isLoggedIn = useSelector(selectLoginStatus);
  return (
    <header className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <Navigation></Navigation>
      {isLoggedIn ? <UserMenu></UserMenu> : <AuthNav></AuthNav>}
    </header>
  );
}
