import { useEffect, useState } from "react";

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const customerResponse = await fetch(
        "http://localhost:8080/customerapi/customer",
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setCustomers(await customerResponse.json());

      const orderResponse = await fetch(
        "http://localhost:8080/orderapi/order",
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setOrders(await orderResponse.json());
    };
    loadData();
  }, []);

  return (
    <>
      <h2>Customers</h2>
      <ul>
        {customers.map((cust) => (
          <li key={"cust" + cust.id}>{cust.name}</li>
        ))}
      </ul>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => {
          let formatting_options = {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          };
          let dollarString = new Intl.NumberFormat("en-US", formatting_options);

          return (
            <li key={"order" + order.orderID}>
              Customer:{" "}
              {customers.find((cust) => cust.id === order.customerID).name}{" "}
              Type: "{order.landscapeType}" Length: {order.yardLength} Width:{" "}
              {order.yardWidth} Total Cost:{" "}
              {dollarString.format(order.landscapeCost)}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CustomersPage;
