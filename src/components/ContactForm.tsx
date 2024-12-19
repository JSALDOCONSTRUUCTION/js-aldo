import React, { FC } from 'react';
import { Oval } from 'react-loader-spinner'; // Loader import

// Define the FormData type for form state
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  requirements: string;
}

// Define the props for the ContactForm component
interface ContactFormProps {
  formData: FormData; // The form data state
  services: string[]; // List of services for the dropdown
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void; // Function to handle input changes
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void; // Function to handle form submission
  loading: boolean; // Loading state passed from parent
}

const ContactForm: FC<ContactFormProps> = ({
  formData,
  services,
  handleChange,
  handleSubmit,
  loading, // Access the loading state
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* First Name Input */}
      <div>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="w-full p-3 py-1 bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      {/* Last Name Input */}
      <div>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="w-full p-3 py-1 bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      {/* Email Address Input */}
      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-3 py-1 bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      {/* Phone Number Input */}
      <div>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full p-3 py-1 bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
          className="w-full p-3 py-1 bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required
        >
          <option value="" disabled>
            Select a Service
          </option>
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
          className="w-full p-3 py-1 bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          rows={4}
          required
        />
      </div>

      {/* Submit Button or Loader */}
      <div className="flex justify-end">
        {loading ? (
          <div className="w-40 py-3 bg-[#0e1642] text-white font-semibold rounded-md flex justify-center items-center">
            <Oval
              color="white"
              strokeWidth={5}
              height={24}
              width={92}
              secondaryColor="wheat"
            />
          </div>
        ) : (
          <button
            type="submit"
            className="w-40 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
          >
            Send Message
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
