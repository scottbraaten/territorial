import { Outlet } from "react-router";
import TerritorialTitle from "../components/TerritorialTitle";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div>
      <TerritorialTitle />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
