import React, { useState, useEffect } from 'react';
import { auth } from './firebase'; // Import the Firebase auth instance
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';


function Login() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  let recaptchaVerifier;

  useEffect(() => {
    // Initialize recaptchaVerifier with rendered widget
    recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        handleSendOtp();
      },
    });

    // Render reCAPTCHA widget
    recaptchaVerifier.render();
  }, []);

  const handleSendOtp = async () => {
    try {
      const phoneNumberForOtp = `+91${phone}`; // Format phone number with +91 country code
      const appVerifier = recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumberForOtp, appVerifier);
      setOtpSent(true);
      setConfirmationResult(confirmationResult); // Store confirmationResult
    } catch (error) {
      // Handle OTP send error
      console.error('OTP send error:', error);
    }
  };

  const handleOtpLogin = async () => {
    try {
      const userCredential = await confirmationResult.confirm(otp);
      // Handle successful OTP login
      console.log('User signed in successfully:', userCredential.user);
    } catch (error) {
      // Handle OTP login error
      console.error('OTP login error:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
      <div id="recaptcha-container"></div>
      {!otpSent ? (
        <button onClick={handleSendOtp}>Send OTP</button>
      ) : (
        <>
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="OTP" />
          <button onClick={handleOtpLogin}>Login with OTP</button>
        </>
      )}
    </div>
  );
}

export default Login;
