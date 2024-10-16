import React, { useState, useEffect } from 'react';
import { fetchPsnGameData } from '../actions/psn';
import Image from 'next/image';

function UserProfile({ userName }) {
    const [userProfile, setUserProfile] = useState(null);
  
    useEffect(() => {
      async function fetchProfile() {
        try {
          const data = await fetchPsnGameData(); // Replace with your authorization fetching logic
          setUserProfile(data);
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      }
  
      fetchProfile();
    }, [userName]);
  
    if (!userProfile) {
      return <div>Loading...</div>;
    }
    const {
        onlineId,
        avatarUrls,
        trophySummary,
        primaryOnlineStatus,
        personalDetail,
      } = userProfile;
    
      const avatarUrl = avatarUrls.length > 1 
        ? avatarUrls[1].avatarUrl 
        : avatarUrls[0].avatarUrl;
    
      return (
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <img
              className="w-16 h-16 rounded-full"
              src={avatarUrl}
              alt="User Avatar"
            />
            <div>
              <h1 className="text-3xl font-bold text-white">{onlineId}</h1>
              <p className={`text-gray-300 ${primaryOnlineStatus === 'online' ? 'text-green-400' : ''}`}>
                {primaryOnlineStatus.charAt(0).toUpperCase() + primaryOnlineStatus.slice(1)}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-blue-400">Trophy Summary</h2>
            <ul className="text-gray-300 mt-2">
              <li>Level: {level}</li>
              <li>Progress: {progress}%</li>
              <li>Platinum: {earnedTrophies.platinum}</li>
              <li>Gold: {earnedTrophies.gold}</li>
              <li>Silver: {earnedTrophies.silver}</li>
              <li>Bronze: {earnedTrophies.bronze}</li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-blue-400">Personal Details</h2>
            <p className="text-gray-300">Name: {firstName} {lastName}</p>
          </div>
        </div>
      );
    }
    
    export default UserProfile;