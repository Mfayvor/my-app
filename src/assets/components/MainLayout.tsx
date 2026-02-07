import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function MainLayout() {
  return (
    <>
      <Outlet />
      <Nav />
    </>
  );
}

export default MainLayout;
