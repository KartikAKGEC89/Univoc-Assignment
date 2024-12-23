import React, { useState } from "react";
import contactBg from "../../Assets/contactbg.png";

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

  const [successMessage, setSuccessMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

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
        return !value ? "Full name is required" : "";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !value
          ? "Email is required"
          : !emailRegex.test(value)
          ? "Invalid email address"
          : "";
      case "phone":
        return !value ? "Phone number is required" : "";
      case "state":
        return !value ? "State is required" : "";
      case "city":
        return !value ? "City is required" : "";
      case "school":
        return !value ? "School is required" : "";
      case "message":
        return !value ? "Message is required" : "";
      default:
        return "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = Object.keys(formData).reduce((acc, key) => {
      const error = validate(key, formData[key]);
      if (error) acc[key] = error;
      return acc;
    }, {});

    if (Object.values(formErrors).some((error) => error)) {
      setError(formErrors);
      return;
    }

    try {
      const response = await fetch("https://univoc-assignment.onrender.com/univoc/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phnumber: formData.phone,
          state: formData.state,
          city: formData.city,
          school: formData.school,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSuccessMessage("Your feedback has been submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          state: "",
          city: "",
          school: "",
          message: "",
        });
        setSubmitError("");
      } else {
        throw new Error("Failed to submit feedback. Please try again later.");
      }
    } catch (error) {
      setSubmitError(error.message);
    }
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
              <a href="mailto:Hrd@Theunivoc.Com" className="hover:underline text-gray-200">
                Hrd@Theunivoc.Com
              </a>
            </div>
            <div className="flex items-center gap-2">
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
            </div>
            {error.state && <p className="text-red-500 text-sm">{error.state}</p>}
            {error.city && <p className="text-red-500 text-sm">{error.city}</p>}

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

            {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
            {submitError && <p className="text-red-500 text-sm">{submitError}</p>}

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
