"use client"

import { useState, ChangeEvent, FormEvent } from 'react';

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
    'Residential Roofingl',
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
    <section className="contact-us-form py-6 px-4 bg-black xl-custom:px-10">
      <div className="container mx-auto flex justify-center items-center">
        <div className="py-6 px-4 w-full xl-custom:px-72 xl-custom:pt-20">
          <div className="bg-white p-6 rounded-md shadow-lg w-full">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Book A Service
            </h2>
            <p className="text-xl mb-4 text-black">Free Estimation</p>
            <p className="text-lg mb-6 text-black">
              Please fill out the form and provide details of your request, we
              will reply back soon.
            </p>

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
                  className="w-full p-3 bg-white border-2 border-[#cccccc] rounded-md focus:outline-none"
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
                  className="w-full p-3 bg-white border-2 border-[#cccccc] rounded-md focus:outline-none"
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
                  className="w-full p-3 bg-white border-2 border-[#cccccc] rounded-md focus:outline-none"
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
                  className="w-full p-3 bg-white border-2 border-[#cccccc] rounded-md focus:outline-none"
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
                  className="w-full p-3 bg-white border-2 border-[#cccccc] rounded-md focus:outline-none"
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
                  className="w-full p-3 bg-white border-2 border-[#cccccc] rounded-md focus:outline-none"
                  rows={5}
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
