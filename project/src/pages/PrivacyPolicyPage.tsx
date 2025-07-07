import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="mb-4">
        Welcome to our Privacy Policy page! This document outlines how Securely collects,
        uses, and protects any information that you give Securely when you use this website.
      </p>
      <p className="mb-4">
        We are committed to ensuring that your privacy is protected. Should we ask you to
        provide certain information by which you can be identified when using this website,
        then you can be assured that it will only be used in accordance with this privacy
        statement.
      </p>
      <p className="mb-4">
        Securely may change this policy from time to time by updating this page. You should
        check this page occasionally to ensure that you are happy with any changes.
      </p>
      {/* Add more detailed sections of your privacy policy here */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
      <p className="mb-4">
        We may collect the following information:
      </p>
      <ul className="list-disc list-inside mb-4 pl-4">
        <li>Name and contact information (e.g., email address)</li>
        <li>Demographic information such as postcode, preferences, and interests</li>
        <li>Other information relevant to customer surveys and/or offers</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use the Information</h2>
      <p className="mb-4">
        We require this information to understand your needs and provide you with a better service,
        and in particular for the following reasons:
      </p>
      <ul className="list-disc list-inside mb-4 pl-4">
        <li>Internal record keeping.</li>
        <li>We may use the information to improve our products and services.</li>
        <li>We may periodically send promotional emails about new products, special offers,
            or other information which we think you may find interesting using the email address
            which you have provided.</li>
      </ul>
      {/* Continue with sections like Security, Links to other websites, Controlling your personal information, etc. */}

      <p className="mt-8 text-sm text-gray-400">Last updated: July 7, 2024</p>
    </div>
  );
};

export default PrivacyPolicyPage;