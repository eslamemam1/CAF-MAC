import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    });
  };

  return (
    <div className="flex justify-center items-center w-[100%] bg-gray-100 mb-5 mt-5">
      <div className="bg-white rounded w-[100%] shadow-md p-8 max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">{t("Name")}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="mb-4 md:flex-1">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">{t("Email")}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4 md:flex-1">
              <label htmlFor="phoneNumber" className="block text-sm font-semibold mb-2">{t("Phone Number")}</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded focus:outline-none focus:border-green-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">{t("Message")}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded focus:outline-none focus:border-green-500"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-3 px-4 rounded hover:bg-green-600 focus:outline-none">{t("Send")}</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
