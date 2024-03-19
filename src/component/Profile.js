// Profile.js
import React from 'react';
import { useProfile } from './ProfileContext';

const Profile = () => {
  const { profile, updateProfile } = useProfile();

  const handleChange = (e) => {
    updateProfile({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Profile Management</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={profile.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={profile.email} onChange={handleChange} />
        </div>
      </form>
      <div>
        <h3>Your Profile:</h3>
        <p>Username: {profile.username}</p>
        <p>Email: {profile.email}</p>
      </div>
    </div>
  );
};

export default Profile;