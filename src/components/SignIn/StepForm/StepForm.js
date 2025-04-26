import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PhoneInput from './PhoneInput'; // Input to capture phone number
import SignInSuccess from './SignInSuccess'; // Success screen after login

import './StepForm.css';

const StepForm = (props) => {
    const [state, setState] = useState({
        phone: '',
        // No more 'hash' or 'otp' since we're not using OTP anymore
    });
    const [step, setStep] = useState(1);

    const data = useSelector(state => state.userSignIn); // Assuming you have the user data in Redux state

    const handleChange = (input) => (e) => {
        setState({...state, [input]: e.target.value.replace(/\D/, '')}); // Keep only numeric characters
    };

    const nextStep = () => {
        setStep(prevStep => prevStep + 1); // Move to the next step
    };

    const prevStep = () => {
        setStep(prevStep => prevStep - 1); // Go back to the previous step
    };

    const { phone } = state; // We're only dealing with phone number now
    const value = { phone }; // Only passing phone as part of the state

    switch(step) {
        case 1: 
            return <PhoneInput nextStep={nextStep} handleChange={handleChange} value={value} />;
        case 2: 
            // Call the backend to login with phone number, no need for OTP verification
            nextStep(); // If the phone is verified successfully, move to the success step
            return null; // Or display a loading indicator here
        case 3: 
            return <SignInSuccess userSignIn={data} />;
        default: 
            return <PhoneInput nextStep={nextStep} handleChange={handleChange} value={value} />;
    }
};

export default StepForm;
