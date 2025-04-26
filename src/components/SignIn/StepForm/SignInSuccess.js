import React from 'react';

const SignInSuccess = ({ userSignIn }) => {
  // Check if userSignIn is not null and contains the required data
  const { userInfo, error } = userSignIn || {}; // Destructure with default empty object

  return (
    <div className="signin-success">
      {/* If there is an error, show the error message */}
      {error ? (
        <p className="error-message">{error.message}</p> // Ensure error exists
      ) : (
        <div>
          <h3>Welcome, {userInfo ? userInfo.userName : 'User'}!</h3>
          <p>{userInfo ? `Phone: ${userInfo.phone}` : 'Loading user data...'}</p>
        </div>
      )}
    </div>
  );
};

export default SignInSuccess;
