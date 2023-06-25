import { useSelector } from "react-redux";
import { Form, redirect } from "react-router-dom";
import Button from "../ui/Button";
import { useState } from "react";

const SubmitPage = () => {
  // const isAuth = useSelector((state) => state.auth.isAuth);
  const landtype = useSelector((state) => state.landtype.landtype);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  const handleCalcClick = (e) => {
    setClicked(true);
    switch (landtype) {
      case "foliage":
        setTotalCost(length * width * 10);
        break;
      case "grass":
        setTotalCost(length * width * 5);
        break;
      case "gravel":
        setTotalCost(length * width * 2);
        break;
      default:
        setTotalCost(length * width);
        break;
    }
  };

  const placeOrder = async () => {
    console.log("here");

    const customerResponse = await fetch(
      "http://localhost:8080/customerapi/customer",
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          address,
        }),
      }
    );

    const custData = await customerResponse.json();

    const orderResponse = await fetch("http://localhost:8080/orderapi/order", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerID: custData.id,
        landscapeType: landtype,
        yardLength: length,
        yardWidth: width,
        landscapeCost: totalCost,
      }),
    });

    const orderData = await orderResponse.json();
  };

  // get user
  return (
    <>
      <h2>
        Fill out this information so that you can get your landscape order
        placed!
      </h2>
      <div id="leftside">
        <Form>
          <h2>Personal Info</h2>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            onChange={handleNameChange}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            onChange={handleEmailChange}
          />
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            name="address"
            required
            onChange={handleAddressChange}
          />
          <h2>Yard Info</h2>
          <label htmlFor="length">Length</label>
          <input
            id="length"
            type="number"
            name="length"
            required
            onChange={handleLengthChange}
          />
          <label htmlFor="width">Width</label>
          <input
            id="width"
            type="number"
            name="width"
            required
            onChange={handleWidthChange}
          />
          <Button onClick={handleCalcClick}>Calculate</Button>
        </Form>
      </div>
      <div id="rightside">
        {clicked ? (
          <div>
            <p>{name}</p>
            <p>{address}</p>
            <p>Type: {landtype}</p>
            <p>Width: {width}</p>
            <p>Length: {length}</p>
            <p>Total Cost: {totalCost}</p>
            <Button onClick={placeOrder}>Place Order!</Button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SubmitPage;
