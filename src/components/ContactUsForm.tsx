"use client"

import { useState, ChangeEvent } from 'react';
import LeftContent from './LeftContent';
import ContactForm from './ContactForm';

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      alert('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        requirements: '',
      });
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };

  return ( 
    <section
      className="contact-us-form m-0 sm:m-20 py-6 px-4 bg-cover bg-no-repeat xl-custom:px-10 relative sm:rounded-2xl"
      style={{
        backgroundColor: '#0e1642',
      }}
    >
      <div className="absolute inset-0 bg-[#0e1642] opacity-60 sm:rounded-2xl"></div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start shadow-lg relative">
        <LeftContent />
        <div className="w-full md:w-1/2 py-6 px-4 min-w-min">
          <div className="bg-white p-6 rounded-md shadow-lg w-full">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Free Estimation
            </h2>
            <ContactForm
              formData={formData}
              services={services}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
