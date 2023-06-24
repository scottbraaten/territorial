import { Outlet } from "react-router";

import Button from "../ui/Button";
import { Link } from "react-router-dom";

const SubmitLayout = () => {
  // here we're checking to see if the user is logged in.

  return (
    <div>
      <Link to="..">
        <Button>back</Button>
      </Link>
      <Outlet />
    </div>
  );
};

export default SubmitLayout;
