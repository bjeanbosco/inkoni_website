import React, { useState } from "react";
import Sidebar from "./Sidebar";
import router from "next/router";

const NewAppointments: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleNewAppointmentsClick = () => {
    router.push("/screens/NewAppointment");
  };


  return (
    <div className="flex ml-4">
      <Sidebar />

      <div className="flex-1 bg-maincolor h-screen p-3 ml-60 p-3">
      <h1 className="ml-6 mt-10 text-2xl font-bold">
          Appointments {">"}{" "}
          <span className="text-orange">New Appointments</span>
        </h1>

        {/* Square-like form container */}
        <div className="bg-primary border border-gray-400 rounded ml-10 p-2 mt-10 1xl w-6/10">
          <h2 className="text-xl font-bold mt-10 mb-6  ml-10">Deriver Information</h2>

          {/* Form */}
          <form className="ml-10 mr-10">

            <div className="grid grid-cols-2 gap-4 mb-4 ">
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

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded p-2 w-full bg-maincolor"
              />
            </div>

            {/* Phone Number and Insurance Type */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
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

            {/* Date of Birth and Appointment Date */}
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
                <label htmlFor="appointmentDate">Appointment Date</label>
                <input
                  type="date"
                  id="appointmentDate"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  className="border rounded p-2 w-full bg-maincolor"
                />
              </div>
            </div>

            {/* Service */}
            <div className="mb-4">
              <label htmlFor="selectedService">Service</label>
              <select
                id="selectedService"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="border rounded p-2 w-full bg-maincolor"
              >
                <option value="">Select a Service</option>
              
              </select>
            </div>

            {/* Register Button */}
            <div className="flex justify-center">
              <button type="submit" className="bg-orange text-white font-bold px-10 py-2 rounded">
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