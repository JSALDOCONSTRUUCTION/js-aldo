interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  requirements: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  firstName,
  lastName,
  email,
  phone,
  service,
  requirements,
}) => (
  <div>
    <h1>Contact Request Details</h1>
    <p>
      <strong>First Name:</strong> {firstName}
    </p>
    <p>
      <strong>Last Name:</strong> {lastName}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Phone:</strong> {phone}
    </p>
    <p>
      <strong>Service:</strong> {service}
    </p>
    <p>
      <strong>Requirements:</strong> {requirements}
    </p>
  </div>
);
