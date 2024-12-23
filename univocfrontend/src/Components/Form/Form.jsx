import React, { useState } from "react";
import contactBg from '../../Assets/contactbg.png';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    school: "",
    message: "",
  });
  const [error, setError] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    school: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setError({
      ...error,
      [e.target.id]: validate(e.target.id, e.target.value),
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      school: value,
    });
    setError({
      ...error,
      school: validate("school", value),
    });
  };

  const validate = (name, value) => {
    switch (name) {
      case "fullName":
        if (!value) {
          return "Full name is required";
        } else {
          return "";
        }
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          return "Email is required";
        } else if (!emailRegex.test(value)) {
          return "Invalid email address";
        } else {
          return "";
        }
      case "phone":
        if (!value) {
          return "Phone number is required";
        } else {
          return "";
        }
      case "state":
        if (!value) {
          return "State is required";
        } else {
          return "";
        }
      case "city":
        if (!value) {
          return "City is required";
        } else {
          return "";
        }
      case "school":
        if (!value) {
          return "School is required";
        } else {
          return "";
        }
      case "message":
        if (!value) {
          return "Message is required";
        } else {
          return "";
        }
      default:
        return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = Object.keys(formData).reduce((acc, key) => {
      const error = validate(key, formData[key]);
      if (error) {
        acc[key] = error;
      }
      return acc;
    }, {});

    if (Object.values(formErrors).some((error) => error)) {
      setError(formErrors);
      return;
    }

    console.log(formData);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      state: "",
      city: "",
      school: "",
      message: "",
    });
  };

  return (
    <div
      className="min-h-screen w-full overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
        <div className="text-white space-y-6 max-w-xl p-4">
          <h1 className="text-3xl font-bold">Have More Questions?</h1>
          <p className="text-md opacity-90 text-gray-200">
            Reach out to us. Our support team is here to assist you.
          </p>

          <div className="space-y-4 text-lg">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
              </svg>
              <a href="mailto:Hrd@Theunivoc.Com" className="hover:underline text-gray-200">
                Hrd@Theunivoc.Com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
              </svg>
              <a href="tel:+918448373884" className="hover:underline text-gray-200">
                +91 84483 73884
              </a>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                id="fullName"
                placeholder="Full Name*"
                value={formData.fullName}
                required
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
            {error.fullName && <p className="text-red-500 text-sm">{error.fullName}</p>}
            <div>
              <input
                id="email"
                type="email"
                placeholder="Email*"
                value={formData.email}
                required
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
            {error.email && <p className="text-red-500 text-sm">{error.email}</p>}

            <div>
              <input
                id="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                required
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
            {error.phone && <p className="text-red-500 text-sm">{error.phone}</p>}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  id="state"
                  placeholder="State*"
                  value={formData.state}
                  required
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              {error.state && <p className="text-red-500 text-sm">{error.state}</p>}
              <div>
                <input
                  id="city"
                  placeholder="City*"
                  value={formData.city}
                  required
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              {error.city && <p className="text-red-500 text-sm">{error.city}</p>}
            </div>

            <div>
              <select
                value={formData.school}
                onChange={(e) => handleSelectChange(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="">Select School*</option>
                <option value="school1">School 1</option>
                <option value="school2">School 2</option>
                <option value="school3">School 3</option>
              </select>
            </div>
            {error.school && <p className="text-red-500 text-sm">{error.school}</p>}

            <div>
              <textarea
                id="message"
                placeholder="Your Message*"
                value={formData.message}
                required
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md text-sm h-20"
              />
            </div>
            {error.message && <p className="text-red-500 text-sm">{error.message}</p>}

            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;