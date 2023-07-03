import { MainNav } from "@/components/MainNav";
import { navigationLinks } from "../config/navigationLinks";
import { UserNav } from "./CustomersPage/components/UserNav";
import { useState } from "react";

export const AddCustomerPage = () => {
  const [name, setCustomerName] = useState("");
  const [surname, setCustomerSurname] = useState("");
  const [email, setCustomerEmail] = useState("");
  const [phoneNumber, setCustomerPhoneNumber] = useState("");

  const customerName = (event) => {
    setCustomerName(event.target.value);
  };

  const customerSurname = (event) => {
    setCustomerSurname(event.target.value);
  };
  const customerEmail = (event) => {
    setCustomerEmail(event.target.value);
  };
  const customerPhoneNumber = (event) => {
    setCustomerPhoneNumber(event.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (name === "") return;
    if (email === "" || !email.includes("@")) return;
    const cleanedPhoneNumber = phoneNumber.replace(/[\s-]/g, "");
    if (phoneNumber === "" || cleanedPhoneNumber.length !== 9) return;

    const customerData = {
      name: name,
      surname: surname,
      email: email,
      phone_number: phoneNumber,
    };

 
    const response = fetch("http://127.0.0.1:8000/customers", {
      method: "POST",
      body: JSON.stringify(customerData),
      headers: {
        "Content-Type": "application/json",
      },
    });


    setCustomerName("");
    setCustomerSurname("");
    setCustomerEmail("");
    setCustomerPhoneNumber("");
  };
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
          <h2 className="text-3xl font-bold tracking-tight">Add customer</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex"></div>
      </div>
      <form onSubmit={handleFormSubmit} className="customerInfoForm">
        <label>Name</label>
        <input
          type="text"
          onChange={customerName}
          value={name}
          placeholder="Norbert"
        ></input>
        <label>Surname</label>
        <input
          type="text"
          onChange={customerSurname}
          value={surname}
          placeholder="Gierczak"
        ></input>
        <label>Email</label>
        <input
          type="text"
          onChange={customerEmail}
          value={email}
          placeholder="matirybaraki@gmail.com"
        ></input>
        <label>PhoneNumber</label>
        <input
          type="text"
          onChange={customerPhoneNumber}
          value={phoneNumber}
          placeholder="133 742 069"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
