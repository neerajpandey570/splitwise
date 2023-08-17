import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

function Friends() {
  const [friends, setFriends] = useState([]);
  const [email, setEmail] = useState('');

  const handleAddFriend = () => {
    // Implement logic to add a friend
    setFriends([...friends, { email }]);
    setEmail('');
  };

  return (
    <div>
      <h1>Friends Management</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleAddFriend}>Add Friend</button>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Friends;
