import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Tutoria App Privacy Policy</h1>
      <p>Welcome to Tutoria! Your privacy is important to us. This Privacy Policy explains what information we collect, how we use it, and your choices regarding your data.</p>
      
      <h2>Information We Collect</h2>
      <ul>
        <li><strong>Account Information:</strong> When you register, we collect your username, email, and password.</li>
        <li><strong>Tutor Information:</strong> If you sign up as a tutor, we may collect your name, phone number, qualifications, and courses you offer.</li>
        <li><strong>Usage Data:</strong> We collect information about how you use the app to improve our services.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use your information to provide and improve the app, match students with tutors, and allow you to participate in features like AskAway and Arkive.</p>

      <h2>Future Premium Features</h2>
      <p>In the future, we may introduce optional premium features that will require payment. We will update you and our policies accordingly before these changes take effect.</p>

      <p>For any questions, feel free to contact us at <a href="mailto:youremail@example.com">youremail@example.com</a>.</p>
    </div>
  );
};

export default PrivacyPolicy;
