// UserProfileCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfileCard = ({ isLoggedIn }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from your backend API only if the user is logged in
    const fetchUserData = async () => {
      try {
        const response = await axios.post('http://192.168.1.4:45455/v1/Register');
        setUser(response.data); // Assuming response.data is the user object
        console.log(response.data);
      } 
      catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (isLoggedIn) {
      fetchUserData();
    }
  }, [isLoggedIn]); // The dependency array now includes isLoggedIn

  return (
    <div className="user-profile-card">
      {user ? (
        <>
          <img
            src={`https://api.adorable.io/avatars/150/${user.username}.png`}
            alt={`${user.username}'s Avatar`}
            className="avatar"
          />
          <div className="user-details">
            <h2>{user.name}</h2>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong> {user.website}
            </p>
          </div>
        </>
      ) : (
        isLoggedIn && <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserProfileCard;
