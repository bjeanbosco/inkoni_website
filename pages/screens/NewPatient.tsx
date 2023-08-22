import React, { useState } from "react";
import Sidebar from "./Sidebar";

const NewAppointments: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can use the form data stored in state variables
  };

  return (
    <div className="flex ml-4">
      <Sidebar />

      <div className="flex-1 bg-maincolor h-screen p-3 ml-60 p-3">

        <h1 className="ml-10 mt-6 text-2xl font-bold">
          Appointments {">"}
          <span className="text-orange font-bold">Register New Patients</span>
        </h1>

        {/* Square-like form container */}
        <div className="bg-primary border border-gray-400 rounded ml-10 p-2 mt-10 1xl w-6/10">
          <h2 className="text-xl font-bold mt-10 mb-6  ml-10">Patient's Infromation</h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="ml-10 mr-10">

             {/* First Name and Last Name */}
             <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border rounded p-2 w-full bg-maincolor"
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border rounded p-2 w-full bg-maincolor"
                />
              </div>
            </div>
           

            {/* Identification Number */}
            <div className="mb-4">
              <label htmlFor="identificationNumber">Identification Number</label>
              <input
                type="text"
                id="identificationNumber"
                value={identificationNumber}
                onChange={(e) => setIdentificationNumber(e.target.value)}
                className="border rounded p-2 w-full bg-maincolor"
              />
            </div>
            

              {/* phone Number */}
              <div className="mb-4">
              <label htmlFor="phoneNumber">phone Number</label>
              <input
                 type="text"
                 id="phoneNumber"
                 value={phoneNumber}
                 onChange={(e) => setPhoneNumber(e.target.value)}
                className="border rounded p-2 w-full bg-maincolor"
              />
            </div>
           

             {/* date of birth and Insurance Type */}
             <div className="grid grid-cols-2 gap-4 mb-4">
             <div>
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="border rounded p-2 w-full bg-maincolor"
                />
              </div>
              <div>
                <label htmlFor="insuranceType">Insurance Type</label>
                <select
                  id="insuranceType"
                  value={insuranceType}
                  onChange={(e) => setInsuranceType(e.target.value)}
                  className="border rounded p-2 w-full bg-maincolor"
                >
                  <option value="">Select Insurance Type</option>
                  <option value="RSSB">RSSB</option>
                  <option value="Private">Private</option>
                </select>
              </div>
            </div>

            {/* Register Button */}
            <div className="flex justify-center">
              <button type="submit" className="bg-orange text-white font-bold px-4 py-2 rounded mb-10 mt-10">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAppointments;