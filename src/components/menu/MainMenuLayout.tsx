import { Outlet } from "react-router-dom";
import MainMenu from "./MainMenu";

export default function MainMenuLayout() {
  return (
    <>
      <MainMenu outlet={<Outlet />} />
    </>
  );
}
