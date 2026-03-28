import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Form Data = ", formData);
  }

  return (
    <div className="min-h-screen flex justify-center items-start pt-10 bg-gray-100">
      <form
        onSubmit={submitHandler}
        className="bg-white w-full max-w-2xl shadow-xl rounded-2xl p-8 space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">
          User Information
        </h1>

        {/* First Name */}
        <div>
          <label className="block font-medium mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block font-medium mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block font-medium mb-1">Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="uae">UAE</option>
          </select>
        </div>

        {/* Address */}
        <div>
          <label className="block font-medium mb-1">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            value={formData.streetAddress}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* City */}
        <div>
          <label className="block font-medium mb-1">City</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* State */}
        <div>
          <label className="block font-medium mb-1">State</label>
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Postal Code */}
        <div>
          <label className="block font-medium mb-1">Postal Code</label>
          <input
            type="number"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Checkboxes */}
        <fieldset className="border border-gray-300 p-4 rounded-xl">
          <legend className="font-semibold text-gray-700">By Email</legend>

          <div className="flex gap-3 mt-2">
            <input
              type="checkbox"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
              className="w-5 h-5"
            />
            <div>
              <label className="font-medium">Comments</label>
              <p className="text-gray-600 text-sm">
                Get notified when someone comments.
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-3">
            <input
              type="checkbox"
              name="candidate"
              checked={formData.candidate}
              onChange={changeHandler}
              className="w-5 h-5"
            />
            <div>
              <label className="font-medium">Candidate</label>
              <p className="text-gray-600 text-sm">
                Get notified when someone applies.
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-3">
            <input
              type="checkbox"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
              className="w-5 h-5"
            />
            <div>
              <label className="font-medium">Offers</label>
              <p className="text-gray-600 text-sm">
                Get notified about new offers.
              </p>
            </div>
          </div>
        </fieldset>

        {/* Radio Buttons */}
        <fieldset className="border border-gray-300 p-4 rounded-xl">
          <legend className="font-semibold text-gray-700">
            Push Notifications
          </legend>
          <p className="text-gray-600 text-sm mb-3">
            Delivered via SMS to your mobile phone
          </p>

          <div className="flex gap-3 mb-2">
            <input
              type="radio"
              name="pushNotification"
              value="Everything"
              onChange={changeHandler}
              className="w-5 h-5"
            />
            <label>Everything</label>
          </div>

          <div className="flex gap-3 mb-2">
            <input
              type="radio"
              name="pushNotification"
              value="Same as Email"
              onChange={changeHandler}
              className="w-5 h-5"
            />
            <label>Same as Email</label>
          </div>

          <div className="flex gap-3">
            <input
              type="radio"
              name="pushNotification"
              value="No Push Notification"
              onChange={changeHandler}
              className="w-5 h-5"
            />
            <label>No Push Notification</label>
          </div>
        </fieldset>

        {/* Submit Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
