import { Form, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { authActions } from "../store";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // form needs to go here  + authentication

  const handleSubmit = async (e) => {
    e.preventDefault();
    // verify login info here
    dispatch(authActions.login());
    navigate("..");
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        method="GET"
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
        />
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
        />
        <Button>Login</Button>
      </Form>
    </>
  );
};

export default LoginPage;
