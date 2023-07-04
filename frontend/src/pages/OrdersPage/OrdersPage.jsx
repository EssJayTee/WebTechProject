import { useState, useEffect } from "react";

import { MainNav } from "@/components/MainNav";

import { UserNav } from "./components/UserNav";
import { navigationLinks } from "../../config/navigationLinks";

export const OrdersPage = () => {
  const [ordersInfo, setOrdersInfo] = useState([]);
  const [productsInfo, setProductsInfo] = useState([]);
  const [customersInfo, setCustomersInfo] = useState([]);

  const fetchOrdersInfo = () => {
    fetch("http://127.0.0.1:8000/orders")
      .then((res) => res.json())
      .then((info) => {
        console.log(info);
        setOrdersInfo(info);
      });
  };

  const fetchProductsInfo = () => {
    fetch("http://127.0.0.1:8000/products")
      .then((res) => res.json())
      .then((info) => {
        console.log(info);
        setProductsInfo(info);
      });
  };

  const fetchCustomersInfo = () => {
    fetch("http://127.0.0.1:8000/customers")
      .then((res) => res.json())
      .then((info) => {
        console.log(info);
        setCustomersInfo(info);
      });
  };

  useEffect(() => {
    fetchOrdersInfo();
    fetchProductsInfo();
    fetchCustomersInfo();
  }, []);

  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" links={navigationLinks} />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
          <ul className="ordersInfoList">
            {ordersInfo.filter((item) => customersInfo.some((customer) => customer.id === item.customer_id))
              .map((item) => (
              <li key={item.id}>
                <p>
                  <b>Customer name: </b>
                  {customersInfo.find((customer) => customer.id === item.customer_id)?.name}{" "}
                  {customersInfo.find((customer) => customer.id === item.customer_id)?.surname}
                </p>
                <p>
                  <b>Customer id: </b>
                  {item.customer_id}
                </p>
                <p>
                  <b>Products: </b>
                  {productsInfo
                    .filter((product) => item.products_to_order.includes(product.id))
                    .map((prod) => prod.name)
                    .join(", ")}
                </p>
                <p>
                  <b>Product id: </b>
                  {item.products_to_order.join(", ")}
                </p>
                <p>
                  <b>Order id: </b>
                  {item.order_id}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
