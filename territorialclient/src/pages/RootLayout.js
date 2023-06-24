import { Outlet } from "react-router";
import TerritorialTitle from "../components/TerritorialTitle";

const RootLayout = () => {
  return (
    <div>
      <TerritorialTitle />
      <Outlet />
    </div>
  );
};

export default RootLayout;
