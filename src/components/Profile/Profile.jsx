// src/components/Profile/Profile.jsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './Profile.css';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            {user?.name?.charAt(0).toUpperCase() || 'U'}
          </div>
          <h2>Welcome back, {user?.name || 'User'}!</h2>
          <p className="profile-email">{user?.email}</p>
        </div>
        
        <div className="profile-details">
          <div className="detail-item">
            <h3>Account Information</h3>
            <div className="detail-row">
              <span className="detail-label">Full Name:</span>
              <span className="detail-value">{user?.name || 'Not provided'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Email:</span>
              <span className="detail-value">{user?.email || 'Not provided'}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Member Since:</span>
              <span className="detail-value">
                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
              </span>
            </div>
          </div>

          <div className="profile-actions">
            <button className="btn btn-edit">Edit Profile</button>
            <button className="btn btn-change-password">Change Password</button>
            <button className="btn btn-order-history">Order History</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;