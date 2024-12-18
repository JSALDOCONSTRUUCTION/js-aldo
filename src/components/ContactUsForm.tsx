'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import LeftContent from './LeftContent'; // Import the LeftContent component

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  requirements: string;
}

const ContactUsForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    requirements: '',
  });

  const services = [
    'Commercial Roofing',
    'Residential Roofing',
    'Gutter',
    'Siding',
    'Windows',
    'Other',
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission, e.g., send form data to an API or email
    console.log(formData);
  };

  return (
    <section
      className="contact-us-form m-20 py-6 px-4 bg-cover bg-no-repeat xl-custom:px-10 relative rounded-2xl"
      style={{
        backgroundColor: '#0e1642', // Replace background image with the color
      }}
    >
      {/* Blue color filter overlay */}
      <div className="absolute inset-0 bg-[#0e1642] opacity-60 rounded-2xl"></div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start shadow-lg relative">
        {/* Left content */}
        <LeftContent /> {/* Using the LeftContent component */}
        {/* Right-side form */}
        <div className="w-full md:w-1/2 py-6 px-4 min-w-min">
          <div className="bg-white p-6 rounded-md shadow-lg w-full">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Free Estimation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name */}
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full p-3 py-1 bg-white border-2 border-[#cccccc] rounded-md focus:outline-none"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full p-3 py-1 bg-white border-2 border-[#cccccc] rounded-md focus:outline-none"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full p-3 py-1 bg-white border-2 border-[#cccccc] rounded-md focus:outline-none"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full p-3 py-1 bg-white border-2 border-[#cccccc] rounded-md focus:outline-none"
                  required
                />
              </div>

              {/* Service Dropdown */}
              <div>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 py-1 bg-white border-2 border-[#cccccc] rounded-md focus:outline-none"
                  required
                >
                  <option value="">Select a Service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Requirements Textarea */}
              <div>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Your Requirements..."
                  className="w-full p-3 py-1 bg-white border-2 border-[#cccccc] rounded-md focus:outline-none"
                  rows={2}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-40 py-3 bg-[#a53748] text-white font-semibold rounded-md hover:bg-[#8b2c3d] transition-colors"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
